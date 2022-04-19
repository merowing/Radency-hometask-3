import database from '../repositories/database';
import { NoteType, EditNoteType } from './note.interface';

const getDB = db();

function db() {
    let tempDB = [...database];

    return function(data = null, id = null) {
        // get all notes
        if(!data && id === null) return tempDB;

        // remote note
        if(id >= 0 && !data) tempDB.splice(id, 1);

        // add new note
        if(data && !id) tempDB = [...tempDB, data];

        // edit note
        if(data && id !== null) tempDB[id] = {...tempDB[id], ...data};

        // toggle active all notes
        if(data === null && id === -1) {
            const state = tempDB.some(item => item.archived);
            tempDB = tempDB.map(item => {
                return {...item, archived: +!state};
            });
        }

    }
}

const updateAllNotesDB = () => getDB(null, -1);

const updateNoteDB = (data: EditNoteType, id: number) => getDB(data, id);

const removeNoteDB = (id: number) => getDB(null, id);

const getAllNotesDB = () => getDB();

const getNoteDB = (index: number) => {
    const db = getDB();
    
    return db[index];
}

const addNoteDB = (data: NoteType) => getDB(data);
const getCountDB = () => getDB().length;

export { getAllNotesDB, getNoteDB, addNoteDB, updateNoteDB, removeNoteDB, getCountDB, updateAllNotesDB };
