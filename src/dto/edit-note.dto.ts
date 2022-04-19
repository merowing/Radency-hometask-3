import { IsNotEmpty, IsString, IsOptional, IsNumber, Max, Min } from "class-validator";

export class EditNoteDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsOptional()
    @IsNumber()
    @Max(2)
    @Min(0)
    readonly category: number;

    @IsOptional()
    @IsString()
    readonly description: string;
    
    @IsOptional()
    @IsNumber()
    @Max(1)
    @Min(0)
    readonly archived: number;
}
