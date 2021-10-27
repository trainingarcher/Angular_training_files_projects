
            // Using the data types in TypeScript

let x : number = 10;
console.log('val of x is '+ x);

x=34.56;
console.log('val of x is '+ x);

// x="hello";      // error saying that, string is nor assignable to number
// console.log('val of x is '+ x);

// using the binary numbers: To represent the binary number, it must start 
// with zero, followed by 'b' or 'B'  and all other digits must be 0 or 1

let bin : number = 0b1110;
console.log('Using binary, number is:  '+ bin);


// using the Octal numbers: To represent the Octal number, it must start 
// with zero, followed by 'o'  and all other digits must be 0 - 7

let oct : number = 0O10;
console.log('Using Octal, number is:  '+ oct);


// using the Hex numbers: To represent the Hex number, it must start 
// with zero, followed by 'x'  and all other digits must be 0 - 9 and A - F

let hex : number = 0x1D;
console.log('Using Hex, number is:  '+ hex);


// Using the bigint (larger than 2^53-1) it must ends with 'n'
//  It is there in ES2020 onwards..!!

// let bnum : bigint = 94582378345758451n;
// console.log('Using bnum, number is:  '+ bnum);
