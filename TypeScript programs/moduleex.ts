/*
    // TypeScript Modules:

    Since ES6, JavaScript started supporting modules as the native part of the 
    language. TypeScript shares the same module concept with JavaScript.

    A TypeScript module can contain both declarations and code. A module executes 
    within its own scope, not in the global scope. It means that when you declare 
    variables, functions, classes, interfaces, etc., in a module, they are not 
    visible outside the module unless you explicitly export them using export 
    statement.

    if you want to access variables, functions, classes, etc., 
    from a module, you need to import them using the import statement.
0/

    // Validator.ts
    export interface Validator {
        isValid(s: string): boolean
    }

    //Another way to export a declaration from a module is to use the 
    //export statement. For example:

    interface Validator {
        isValid(s: string): boolean
    }
    export { Validator }; 
    // or export { Validator as StringValidator }; // StringValidator - new name

    // EmailValidator.ts
    import { Validator } from './Validator';

    class EmailValidator implements Validator {
        isValid(s: string): boolean {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(s);
        }
    }
    export { EmailValidator };

    // app.ts
    import { EmailValidator } from './EmailValidator';

    let email = 'abc@gmail.com';
    let validator = new EmailValidator();
    let result = validator.isValid(email);

    console.log(result);

*/