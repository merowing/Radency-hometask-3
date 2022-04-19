interface NoteType {
    id: number,
    name: string,
    created: number,
    category: number,
    description: string,
    archived: number,
}
interface EditNoteType {
    name?: string,
    category?: number,
    description?: string,
    archived?: number,
}
interface NotesType {
    data: NoteType | boolean,
    error: string,
}
interface StatsType {
    category: number,
    active: number,
    archived: number,
}
interface StateNotesType {
    data: NoteType[],
    length: number,
    page?: number,
}
interface ErrorStringType {
    error?: string,
}

export { NotesType, NoteType, StatsType, StateNotesType, EditNoteType, ErrorStringType };
