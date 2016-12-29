import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class IndexService {

    constructor(private http: Http) { }

    search(currentPage: number = 1) {
        let url = `/admin/zhaohuo/list?pageNumber=${currentPage}`;
        return this.http.get(url).map((res: Response) => res.json());
    }

    getImgBuyer(id: number) {
        let url = `/admin/zhaohuo/detial/${id}`;
        return this.http.get(url).map((res: Response) => res.json());
    }

    updateImgBuyer(id: number) {
        let url = `/admin/zhaohuo/flag/${id}?flag=1`;
        return this.http.get(url).map((res: Response) => res.json());
    }

    getImgBuyerData(id: number) {
        let url = `/admin/zhaohuo/data/${id}`;
        return this.http.get(url).map((res: Response) => res.json());
    }

    pushMsg(id: number, phone: string) {
        let url = `/admin/zhaohuo/sendmsg?phone=${phone}&id=${id}`;
        return this.http.get(url).map((res: Response) => res.json());
    }
    updateBuyer(obj: any) {
        let url = `/admin/zhaohuo/upload`;
        return this.http.put(url, obj).map((res: Response) => res.json());
    }
    submitBuyer(obj: any) {
        let url = `/admin/zhaohuo/upload`;
        return this.http.post(url, obj).map((res: Response) => res.json());
    }
}