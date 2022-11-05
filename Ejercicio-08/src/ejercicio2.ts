// *** Ejercicio 2 ***

(async() => {
  const precalentarHorno = async (): Promise<string> => {
    console.log('Calentando horno.')
    if (await alistarPizza()) {
      console.log('Tomando refresco...');
    }
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Bep Bep Beeep! Horno Calentado!');
      }, 5000);
    });
  }
  
  const alistarPizza = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Pizza lista en el sarten para poner al horno.');
        resolve(true);
      }, 3000);
    })
  }
  
  const meterPizzaAlHorno = async () => {
    console.log('Pizza en el horno.')
    console.log('Viendo la tv..');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Bep Bep Beeep! Pizza lista!')
      }, 10000);
    });
  }
  
  const prepararPizza = async() => {
    console.log(await precalentarHorno());
    console.log(await meterPizzaAlHorno());
  }

  await prepararPizza()
})()