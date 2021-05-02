import {Injectable} from '@angular/core';

import { AuthStore } from './auth.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { Auth } from './auth.model';
import { User } from '../../models/user.model';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService extends NgEntityService<Auth> {

  constructor(private loginStore: AuthStore) {
    super(loginStore);
  }

  login(user: User, isRememberMe: boolean): boolean {
    this.getHttp().
    post<User>(  `${environment.baseUrl}/authenticate`, {}, {
      observe: 'response',
      params: {
        username: user.username,
        password: user.password
      }
    })
      .subscribe( (res: any) => {
        console.log(res, res.headers.get('Authorization'));
    });
    return true;
  }


  // refreshToken(): void

}
