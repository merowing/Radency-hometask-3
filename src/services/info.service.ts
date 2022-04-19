import { Injectable } from "@nestjs/common";

@Injectable()
export class InfoService {
    getInfo(): string {
        const routes = [
            ['/', 'home'],
            ['/info', 'information. this page'],
            [''],
            ['[GET]:'],
            ['/notes', 'list of notes'],
            ['/notes/:id', 'get a note'],
            ['/notes/active', 'get all active notes'],
            ['/notes/archived', 'get all archived notes'],
            ['/notes/page/:id', 'get 5 notes per page'],
            ['/stats', 'statistics'],
            [''],
            ['[POST]:'],
            ['/notes', 'add note: { name, category, description }'],
            ['/notes/active', 'archive/unarchive all notes'],
            [''],
            ['[PATCH]:'],
            ['/notes/:id', 'edit note by id: { name, category, description, archived }'],
            [' - You can change all values at the same time or separately'],
            [''],
            ['[DELETE]:'],
            ['/notes/:id', 'remove note by id']];

        return '<pre>' + routes.map(item => item.join(' - ')).join('<br>') + '</pre>';
    }
}
