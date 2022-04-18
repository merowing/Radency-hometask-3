import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';

import { StatsModule } from './modules/stats.module';
import { NotesModule } from './modules/notes.module';
import { InfoModule } from './modules/info.module';
import { ActiveNotesModule } from './modules/activenotes.module';
import { ArchiveNotesModule } from './modules/archivenotes.module';
import { PageNotesModule } from './modules/pagenotes.module';
import routes from './routes/routes';

@Module({
  imports: [
    StatsModule,
    ActiveNotesModule,
    ArchiveNotesModule,
    PageNotesModule,
    NotesModule,
    InfoModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
