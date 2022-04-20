import database from '../repositories/database';
import { NoteType } from './note.interface';

const db = new editDatabase();

function editDatabase() {
    let tempDB = [...database];

    const getIndex = (ind: number) => {
        return tempDB.findIndex(note => note.id === ind);
    }

    this.getAllNotes = () => tempDB;

    this.getNote = (index: number) => {
        const ind = getIndex(index);
        if(ind < 0) return false;
        
        return tempDB[ind];
    }

    this.removeNote = (id: number) => {
        const ind = getIndex(id);
        if(ind < 0) return false;
        
        tempDB.splice(ind, 1);
        return true;
    }

    this.addNote = (data: NoteType) => {
        tempDB = [...tempDB, data];
    }

    this.editNote = (data: NoteType, id: number) => {
        const ind = getIndex(id);
        if(ind < 0) return false;

        tempDB[ind] = {...tempDB[ind], ...data};
        return tempDB[ind];
    }

    this.toggleActive = () => {
        const state = tempDB.some(item => item.archived);
        tempDB = tempDB.map(item => {
            return {...item, archived: +!state};
        });
        return true;
    }
}

export default db;
