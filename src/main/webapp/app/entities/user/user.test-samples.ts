import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12851,
  login: '+@Vrrfx\\~WiFaZd\\2RNI\\xc',
};

export const sampleWithPartialData: IUser = {
  id: 26894,
  login: 'MF',
};

export const sampleWithFullData: IUser = {
  id: 21113,
  login: '-lMhZY',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
