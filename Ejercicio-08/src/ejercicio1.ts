// *** Ejercicio 1 ***

(async() => {

    const searchByCodeCountry = async (alpha3Code: string) => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${alpha3Code}`
        )
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
  
    const mostrar = async (abrev: string) => {
      const data = await searchByCodeCountry(abrev);
  
      if (abrev.length === 0) {
        console.log('Ingrese datos');
        return ;
      }
  
      if (data.status >= 400) {
        console.log(data.message);
      } else {
  
        const { name, currencies, borders, languages } = data[0];
  
        const currencie = obtenerDatosDeObjetosDinamicos(currencies)[0];

        const listaLenguage = obtenerDatosDeObjetosDinamicos(languages);
  
        const paisesVecinos = []
  
        for (const abrev of borders) {
          const dato = await searchByCodeCountry(abrev);
          const { name } = dato[0];
          paisesVecinos.push(name.common);
        }
  
        console.log(`El nombre del país es: ${name.common}`);
        console.log(`El nombre de la moneda es: ${currencie.name}, y el símbolo es: ${currencie.symbol}, los lenguajes son: ${listaLenguage}`);
        console.log(`Los paises vecinos son: ${paisesVecinos}`)
      }
    }

    const obtenerDatosDeObjetosDinamicos = (data: any) => {
        const keys = Object.keys(data);
        const array: any = [];

        console.log(keys);
        
        keys.forEach(key => {
            array.push(data[key]);
        })
        return array;
    }
  
    await mostrar('pe');
  })();