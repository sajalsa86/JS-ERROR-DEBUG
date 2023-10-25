//ReferenceError: z is not defined
const x = 'sajal';
const y = 'akashi';
// console.log(z);

//ReferenceError: Cannot access 'myName' before initialization
//console.log(myName);
const myName = "Sajal Hosain";



//it possible for normal function
console.log(add(7, 3));
function add(num1, num2) {
    return num1 + num2;
};

//but it  not possible for arrow function
//ReferenceError: Cannot access 'sum' before initialization

//console.log(sum(7, 3));
const sum = (num1, num2) => num1 + num2;


//ReferenceError: result is not defined

function doSomething(para) {
    const result = para + 10
};
console.log(result);