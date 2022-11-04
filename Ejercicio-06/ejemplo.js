(function () {
    var fruits = [
        'apple',
        'melon',
        'mango',
        function () {
            var zumo = "Zumo de ";
            console.log(zumo);
            return zumo;
        }
    ];
    // const a = fruits[3]('');
    console.log('Colección array:', fruits[3]);
    var numbersCollection = new Set();
    numbersCollection.add(4);
    numbersCollection.add(5);
    numbersCollection.add(6);
    console.log('Coleccion set: ', numbersCollection);
    var students = new Map();
    students.set('one', 'Josue');
    students.set('two', 'Alex');
    students.set('three', 'Lucy');
    console.log('Coleccion map: ', students.get('one'));
    console.log('--------------*** PROMESAS *** -----------');
    console.log('INICIO DE PROMESAS');
    var promesaInicial = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Error en carga de valores');
        }, 1000);
        setTimeout(function () {
            resolve('se obtuvieron los valores esperados');
        }, 2000);
    });
    promesaInicial
        .then(function (res) { console.log(res); })["catch"](function (err) { return console.warn('[Exception]', err); });
    console.log('FIN PROMESAS');
})();
