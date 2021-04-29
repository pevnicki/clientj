import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Auth } from './auth.model';

export interface AuthState extends EntityState<Auth> {
  token: '';
}

export function  getInitState(): AuthState{
  return {
    token: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'login' })
export class AuthStore extends EntityStore<AuthState> {

  constructor() {
    super(getInitState());
  }

}
