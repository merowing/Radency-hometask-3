const errorEmptyObject = (): {error: string} => {
    return {error: `Object should not be an empty`};
}

const errorNoteNotFound = (): {data: null, error: string} => {
    return { data: null, error: 'Note found' }
}

const errorIdNotFound = (id: number) => {
    return { error: `Note with id ${id} not found` }
}

const errorPositiveId = () => {
    return { error:`id should be a positive number` }
};

export { errorEmptyObject, errorNoteNotFound, errorIdNotFound, errorPositiveId };
