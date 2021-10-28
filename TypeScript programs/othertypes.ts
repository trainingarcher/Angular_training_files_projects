/*
    // other types

    - TypeScript intersection types: 
        
        An intersection type creates a new type by combining multiple existing types. 
        The new type has all features of the existing types.
        To combine types, you use the & operator as follows:

        type typeAB = typeA & typeB;

        interface Identity {
            id: number;
            name: string;
        }

        interface Contact {
            email: string;
            phone: string;
        }

        type Employee = Identity & Contact;

        let e: Employee = {
        id: 100,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '(408)-897-5684'
    };

    //  Using Type Guards:  Type Guards allow you to narrow down the type of a 
        variable within a conditional block.

        Use the typeof and instanceof operators to implement type guards 
        in the conditional blocks


        type alphanumeric = string | number;

        function add(a: alphanumeric, b: alphanumeric) {
            if (typeof a === 'number' && typeof b === 'number') {
                return a + b;
            }

            if (typeof a === 'string' && typeof b === 'string') {
                return a.concat(b);
            }

            throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
        }


        //  Type Casting: 

        JavaScript doesn’t have a concept of type casting because variables have dynamic
        types. However, every variable in TypeScript has a type. Type castings allow 
        you to convert a variable from one type to another.

        In TypeScript, you can use the as keyword or <> operator for type castings.

        let input = document.querySelector('input[type="text"]') as HTMLInputElement;

        let input = <HTMLInputElement>document.querySelector('input[type="text"]');
        console.log(input.value);


        // Type Assertions in TypeScript
        
            Type assertions instruct the TypeScript compiler to treat a value as a 
            specified type. It uses the as keyword to do so.

            let netPrice = getNetPrice(100, 0.05, true) as string;
            console.log(netPrice);
*/