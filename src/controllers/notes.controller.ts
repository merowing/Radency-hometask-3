import { Body, Controller, Get, NotFoundException, Param, Post, Put, Delete, Patch, ParseIntPipe, UsePipes, ValidationPipe } from "@nestjs/common";
import { NotesService } from "../services/notes.service";
import { Notes, StateNotes } from "../helpers/note.interface";
import { AddNoteDto } from "src/helpers/dto/add-note.dto";
import { EditNoteDto } from "src/helpers/dto/edit-note.dto";
import { errorNoteNotFound } from "src/helpers/errorMessages";

@Controller()
export class notesController {
  constructor(private readonly noteService: NotesService) {}

  @Get(':id')
  getNote(@Param('id', ParseIntPipe) id: number): Notes {
    const note = this.noteService.getNote(id);
    
    if(!note) return errorNoteNotFound();
    
    return {data: note, error: ''};
  }

  @Get()
  getNotes(): StateNotes {
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
  ): Object {
    
    return this.noteService.editNote(+id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id): boolean | Object {
    return this.noteService.removeNote(id);
  }

}
