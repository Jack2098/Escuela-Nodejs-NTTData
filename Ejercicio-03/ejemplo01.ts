function saludar ( nombre: string ) {
    console.log('Hola', nombre);
}

interface Heroe {
    nombre: string;
    apellido: string;
}

let iroman: Heroe = {
    nombre: 'Tony',
    apellido: 'Stark'
}

saludar(iroman.nombre)