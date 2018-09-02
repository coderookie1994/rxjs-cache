import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service'
import { Injectable, Inject } from "@angular/core";
import * as lodash from 'lodash';
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private cache: any[] = [];
    private cacheEmitterSubject = new BehaviorSubject<any[]>(this.cache);

    constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

    public getCacheEmitter() {
        return this.cacheEmitterSubject;
    }

    public saveInCache(key: string, val: string) {
        this.storage.set(key, val);
        this.cache[key] = val;
        this.cacheEmitterSubject.next(this.cache);
    }

    public getCacheValue(key: string) {
        return this.storage.get(key);
    }

    public getCache(): any[] {
        return this.cache;
    }

    public hasRight(key: string) {
        let right = this.storage.get(key);
        if(!lodash.isNil(right))
            return right;
        return null;
    }
}