import database from "src/repositories/database";

function activeNotes(status: boolean) {
    let data = database.filter(item => item.archived === +!status);
    return {
        data,
        length: data.length,
    }
}

export default activeNotes;
