/*
// control statements in TypeScript

        Using if 

        const max = 100;
        let counter = 0;

        if (counter < max) {
            counter++;
        }

        console.log(counter);
 

        // Using if else

        const max = 100;
        let counter = 100;

        if (counter < max) {
            counter++;
        } else {
            counter = 1;
        }

        console.log(counter);

        // using ?:

        const max = 100;
        let counter = 100;
        (counter < max) ? counter++ : counter = 1;
        console.log(counter);


        // ladder of if else

        let discount: number;
        let itemCount = 11;

        if (itemCount > 0 && itemCount <= 5) {
            discount = 5;  // 5% discount
        } else if (itemCount > 5 && itemCount <= 10) {
            discount = 10; // 10% discount 
        } else {
            discount = 15; // 15%
        }

        console.log(`You got ${discount}% discount. `)

        //------------------------------------------------------------------------

            // Using switch case

                let targetId = 'btnDelete';
                switch (targetId) {
                    case 'btnUpdate':
                        console.log('Update');
                        break;
                    case 'btnDelete':
                        console.log('Delete');
                        break;
                    case 'btnNew':
                        console.log('New');
                        break;
                }

                // another example

                let month = 2,
                year = 2020;

            let day = 0;
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    day = 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    day = 30;
                    break;
                case 2:
                    // leap year
                    if (((year % 4 == 0) &&
                        !(year % 100 == 0))
                        || (year % 400 == 0))
                        day = 29;
                    else
                        day = 28;
                    break;
                default:
                    throw Error('Invalid month');
            }
            console.log(`The month ${month} in ${year} has ${day} days`);


            // using the for loop

                syntax:

                for(initialization; condition; expression) {
                    // statement
                }

                e.g.

                for (let i = 0; i < 10; i++) {
                    console.log(i);
                }

            // using while loop

            let counter = 0;
            while (counter < 5) {
                console.log(counter);
                counter++;
            }

            // Using do while

            let i = 0;
            do {
                console.log(i);
                i++
            } while (i < 10);

            // Using break
            
            for (var i = 0; i < products.length; i++) {
                if (products[i].price == 900)
                    break;
            }

            // Using continue

            for (let index = 0; index < 9; index++) {
                
                // if index is odd, skip it
                if (index % 2)
                    continue;

                // the following code will be skipped for odd numbers
                console.log(index);
            }
*/