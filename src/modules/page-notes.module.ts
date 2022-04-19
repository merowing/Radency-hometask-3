import { Module } from '@nestjs/common';
import { PageNotesService } from '../services/page-notes.service';
import { pageNotesController } from '../controllers/page-notes.controller';

@Module({
    controllers: [pageNotesController],
    providers: [PageNotesService]
})

export class PageNotesModule {}
