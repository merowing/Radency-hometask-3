import { Controller, Get } from "@nestjs/common"
import { StatsService } from "../services/stats.service"

@Controller('stats')
export class statsController {
  constructor(private readonly statsService: StatsService) {}
  
  @Get()
  getStats(): Object {
    return {
      data: this.statsService.getStats()
    }
  }
}