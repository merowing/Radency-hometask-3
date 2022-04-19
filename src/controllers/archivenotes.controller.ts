import { Controller, Get } from "@nestjs/common";
import { StateNotesType } from "../helpers/note.interface";
import { StateNotesService } from "../services/statenotes.service";

@Controller()
export class archiveNotesController {
    constructor(private readonly stateService: StateNotesService) {}
    
    @Get()
    getArchive(): StateNotesType {
        return this.stateService.getArchiveNotes();
    }
}
