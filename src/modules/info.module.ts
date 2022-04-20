import { Module } from "@nestjs/common";
import { infoController } from '../controllers/info.controller';
import { InfoService } from '../services/info.service';

@Module({
    controllers: [infoController],
    providers: [InfoService],
})

export class InfoModule {};
