import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9468e018-00dd-4aea-ac45-f05cfb618547',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a4a92ac4-adcd-453c-84e6-6dc8f5a9f488',
};

export const sampleWithFullData: IAuthority = {
  name: 'f6767727-c2e2-4c23-8d00-d12359de0b0c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
