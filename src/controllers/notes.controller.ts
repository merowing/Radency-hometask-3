import { Body, Controller, Get, Param, Post,
  Delete, Patch, ParseIntPipe, ValidationPipe } from "@nestjs/common";
import { NotesService } from "../services/notes.service";
import { NoteType, ErrorStringType, NotesType, StateNotesType } from "../helpers/note.interface";
import { AddNoteDto } from "../dto/add-note.dto";
import { EditNoteDto } from "../dto/edit-note.dto";
import { errorNoteNotFound } from "../helpers/errorMessages";

@Controller()
export class notesController {
  constructor(private readonly noteService: NotesService) {}

  @Get(':id')
  getNote(@Param('id', ParseIntPipe) id: number): NotesType {
    const note = this.noteService.getNote(id);
    
    if(!note) return errorNoteNotFound();
    
    return {data: note, error: ''};
  }

  @Get()
  getNotes(): StateNotesType {
    const data = this.noteService.getNotes();
    const length = data.length;

    return {
      data,
      length
    };
  }

  @Post()
  add(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) data: AddNoteDto): Object {   
    return this.noteService.addNote(data);
  }

  @Patch(':id')
  update(
    @Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) data: EditNoteDto,
    @Param('id', ParseIntPipe) id: string
  ): NoteType | ErrorStringType {
    
    return this.noteService.editNote(+id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id): boolean | Object {
    return this.noteService.removeNote(id);
  }

}
