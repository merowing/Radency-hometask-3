import { getAllNotesDB } from "./notesDatabase";

function activeNotes(status: boolean) {
    const data = getAllNotesDB().filter(item => item.archived === +!status);
    return {
        data,
        length: data.length,
    }
}

export default activeNotes;
