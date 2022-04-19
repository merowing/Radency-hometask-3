import { Module } from '@nestjs/common';
import { archiveNotesController } from '../controllers/archive-notes.controller';
import { StateNotesService } from '../services/state-notes.service';

@Module({
    controllers:[archiveNotesController],
    providers:[StateNotesService],
})

export class ArchiveNotesModule {};
