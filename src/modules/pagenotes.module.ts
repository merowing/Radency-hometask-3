import { Module } from '@nestjs/common';
import { PageNotesService } from '../services/pagenotes.service';
import { pageNotesController } from '../controllers/pagenotes.controller';

@Module({
    controllers: [pageNotesController],
    providers: [PageNotesService]
})

export class PageNotesModule {}
