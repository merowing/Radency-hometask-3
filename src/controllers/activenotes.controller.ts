import { Controller, Get } from "@nestjs/common";
import { StateNotes } from "../helpers/note.interface";
import { StateNotesService } from "../services/statenotes.service";

@Controller()
export class activeNotesController {
    constructor(private readonly stateService: StateNotesService) {}
    
    @Get()
    getActive(): StateNotes {
        return this.stateService.getActiveNotes();
    }
}
