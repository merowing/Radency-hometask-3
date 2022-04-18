import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { NotesService } from "../services/notes.service";
import { Notes, StateNotes } from "../note.interface";

@Controller()
export class notesController {
  constructor(private readonly noteService: NotesService) {}

  @Get(':id')
  getNote(@Param('id') id: string): Notes {
    if(isNaN(+id)) throw new NotFoundException();
    let note = this.noteService.getNote(id);
    let data = {data: note, error: ''};
    
    if(!note) {
      data.data = null;
      data.error = 'Not found'
    }

    return data;
  }

  @Get()
  getNotes(): StateNotes {
    let data = this.noteService.getNotes();
    let length = data.length;

    return {
      data,
      length
    };
  }

  @Post()
  addNote(@Body() body) {
    return body;
  }

}
