import { ICoordinates } from './../models/IСoordinates';
import { IUser } from "../models/IUser";

export const userTest: IUser = {
  id: 1,
  name: 'Django Freeman',
  token: 'pk.eyJ1IjoicGVyZXJlIiwiYSI6ImNsOG1yMzcwbTA5ZXgzb2xoaHlxaXJhaGwifQ.RBSqzD-2nJnORUtG2r3m0g',
};

export const coordinatesTest: ICoordinates = {
  latitude: 50,
  longitude: 36,
};

export const locationServiceUrl = 'https://geocoding-api.open-meteo.com/v1/search';