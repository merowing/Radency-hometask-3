import { Module } from '@nestjs/common';
import { archiveNotesController } from '../controllers/archivenotes.controller';
import { StateNotesService } from '../services/statenotes.service';

@Module({
    controllers:[archiveNotesController],
    providers:[StateNotesService],
})

export class ArchiveNotesModule {};
