import { NotesModule } from '../modules/notes.module';
import { ActiveNotesModule } from '../modules/activenotes.module';
import { ArchiveNotesModule } from '../modules/archivenotes.module';
import { InfoModule } from '../modules/info.module';
import { PageNotesModule } from '../modules/pagenotes.module';

const routes = [
        // get note by id
        {
            path: 'notes/:id',
            module: NotesModule,
        },
        // only active notes
        {
            path: 'notes/active',
            module: ActiveNotesModule,
        },
        // only archive notes
        {
            path: 'notes/archive',
            module: ArchiveNotesModule,
        },
        // all notes
        {
            path: 'notes',
            module: NotesModule,
        },
        // get info about routes
        {
            path: 'info',
            module: InfoModule,
        },
        // get 5 items per page
        {
            path: 'notes/page/:id',
            module: PageNotesModule,
        },
        // redirect to page/1
        {
            path: 'notes/page',
            module: PageNotesModule,
        },
];

export default routes;