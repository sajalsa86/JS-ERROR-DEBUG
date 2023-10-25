//TypeError: numbers.push is not a function
const numbers = 7;
// numbers.push();

//TypeError: Cannot read properties of undefined (reading 'home')
/* let address;
console.log(address.home); */


//TypeError: Cannot read properties of undefined (reading 'building')
let address = { city: 'atrai', postCode: 6596 };
// console.log(address.home.building); 
// errors solv
console.log(address?.home?.building);


//TypeError: Assignment to constant variable.
const nameOfFirst = 'Sajal';
nameOfFirst = 'Suzan';
console.log(nameOfFirst);