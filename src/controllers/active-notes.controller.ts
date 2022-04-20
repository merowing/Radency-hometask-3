import { Controller, Get, Post } from "@nestjs/common";
import { StateNotesType } from "../helpers/note.interface";
import { StateNotesService } from "../services/state-notes.service";

@Controller()
export class activeNotesController {
    constructor(private readonly stateService: StateNotesService) {}
    
    @Get()
    getActive(): StateNotesType {
        return this.stateService.getActiveNotes();
    }

    @Post()
    allActive(): boolean {
        return this.stateService.toggleNotesActive();
    }

}
