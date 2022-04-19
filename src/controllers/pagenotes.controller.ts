import { Controller, Get, Param, ParseIntPipe, Res } from "@nestjs/common";
import { StateNotesType } from "../helpers/note.interface";
import { PageNotesService } from "../services/pagenotes.service";

@Controller()
export class pageNotesController {
    constructor(private readonly pageNotesService: PageNotesService) {}

    @Get()
    getNotePage(@Param('id', ParseIntPipe) id: string): StateNotesType {
        return this.pageNotesService.getPageNotes(+id);
    }

}
