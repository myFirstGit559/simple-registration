import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

export interface Note {
    color: string
    title: string
    value: string
    id?: string | number
    createdAt?: string
    updatedAt?: string
    userId?: string
}

export interface User {
    id: string
}
export interface State {
    notes: Note[],
    user: User
}

const defaultState = {
    notes: [],
    user: {}
}

const _store = new BehaviorSubject(defaultState);

@Injectable()
export class Store {
    private store = _store;
    changes = this.store.asObservable()
        .distinctUntilChanged()

    setState(state: any) {
        this.store.next(state);
    }
    getState():any {
        return this.store.value;
    }
    purge() {
        this.store.next(defaultState);
    }
}