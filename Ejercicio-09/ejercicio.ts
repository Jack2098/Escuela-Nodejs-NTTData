import axios from "axios";
import { EventEmitter } from "events";
import { Country, Name } from "./interfaces/Country.interface";

(() => {
  const eventEmitter = new EventEmitter();

  const searchByCodeCountry = async (abrev: string) => {
    try {
      const URL = `https://restcountries.com/v3.1/alpha/${abrev}`;

      const res = await axios.get(URL);

      const data: Country = res.data[0];

    //   const { borders } = data;

      // eventEmitter.emit('getNombrePais', data);

      // for (let i = 0; i < borders.length; i++) {
      //     if (i === 1) {
      //         eventEmitter.emit('errorPaisVecino', 'Ese siglas no es de un país');
      //     }
      // }
      return data;
    } catch (error: any) {
      const { response } = error;

      const { data } = response;

      // eventEmitter.emit('getNombrePais', data.message)
      return data.message;
    }
  };

  eventEmitter.on("errorPaisVecino", (message: string) => {
    console.log(message);
  });

  eventEmitter.on("getNombrePais", async (abrev: string) => {
    const data: Country | string = await searchByCodeCountry(abrev);

    if (typeof data !== "string") {
      console.log(data.name.common);
      const { borders } = data;
  
      for (let i = 0; i < borders.length; i++) {
        if (i === 1) {
          eventEmitter.emit("errorPaisVecino", `Esta siglas ${borders[i]} no es de un país`);
        }
      }

    } else {
      console.log(data);
    }

  });

  // searchByCodeCountry('pe');

  eventEmitter.emit("getNombrePais", "bra");
})();
