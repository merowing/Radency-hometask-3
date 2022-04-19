import { Injectable } from '@nestjs/common';
import { Note } from '../helpers/note.interface';
import unique from '../helpers/uniqueId';
import { getAllNotesDB, getNoteDB, removeNoteDB, addNoteDB, updateNoteDB } from '../helpers/notesDatabase';
import { errorEmptyObject, errorIdNotFound, errorPositiveId } from '../helpers/errorMessages';

@Injectable()
export class NotesService {
  getNote(id: number): Note | boolean {
    const db = getAllNotesDB();
    const index = db.findIndex(item => item.id === id);
    
    if(index === -1) return false;
    return getNoteDB(index);
  }

  getNotes(): Array<Note> {
    return getAllNotesDB();
  }

  addNote(note: {name: string, category: number, description: string}): Note {
      const { name, category, description } = note;
      const id = unique();
      const created = +new Date();
      const archived = 0;

      const data = {
            id,
            name,
            created,
            category,
            description,
            archived,
      };
      addNoteDB(data);

      return data;
  }

  editNote(id: number, data: Object): Object {
    if(!Object.keys(data).length) {
      return errorEmptyObject()
    }

    const indexItemInDB = getAllNotesDB().findIndex(item => item.id === id);

    if(indexItemInDB >= 0) {
      updateNoteDB(data, indexItemInDB);
      return this.getNote(indexItemInDB);
    }

    return errorPositiveId();
  }

  removeNote(id: number): boolean | object {
    const index = getAllNotesDB().findIndex(item => item.id === id);
    if(index !== -1) {
      removeNoteDB(index);
      return true;
    }

    return errorIdNotFound(id);
  }
}
