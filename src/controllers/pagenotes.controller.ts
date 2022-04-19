import { Controller, Get, Param, ParseIntPipe, Res } from "@nestjs/common";
import { StateNotes } from "../helpers/note.interface";
import { PageNotesService } from "../services/pagenotes.service";

@Controller()
export class pageNotesController {
    constructor(private readonly pageNotesService: PageNotesService) {}

    @Get(':id')
    getNotePage(@Param('id', ParseIntPipe) id: string): StateNotes {
        return this.pageNotesService.getPageNotes(+id);
    }

    @Get()
    redirect(@Res() res) {
        return res.redirect('page/1');
    }

}