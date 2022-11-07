import { Currencies } from "./Currencies.interface";

export interface ResponseApi {
    name: {
        common: string;
    };
    currencies: Currencies;
    borders: Array<string>;
    lenguages: {
        [key: string]: string;
    }
}