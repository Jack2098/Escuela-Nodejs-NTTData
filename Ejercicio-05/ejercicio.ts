(() => {
    
    // *** Ejercicio 1 ***
    
    let age = 24;
    age = 25;
    
    const name = 'Jack';
    
    // *** Ejercicio 2 ***
    
    interface casa {
        area: number;
        ambientes: number;
        colorParedes: string;
    }
    
    const casa1: casa = {
        area: 30,
        ambientes: 3,
        colorParedes: 'rojo y azul'
    }
    
    console.log(casa1);
    
    // *** Ejercicio 3 ***
    
    function caluloSumaCuadadro(x: number, y: number) {
        const resultado = (x + y)^2;
        return 'El resultado es ' + resultado;
    }
    
    const calculoSumaCuadro = (x: number, y: number) => {
        const resultado = (x + y)^2;
        return `El resultado es ${resultado}`;
    };
    console.log(calculoSumaCuadro(3, 5));
    
    // *** Ejercicio 4 ***
    
    interface Usuario {
        nombre: string;
        apellido?: string;
        edad: number;
        isPeruano?: boolean;
    }
    
    function funParams({nombre, apellido, edad, isPeruano = true}: Usuario) {
        console.log(`El nombre del usuario es ${nombre} ${(apellido === undefined) ? '' : apellido} con la edad de ${edad} y ${(isPeruano) ? 'con' : 'sin' } nacionalidad peruana`)
    }
    
    const user: Usuario = {
        nombre: 'Ana',
        edad: 23,
    }

    funParams(user)
    
    // *** Ejercicio 5 ***

    class Rectangulo {
        base: number;
        altura: number;

        constructor(base: number, altura: number) {
            this.base = base;
            this.altura = altura;
        }

        area(): number {
            return this.base * this.altura
        }
    }

    let rectangulo = new Rectangulo(10, 20)

    console.log(`El área de un rectaungulo de base ${rectangulo.base} y de altura ${rectangulo.altura} es de ${rectangulo.area()}`)
    
    // *** Ejercicio 6 ***

    const persona = {
        nombre: 'Maria',
        edad: 24,
        carrera: 'Comunicación',
    }
    
    const { nombre, edad, carrera } = persona;
    
    console.log(`Hola me llamo ${nombre} tengo ${edad} años y estudio ${carrera}.`);
    
    const [a,b] = [5, 20]

    const sumar = (a: number, b: number) => a + b

    console.log(`La suma de los numeros ${a} y ${b} son ${sumar(a, b)}`);

    console.log(`${nombre} es ${(edad < 18) ? 'menor' : 'mayor'} de edad`);
    
    // *** Ejercicio 7 ***

    (() => {

        interface Datos {
            usuario: string;
            clave: string;
        }
        
        interface Datos {
            fecha: Date;
            estado: boolean;
        }
        
        const datos: Datos = {
            usuario: 'usuario 1',
            clave: '1234',
            fecha: new Date(),
            estado: true,
        }
        
        const { usuario, clave, fecha, estado } = datos;
        
        console.log(`Datos del usuario: ${usuario}, clave: ${clave}, fecha: ${fecha.toUTCString()}, estado: ${estado}`);
        
        type Producto = {
            nombre: string;
            precio: number;
        }
        
        const producto: Producto = {
            nombre: 'Galleta',
            precio: 1.50
        }
        
        const { nombre, precio } = producto
        console.log(`El producto es ${nombre} y su precio es ${precio}`);

        const funFe = (arr: Array<string>) => {
            const [,,...data] = arr;
            console.log(data);
        }
        funFe(['Jhon','Luis','Mateo','Ana'])
    })();
        
})();
    