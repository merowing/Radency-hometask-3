import unique from "src/helpers/uniqueId";

const database = [
    {
        id: unique(),
        name: 'Note 1',
        created: 0,
        category: 0,
        description: '',
        archived: 0,
    },
    {
        id: unique(),
        name: 'Note 2',
        created: 0,
        category: 1,
        description: '',
        archived: 0,
    },
    {
        id: unique(),
        name: 'Note 3',
        created: 0,
        category: 1,
        description: '',
        archived: 1,
    },
    {
        id: unique(),
        name: 'Note 4',
        created: 0,
        category: 2,
        description: '',
        archived: 0,
    },
    {
        id: unique(),
        name: 'Note 5',
        created: 0,
        category: 2,
        description: '',
        archived: 0,
    },
    {
        id: unique(),
        name: 'Note 6',
        created: 0,
        category: 0,
        description: '',
        archived: 1,
    },
    {
        id: unique(),
        name: 'Note 7',
        created: 0,
        category: 1,
        description: '',
        archived: 1,
    },
]

export default database;
