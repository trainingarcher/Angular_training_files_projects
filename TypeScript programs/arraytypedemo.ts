/*
    // Using array type in TypeScript

        // array is order list of data elements.

        syntax for the type annotation:

        let <arr_nm> : <type> []=[];

let langstack : string[]=[];
langstack[0]="C Programming";
langstack[1]="C++ Programming";
langstack.push('java');
langstack.push('Spring');
//langstack.push(123); generating the error message

console.log("Type: "+typeof(langstack));
console.log("Length: "+langstack.length);
console.log(langstack);

//----------------------------------------------------------------------
    // It is possible to init the same array


let langstack : string[]=["C Programming", "C++ Programming", 'java', 'Spring'];
console.log(langstack);


//----------------------------------------------------------------------
    // It is possible to collect values having tow or more types
*/

let langstack : (string | number)[];
langstack=["C Programming", 9,"C++ Programming", 6, 'java', 'Spring'];
console.log(langstack);