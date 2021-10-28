/*
     Using any type: used when you dont know the type of variable

    let result: any;

    result = 10.123;
    console.log(result);

    result = 'good morning';
    console.log(result);

    // Using void type:
         you use the void type as the return type of functions that do not return a value.

        function log(message): void {
            console.log(messsage);
        }

        // Using never type

        - The never type contains no value.
        - The never type represents the return type of a function that always 
        throws an error or a function that contains an indefinite loop.

        function raiseError(message: string): never {
            throw new Error(message);
        }

        // union type: The union type allows you to combine multiple types into one type.
           
            let result: number | string;
            result = 10; // OK
            result = 'Hi'; // also OK
            result = false; // a boolean value, not OK

        in other case:

            function add(a: number | string, b: number | string) {
                if (typeof a === 'number' && typeof b === 'number') {
                    return a + b;
                }
                if (typeof a === 'string' && typeof b === 'string') {
                    return a.concat(b);
                }
                throw new Error('Parameters must be numbers or strings');
            }

            // Using aliase

                type chars = string;
                let messsage: chars; // same as string type

            // Using String Literal Types:
                
                    The string literal types allow you to define a type that 
                    accepts only  one specified string literal.

                    let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
                    mouseEvent = 'click'; // valid
                    mouseEvent = 'dblclick'; // valid
                    mouseEvent = 'mouseup'; // valid
                    mouseEvent = 'mousedown'; // valid
                    mouseEvent = 'mouseover'; // compiler error

            // Using TypeScript Type Inference
                Type inference describes where and how TypeScript infers types when you don’t 
                explicitly annotate them

                    let counter: number = 0;

                    let counter = 0; 
                    // TypeScript will infer the type the counter to be number


*/


