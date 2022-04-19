import { Controller, Get } from "@nestjs/common";
import { StateNotes } from "../helpers/note.interface";
import { StateNotesService } from "../services/statenotes.service";

@Controller()
export class archiveNotesController {
    constructor(private readonly stateService: StateNotesService) {}
    
    @Get()
    getArchive(): StateNotes {
        return this.stateService.getArchiveNotes();
    }
}
