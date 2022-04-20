import { Injectable } from "@nestjs/common";
import { NoteType, StatsType } from "../helpers/note.interface";
import DB from '../helpers/notesDatabase';

@Injectable()
export class StatsService {
  getStats(): Array<StatsType> {
    
    const stats = DB.getAllNotes().reduce((prev: Array<StatsType>, current: NoteType) => {
      const idStatsArr = prev.findIndex(item => item.category === current.category);
      
      if(idStatsArr !== -1) {
        prev[idStatsArr].active += +!current.archived;
        prev[idStatsArr].archived += +current.archived;
      }else {
        prev.push({
          category: current.category,
          active: +!current.archived,
          archived: +current.archived,
        });
      }

      return prev;
    }, []);

    return stats;
  }
}
