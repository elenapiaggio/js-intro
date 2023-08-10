const person = {
    name: 'Elena',
    lastName: 'Piaggio',
    edad: 38,
    adress:{
        city: 'Barcelona',
        zip: 02111,
        lat: 14.011111,
        long: 34.4445,
    }
}

// Si asigno person a person2 lo que hago es apuntar
// a ese mismo espacio de memoria por lo que si cambio algo en elguno de los
// dos objetos, también lo hago en el otro objeto
// const person2 = person;
// person2.name = 'Margarita';
//console.log(person2);
console.log(person);

// Para solucionarlo: Creo un nuevo objeto y con ... puedo esparcir las propiedades
const person3 = { ... person };
console.log(person3);