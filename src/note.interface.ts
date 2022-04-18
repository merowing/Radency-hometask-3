interface Note {
    id: number,
    name: string,
    created: number,
    category: number,
    description: string,
    archived: number,
}
interface Notes {
    data: Note,
    error: string,
}
interface Stats {
    category: number,
    active: number,
    archived: number,
}
interface StateNotes {
    data: Note[],
    length: number,
    page?: number,
}

export { Notes, Note, Stats, StateNotes };
