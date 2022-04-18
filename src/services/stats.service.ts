import { Injectable } from "@nestjs/common";
import database from "src/repositories/database";
import { Note, Stats } from "src/note.interface";

@Injectable()
export class StatsService {
  getStats(): Array<Stats> {
    
    let stats = database.reduce((prev: Array<Stats>, current: Note) => {
      let idStatsArr = prev.findIndex(item => item.category === current.category);
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