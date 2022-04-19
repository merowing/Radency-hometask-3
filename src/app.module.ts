import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StatsModule } from './modules/stats.module';
import { NotesModule } from './modules/notes.module';
import { InfoModule } from './modules/info.module';
import { ActiveNotesModule } from './modules/active-notes.module';
import { ArchiveNotesModule } from './modules/archive-notes.module';
import { PageNotesModule } from './modules/page-notes.module';

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
