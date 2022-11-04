
(() => {

    const fruits = [
        'apple',
        'melon',
        'mango',
        (fruit: string) => {
            const zumo = `Zumo de ${fruit}`;
            console.log(zumo);
            return zumo;
        }
    ];

    // const a = typeof(fruits[3]) !== 'string' ? fruits[3] : () => ('');
    if(typeof(fruits[3]) !== 'string') {
        console.log('Colección array:', fruits[3]('fresa'));
    }
    

    const numbersCollection = new Set();
    numbersCollection.add(4);
    numbersCollection.add(5);
    numbersCollection.add(6);

    console.log('Coleccion set: ', numbersCollection);

    const students = new Map();
    students.set('one', 'Josue');
    students.set('two', 'Alex');
    students.set('three', 'Lucy');

    console.log('Coleccion map: ', students.get('one'));

    console.log('--------------*** PROMESAS *** -----------');
    console.log('INICIO DE PROMESAS');

    const promesaInicial = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error en carga de valores');
        }, 1000);
        setTimeout(() => {
            resolve('se obtuvieron los valores esperados');
        }, 2000);
    })

    promesaInicial
        .then(res => {console.log(res);})
        .catch(err => console.warn('[Exception]', err));
        console.log('FIN PROMESAS');

})()