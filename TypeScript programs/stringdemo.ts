
    // Using string type

    let str = "Hello TS";
    console.log(" The string is: "+str);

    // here you are allowed to create the multiline string

    let desc = `hello welcome to TypeScript
    It is superset of JavaScript
    Angular built on the top of javascript`;
    console.log(" The Multi-line string is: "+desc);

    // String interpolation: embed the variable into the string

    let pname : string = `Amol`;
    let pjd : string = `Full Stack Trainer`;
    let yoe : number = 12;

    let info=`I am ${pname}. I am working as a ${pjd} from last ${yoe} years`;
    console.log(" The interpolated string is: "+info);


