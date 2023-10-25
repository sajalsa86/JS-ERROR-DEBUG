function isBigger(num) {
    if (num > 5) {
        return true;
    } else {
        return false;
    }
}
//} SyntaxError: Unexpected token '}'
const result = isBigger(10);
console.log(result);

// const sum = a, b => a + b; SyntaxError: Missing initializer in const declaration
const sum = (a, b) => a + b;
const total = sum(10, 5);
console.log(total);



const sajal = {
    name: 'Sajal Hossain',
    // job: 'Web Developer' SyntaxError: Unexpected identifier
    job: 'Web Developer', //SyntaxError: Unexpected identifier
    education: 'Computer Engineer'
};
console.log(sajal.job);

// const numbers = [10, 20, 30, 40, 50 60, 70]; SyntaxError: Unexpected number
const numbers = [10, 20, 30, 40, 50, 60, 70];
console.log(numbers[4]);

/* for (let i = 0; i < numbers.length i++) {
    const n = numbers[i;
    console.log(n);
}
SyntaxError: Unexpected identifier
 */
for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    console.log(n);
}
//////////////////////////////////////////////////////////

if ((numbers.length > 5) && (numbers[0] === 10)) {
    // right way
}

if (numbers.length > 5 && numbers[0] === 10) {
    // right way
}

/* if numbers.length > 5 && numbers[0] === 10 {
    // wrong way
}  */

/* if (numbers.length > 5) && (numbers[0] === 10) {
    // wrong way
} */