import { resolve } from "path";

(() => {
    // function hacerTorta(enforma: boolean) {
    //     const promesa = new Promise((resolve, reject) => {
    //         if (enforma) {
    //             reject('No habrá torta.');
    //         } else {
    //             resolve('Si habrá torta.');
    //         }
    //     })
    //     return promesa;
    // }

    // hacerTorta(false)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    //     .finally(() => console.log('De cualquier manera, todavía vamos a tener una fiesta.'));

    interface resultadoAleatorio {
        puntos: number;
        aleatorio: number;
    }

    const ingresaNumero = (ingreso?: number) => {
        return new Promise<resultadoAleatorio>((resolve, reject) => {
            const numNuevo = Number(ingreso);
            const numAleatorio = Math.floor(Math.random() * 5 + 1);

            if (isNaN(numNuevo)) {
                reject(new Error('Tipo de entrada incorrecta'));
            }

            let respuesta: resultadoAleatorio

            if (numNuevo === numAleatorio) {
                respuesta = {
                    puntos: 5,
                    aleatorio: numAleatorio
                };
            } else if (numNuevo === numAleatorio -1 || numNuevo === numAleatorio + 1) {
                respuesta = {
                    puntos: 2,
                    aleatorio: numAleatorio
                }
            } else {
                respuesta = {
                    puntos: 0,
                    aleatorio: numAleatorio
                }
            }
            resolve(respuesta);
        });
    };

    const continuearAdivanza = (terminar = true) => {
        return new Promise<boolean>((resolve) => {
            if (terminar) {
                resolve(false);
            }
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    };

    const interfaceUsuario = async (status?: boolean) => {
        try {
            const resultado = await ingresaNumero(3);
            const {puntos, aleatorio} = resultado;

            console.log(`El resultado del numero aleatorio es: ${aleatorio} y obtuviste ${puntos}pts`);
            
            const continuar = await continuearAdivanza(status);

            if (continuar) {
                interfaceUsuario(continuar);
            } else {
                console.log('Fin del juego');
            }
        } catch (error) {
            console.error(error);
        }
    }

    interfaceUsuario(false);
})()