import DB from "./notesDatabase";

function activeNotes(status: boolean) {
    const data = DB.getAllNotes().filter(item => item.archived === +!status);
    return {
        data,
        length: data.length,
    }
}

export default activeNotes;
