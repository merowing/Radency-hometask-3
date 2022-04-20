import { Injectable } from '@nestjs/common';
import { NoteType, EditNoteType, ErrorStringType } from '../helpers/note.interface';
import { errorEmptyObject, errorIdNotFound } from '../helpers/errorMessages';
import unique from '../helpers/uniqueId';
import DB from '../helpers/notesDatabase';

@Injectable()
export class NotesService {
  getNote(id: number): NoteType | boolean {
    return DB.getNote(id);
  }

  getNotes(): Array<NoteType> {
    return DB.getAllNotes();
  }

  addNote(note: {name: string, category: number, description: string}): NoteType {
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
      DB.addNote(data);

      return data;
  }

  editNote(id: number, data: EditNoteType): NoteType | ErrorStringType {
    if(!Object.keys(data).length) {
      return errorEmptyObject();
    }
    
    let edited = DB.editNote(data, id);
    if(!edited) return errorIdNotFound(+id);

    return DB.getNote(id);
  }

  removeNote(id: number): boolean {
    return DB.removeNote(id);
  }
}
