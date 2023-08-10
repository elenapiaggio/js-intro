const array = new Array(100);

const numbers = [1, 2, 4, 8];
numbers.push(16);
console.log(numbers);

const numbers2 = [ ...numbers];
numbers2.push(32)
console.log(numbers2);

const numbers3 = numbers.map( function( number ){
    return number * 2
})

numbers3.push(999)
console.log(numbers3);