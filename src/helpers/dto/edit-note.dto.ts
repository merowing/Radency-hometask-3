import { IsNotEmpty, IsString, IsOptional, IsNumber, Max, Min } from "class-validator";

export class EditNoteDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsNumber()
    @Max(2)
    @Min(0)
    category: number;

    @IsOptional()
    @IsString()
    description: string;
    
    @IsOptional()
    @IsNumber()
    @Max(1)
    @Min(0)
    archived: number;
}
