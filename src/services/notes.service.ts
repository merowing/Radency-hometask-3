import { Injectable } from '@nestjs/common';
import database from '../repositories/database';
import { Note } from '../note.interface';

@Injectable()
export class NotesService {
  getNote(id: string): Note {
    let ind = +id - 1;
    return database[ind];
  }

  getNotes(): Array<Note> {
    return database;
  }
}
