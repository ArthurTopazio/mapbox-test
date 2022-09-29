import { makeAutoObservable } from 'mobx';

import { IUser } from './../models/IUser';

export interface UserStateTPD {
  isAuth: boolean,
  user: IUser
};

export default class UserStore {
  private _isAuth: boolean
  private _user: IUser

  constructor(isAuth: boolean, user: IUser) {
    this._isAuth = isAuth
    this._user = user
    makeAutoObservable(this)
  }

  setIsAuth(bool: boolean): void {
    this._isAuth = bool
  }
  setUser(user: IUser): void {
    this._user = user
  }

  get isAuth(): boolean {
    return this._isAuth
  }
  get user(): IUser {
    return this._user
  }
};
