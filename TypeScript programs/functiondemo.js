/*
//============================================================================

            //Introduction to TypeScript functions
            TypeScript functions are the building blocks of readable, maintainable, and
            reusable code.
            
            Like JavaScript, you use the function keyword to declare a function in TypeScript
            
            syntax:
            
                function name(parameter: type, parameter:type,...): returnType {
                // do something
                }
            
                e.g.
                function add(a: number, b: number): number {
                    return a + b;
                }
            
                add = function (x: number, y: number) {
                    return x + y;
                };
            
            
                // To make a function parameter optional, you use the ? after the parameter name.
            
                function multiply(a: number, b: number, c?: number): number {
            
                    if (typeof c !== 'undefined') {
                        return a * b * c;
                    }
                    return a * b;
                }
            
                // Using the default parameters
            
                function applyDiscount(price, discount = 0.05) {
                    return price * (1 - discount);
                }
            
                console.log(applyDiscount(100,0.12));
                console.log(applyDiscount(100)); // 95
            
                // Using rest parameters
                A rest parameter allows you a function to accept zero or more arguments of
                the specified type. In TypeScript, rest parameters follow these rules:
            
                    - A function has only one rest parameter.
                    - The rest parameter appears last in the parameter list.
                    - The type of the rest parameter is an array type.
            
                function getTotal(...numbers: number[]): number {
                    let total = 0;
                    numbers.forEach((num) => total += num);
                    return total;
                }
                console.log(getTotal()); // 0
                console.log(getTotal(10, 20)); // 30
                console.log(getTotal(10, 20, 30)); // 60
            
            
                // TypeScript function overloadings:
            
                    suppose the functions are:
            
                    function addNumbers(a: number, b: number): number {
                        return a + b;
                    }
            
                    function addStrings(a: string, b: string): string {
                        return a + b;
                    }
            
                    can be written..
            
                    function add(a: number | string, b: number | string): number | string {
                        if (typeof a === 'number' && typeof b === 'number')
                            return a + b;
            
                        if (typeof a === 'string' && typeof b === 'string')
                            return a + b;
                    }
            
                To better describe the relationships between the types used by a function,
                TypeScript supports function overloadings. For example:
            
                function add(a: number, b: number): number;
                function add(a: string, b: string): string;
                function add(a: any, b: any): any {
                return a + b;
                }
            
                // Method overloading
                    When a function is a property of a class, it is called a method.
                    TypeScript also supports method overloading
            
            
            */
var Counter = /** @class */ (function () {
    function Counter() {
        this.current = 0;
    }
    Counter.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Counter;
}());
var counter = new Counter();
console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
