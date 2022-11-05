(() => {
    function retirarDinero(montoRetirar: number) {
        console.log(`Monto a retirar ${montoRetirar}`);
        let fondos = 1000;
        const promesa = new Promise((resolve, reject) => {
            if (montoRetirar > 1000) {
                reject('No hay suficientes montos');
            } else {
                resolve(`Monto disponible a retirar: ${fondos - montoRetirar}`);
            }
        })
        return promesa;
    }

    const promise = retirarDinero(1001);

    promise
        .then(res => {console.log(res)})
        .catch(err => {console.error(err)});
})()