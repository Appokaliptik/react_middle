import { Country } from 'entities/Country/models/types/Country';
import { Currency } from 'entities/Currency/models/types/Currency';

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
