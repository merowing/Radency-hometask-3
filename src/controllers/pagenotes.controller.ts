import { Controller, Get, Param, Res } from "@nestjs/common";
import { PageNotesService } from "src/services/pagenotes.service";

@Controller()
export class pageNotesController {
    constructor(private readonly pageNotesService: PageNotesService) {}

    @Get(':id')
    getNotePage(@Param('id') id: string): Object {
        return this.pageNotesService.getPageNotes(+id);
    }

    @Get()
    redirect(@Res() res) {
        return res.redirect('page/1');
    }

}