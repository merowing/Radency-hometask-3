import { Injectable, NotFoundException } from "@nestjs/common";
import DB from '../helpers/notesDatabase';

@Injectable()
export class PageNotesService {
    getPageNotes(page: number) {
        if(page < 1 || isNaN(page)) throw new NotFoundException();
        
        const itemsPerPage = 5;
        const start = itemsPerPage * (page - 1);
        const end = itemsPerPage * page;

        const data = DB.getAllNotes().filter((item, ind) => ind >= start && ind < end);

        return {
            data,
            page,
            length: data.length,
        }
    }
}
