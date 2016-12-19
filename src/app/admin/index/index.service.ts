import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class IndexService {

    constructor(private http: Http) { }

    search() {
        return this.http.get('/api/data.json').map((res: Response) => res.json());
    }
}