import { Module } from '@nestjs/common';
import { PageNotesService } from 'src/services/pagenotes.service';
import { pageNotesController } from '../controllers/pagenotes.controller';

@Module({
    controllers: [pageNotesController],
    providers: [PageNotesService]
})

export class PageNotesModule {}
