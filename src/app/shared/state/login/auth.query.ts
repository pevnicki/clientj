import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthStore } from './auth.store';
import { Auth } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends QueryEntity<Auth> {

  constructor(protected store: AuthStore) {
    super(store);
  }

}
