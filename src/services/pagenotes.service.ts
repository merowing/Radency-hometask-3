import { Injectable, NotFoundException } from "@nestjs/common";
import database from "src/repositories/database";

@Injectable()
export class PageNotesService {
    getPageNotes(page: number) {
        if(page < 0) throw new NotFoundException();
        
        const itemsPerPage = 5;
        const start = itemsPerPage * (page - 1);
        const end = itemsPerPage * page;

        let data = database.filter((item, ind) => ind >= start && ind < end);

        return {
            data,
            page,
            length: data.length,
        }
    }
}