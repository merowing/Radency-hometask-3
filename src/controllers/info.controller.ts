import { Controller, Get } from "@nestjs/common";
import { InfoService } from "src/services/info.service";

@Controller()
export class infoController {
    constructor(private readonly infoService: InfoService) {}

    @Get()
    getInfo(): string {
        return this.infoService.getInfo();
    }
}
