import { Module } from '@nestjs/common';
import { activeNotesController } from '../controllers/activenotes.controller';
import { StateNotesService } from '../services/statenotes.service';

@Module({
    controllers:[activeNotesController],
    providers:[StateNotesService],
})

export class ActiveNotesModule {};
