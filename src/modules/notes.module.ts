import { Module } from "@nestjs/common";
import { notesController } from "../controllers/notes.controller";
import { NotesService } from "../services/notes.service";

@Module({
    controllers: [notesController],
    providers: [NotesService],
})

export class NotesModule {}
