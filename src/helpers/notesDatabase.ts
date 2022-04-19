import database from '../repositories/database';
import { Note } from './note.interface';

const getDB = db();

function db() {
    let tempDB = [...database];
    return function(data = null, id = null) {
        // get all notes
        if(!data && id === null) {
            return tempDB;
        }
        // remote note
        if(id >= 0 && !data) {
            tempDB.splice(id, 1);
        }
        // add new note
        if(data && !id) {
            tempDB = [...tempDB, data];
        }
        // edit note
        if(data && id !== null) {
            tempDB[id] = {...tempDB[id], ...data};
        }
        return tempDB;
    }
}

function updateNoteDB(data, id) {
    getDB(data, id);
}

function removeNoteDB(id) {
    getDB(null, id);
}

function getAllNotesDB() {
    return getDB();
}

function getNoteDB(index: number) {
    const db = getDB();
    const id = db.findIndex(item => item.id === index);
    return db[id];
}

function addNoteDB(data: Note) {
    getDB(data);
}

export { getAllNotesDB, getNoteDB, addNoteDB, updateNoteDB, removeNoteDB };
