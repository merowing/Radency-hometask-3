import { IsNotEmpty, IsNumber, IsString, IsDefined, Max, Min } from 'class-validator';

export class AddNoteDto {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    readonly name: string;
    
    @IsNotEmpty()
    @IsNumber()
    @Max(2)
    @Min(0)
    readonly category: number;
    
    @IsString()
    @IsDefined()
    readonly description: string;
}
