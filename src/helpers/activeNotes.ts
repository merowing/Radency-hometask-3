import { EditNoteType } from "./note.interface";
import { getAllNotesDB, updateAllNotesDB } from "./notesDatabase";

function activeNotes(status: boolean) {
    const data = getAllNotesDB().filter(item => item.archived === +!status);
    return {
        data,
        length: data.length,
    }
}

function changeNotesActive() {
    updateAllNotesDB();
}

export { activeNotes, changeNotesActive };
