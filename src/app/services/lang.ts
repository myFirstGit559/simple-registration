import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import {isNull} from "util";
@Injectable()
export class LangService {
    constructor(
        private http: Http
    ){}
    _lang: string = null;

    setLang(lang: string){
        this._lang = lang;
    }
    getLangJson():Observable<any>{
            if(!isNull(this._lang)){
                return this.http.get(`/${this._lang}.json`)
                    .map(res => res.json())
                    .catch(error => Observable.throw(error.json().error || 'Server error'));
            }
    }
}