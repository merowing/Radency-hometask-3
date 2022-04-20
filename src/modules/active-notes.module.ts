import { Module } from '@nestjs/common';
import { activeNotesController } from '../controllers/active-notes.controller';
import { StateNotesService } from '../services/state-notes.service';

@Module({
    controllers: [activeNotesController],
    providers: [StateNotesService],
})

export class ActiveNotesModule {};
