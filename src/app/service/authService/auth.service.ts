import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    userInfo;

    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private http: Http, private router: Router) {

    }

    login(username: string, password: string): Observable<Boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/oologin', {
            username, password
        }, options).map((res: Response) => {
            let data = res.json();
            if (!data.user) {
                return false;
            }
            this.userInfo = data.user;
            this.isLoggedIn = true;
            return true;
        });
        // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    checkLogged(url: string): Observable<Boolean> {
        return this.http.get('/oologin').map((res: Response) => {
            let data = res.json();
            if (!data.user) {
                // Store the attempted URL for redirecting
                this.redirectUrl = url;
                // Navigate to the login page
                this.router.navigate(['/login']);
                return false;
            }
            this.userInfo = data.user;
            this.isLoggedIn = true;
            return true;
        });
    }

    logout(): void {
        this.userInfo = null;
        this.isLoggedIn = false;
    }
}