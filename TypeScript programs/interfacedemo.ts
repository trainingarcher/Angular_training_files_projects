/*
    // Using the Interface

    // in function

    interface Person {
        fName: string;
        lName: string;
    }
    function getFullName(person: Person) {
        return `${person.fName} ${person.lName}`;
    }
    
    let john = {
        firstName: 'John',
        lastName: 'Doe'
    };    
    console.log(getFullName(john));

    // in class
*/
    interface Demo {
        displayAll(): string
     }
     class Person1 implements Demo {
        constructor(private firstName: string,
            private lastName: string) {
        }
        displayAll():string{
            return " ";
        }
    }
    