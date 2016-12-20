import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class IndexService {

    constructor(private http: Http) { }

    search() {
        let url = `/admin/getmysell?pageNumber=3`;
        return this.http.get(url).map((res: Response) => res.json());
    }
}