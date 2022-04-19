import { Controller, Get } from "@nestjs/common";
import { StateNotesType } from "../helpers/note.interface";
import { StateNotesService } from "../services/statenotes.service";

@Controller()
export class activeNotesController {
    constructor(private readonly stateService: StateNotesService) {}
    
    @Get()
    getActive(): StateNotesType {
        return this.stateService.getActiveNotes();
    }
}
