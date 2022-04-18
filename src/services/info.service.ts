import { Injectable } from "@nestjs/common";

@Injectable()
export class InfoService {
    getInfo(): string {
        let routes = [
            ['/', 'home'],
            ['/info', 'information. this page'],
            [''],
            ['[GET]:'],
            ['/notes', 'list of notes'],
            ['/notes/:id', 'get a note'],
            ['/notes/active', 'get all active notes'],
            ['/notes/archive', 'get all archive notes'],
            ['/notes/page/:id', 'get 5 notes per page'],
            ['/stats', 'statistics'],
            [''],
            ['[POST]:'],
            ['/notes', 'json string. add note'],
            ['/archive', 'note id. archive/unarchive note'],
            ['/edit', 'json string. edit note'],
            ['/remove', 'note id. remove note']];

        return '<pre>' + routes.map(item => item.join(' - ')).join('<br>') + '</pre>';
    }
}
