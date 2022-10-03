import { ILocation } from './../models/ILocation';
import { makeAutoObservable } from 'mobx';
import locationService from '../services/locationService';

export default class CitiesStore {
  private _citiesNames: string[]
  private _citiesLocations: ILocation[]
  public loading: boolean

  constructor() {
    this._citiesLocations = []
    this._citiesNames = []
    this.loading = false
    makeAutoObservable(this)
  }

  setCitiesLocations(arr: any) {
    this._citiesLocations = arr.map((item: any) => ({
      name: item.name,
      coordinates: {
        latitude: item.latitude,
        longitude: item.longitude
      }
    }));
    this.setCitiesNames()
  }

  setCitiesNames() {
    this._citiesNames = this._citiesLocations.map(item => item.name)
  }

  fetchCities(req: string) {
    this.loading = true;
    locationService.getCities(req)
      .then(resp => {
        if (resp.data.results) {
          this.setCitiesLocations(resp.data.results);
        }
        this.loading = false;
      })
  }

  get citiesNames(): string[] {
    return this._citiesNames
  }
  get citiesLocations(): any[] {
    return this._citiesLocations
  }
};