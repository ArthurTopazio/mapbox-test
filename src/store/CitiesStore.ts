import { makeAutoObservable } from 'mobx';
import locationService from '../services/locationService';


export default class CitiesStore {
  private _citiesNames: string[]
  private _citiesLocations: any[]
  public loading: boolean
  constructor() {
    this._citiesNames = ['angola', 'salvador']
    this._citiesLocations = []
    this.loading = false
    makeAutoObservable(this)
  }

  setCitiesNames(arr: any) {
    this._citiesNames = arr.map((item: any) => item.name)
  }

  fetchCities(req: string) {
    this.loading = true;
    locationService.getCities(req)
      .then(resp => {
        this.setCitiesNames(resp.data.results);
        this.loading = false;
      });
  }

  get citiesNames(): string[] {
    return this._citiesNames
  }
  get citiesLocations(): any[] {
    return this._citiesLocations
  }
};