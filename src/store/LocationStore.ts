import { makeAutoObservable } from 'mobx';

import { ICoordinates } from './../models/IСoordinates';

export default class LocationStore {
  private _name: string
  private _coordinates: ICoordinates

  constructor(name: string, coordinates: ICoordinates) {
    this._name = name
    this._coordinates = coordinates
    makeAutoObservable(this)
  }

  setLocation(name: string, coordinates: ICoordinates): void {
    this._name = name
    this._coordinates = coordinates
  }

  get locationName(): string {
    return this._name
  }
  get locationCoordinates(): ICoordinates {
    return this._coordinates
  }
};