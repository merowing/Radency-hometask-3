import { Module } from "@nestjs/common";
import { statsController } from "../controllers/stats.controller";
import { StatsService } from "../services/stats.service";

@Module({
    controllers: [statsController],
    providers: [StatsService],
})

export class StatsModule {}
