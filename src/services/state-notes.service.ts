import { Injectable } from "@nestjs/common";
import activeNotes from '../helpers/activeNotes'
import DB from '../helpers/notesDatabase';

@Injectable()
export class StateNotesService {
    getActiveNotes() {
        return activeNotes(true);
    }
    getArchiveNotes() {
        return activeNotes(false);
    }

    toggleNotesActive(): boolean {
       return DB.toggleActive();
    }
}
