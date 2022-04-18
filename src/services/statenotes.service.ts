import { Injectable } from "@nestjs/common";
import activeNotes from '../helpers/activenotes.helpers'

@Injectable()
export class StateNotesService {
    getActiveNotes() {
        return activeNotes(true);
    }
    getArchiveNotes() {
        return activeNotes(false);
    }
}