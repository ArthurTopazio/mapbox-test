import { ICoordinates } from './IСoordinates';

export interface ILocation {
  name: string,
  coordinates: ICoordinates,
  description?: string,
}
