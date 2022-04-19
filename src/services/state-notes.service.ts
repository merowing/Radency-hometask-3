import { Injectable } from "@nestjs/common";
import { activeNotes, changeNotesActive } from '../helpers/activeNotes'

@Injectable()
export class StateNotesService {
    getActiveNotes() {
        return activeNotes(true);
    }
    getArchiveNotes() {
        return activeNotes(false);
    }

    toggleNotesActive(): boolean {
        changeNotesActive();
        return true;
    }
}
