/*

    // In ES5

        function Person(ssn, firstName, lastName) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person.prototype.getFullName = function () {
            return `${this.firstName} ${this.lastName}`;
        }

        let person = new Person('171-28-0926','John','Doe');
        console.log(person.getFullName());


    // ES6 allowed you to define a class which is simply syntactic 
    sugar for creating constructor function and prototypal inheritance



class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn:string, firstName:string, lastName:string) { // can use type annotations        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('171-28-0926','Dishant','Sharma');
console.log(person.getFullName());


    // Using the access modifiers

    Access modifiers change the visibility of the properties and methods of a class.
    TypeScript provides three access modifiers:

        private: The private modifier limits the visibility to the same-class only
        protected: The protected modifier allows properties and methods of a class to be accessible within same class and within subclasses.
        public: The public modifier allows class properties and methods to be accessible from all locations.

    so class templet can be decl as

    class Person{
        protected ssn : string;
        private name : string;
        private int : number;
        ....
    }

    To make the code shorter, TypeScript allows you to both declare properties 
    and initialize them in the constructor like this:

class Person {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
    

    // Using readonly property

    TypeScript provides the readonly modifier that allows you to mark the 
    properties of a class immutable. The assignment to a readonly property can 
    only occur in one of two places:

        - In the property declaration.
        - In the constructor of the same class.

        class Person {
            readonly birthDate: Date;

            constructor(birthDate: Date) {
                this.birthDate = birthDate;
            }
        }

        // Using Getters and Setters

        class Person {
            private _age: number;
            private _firstName: string;
            private _lastName: string;

            public get age() {
                return this._age;
            }

            public set age(theAge: number) {
                if (theAge <= 0 || theAge >= 200) {
                    throw new Error('The age is invalid');
                }
                this._age = theAge;
            }

            public get firstName() {
                return this._firstName;
            }

            public set firstName(theFirstName: string) {
                if (!theFirstName) {
                    throw new Error('Invalid first name.');
                }
                this._firstName = theFirstName;
            }

            public get lastName() {
                return this._lastName;
            }

            public set lastName(theLastName: string) {
                if (!theLastName) {
                    throw new Error('Invalid last name.');
                }
                this._lastName = theLastName;
            }

            public getFullName(): string {
                return `${this.firstName} ${this.lastName}`;
            }
        }
        let person = new Person();
        person.firstName = 'Dishant';
        person.lastName= 'Sharma';
        
        console.log(person.getFullName());

        person.firstName = 'Kapil';
        console.log(person.getFullName());

        person.firstName = 'Anushka';
        console.log(person.getFullName());


        // TypeScript inheritance: 

        The class which inherits properties and methods is called the child class. 
        And the class whose properties and methods are inherited is known as the parent 
        class. These names come from the nature that children inherit genes from parents.

        Inheritance allows you to reuse the functionality of an existing class 
        without rewriting it.

        Static properties
            Unlike an instance property, a static property is shared among all 
            instances of a class.
*/

class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Person {
    static headcount: number = 0;
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle=jobTitle;
        Employee.headcount++;
    }
    describe(): string {
               return `Hi ${ super.describe()} I am working as a ${this.jobTitle}.`;
    }
}

let employee1 = new Employee('Yogesh','Patel','Front-end Developer');
console.log(employee1.getFullName());
console.log(employee1.describe());
console.log(Employee.headcount);

let employee2 = new Employee('Dishant','Sharma','Front-end Developer');
console.log(employee2.describe());
console.log(Employee.headcount);

let employee3 = new Employee('Prudhvi','Krishna','Front-end Developer');
console.log(employee3.describe());
console.log(Employee.headcount);