/* 
    Random Class:

    A javascript class that has functions
    for generating pseudorandom numbers.
    Eg.:

    const random = new Random();

    List of class methods below:

    Copyright 2022. Eduardo Programador
    www.eduardoprogramador.com
    consultoria@eduardoprogramador.com

    All Rights Reserved

*/

class Random {
    
    /*
        Returns a random integer from a given range.
        Parameters:
            low: the smallest integer (inclusive)
            high: the highest integer (inclusive)
            
        Eg.: const random = new Random();
             var some = random.get(1,50);            
             (returns a integer between 1 and 50)
             (output) 27
    */
    get(low, high) {
        const rand = Math.random();
        return Math.floor(high * rand) + 1;
    }

    /*
        Returns a list of random numbers from a given 
        range and size.
        Parameters:
            size: The total of numbers to be generated
            low: the smallest integer
            high: the highest integer

        Eg.: const random = new Random();
            let list = random.getList(5,1,10);
            (returns five numbers from 1 to 10)
                (output) 1,2,4,6,9, etc...

    */
    getList(size, low, high) {

        var list = [];

        for(let i = 0; i < size; i++) {
            const rand = Math.random();

            list.push(Math.floor(high * rand) + 1);
        }

        return list.sort((a,b) => a-b);
    }

    /*
        Returns a string of randon characters 
        including letters of alphabet and numbers from 0 to 9.

        Parameters:
            size: The total number of characters to be generated.

        Eg.: const random = new Random();
                random.withNoSpecial(20);
                (returns a list of characters).
                    (output) 49jzb82cg437gmb5kqhb ..etc...
    */
    withNoSpecial(size) {

        var res = ""

        var isUpper = false;
        const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];        
        const numbers = [0,1,2,3,4,5,6,7,8,9];

        for(let i = 0; i < size; i++) {
            const letter = this.get(1,2);

            switch (letter) {
                case 1:   
                    isUpper = false;                 
                    break;

                case 2:
                    isUpper = true;
                    break;
            
                default:
                    isUpper = false;
                    break;
            }


            const type = this.get(1,2);

            switch (type) {
                case 1:
                    const element = this.get(0,alpha.length - 1);
                    const char = alpha[element];
                    res += char;
                    break;

                case 2:
                    const el = this.get(0,numbers.length - 1);
                    const num = numbers[el];
                    res += num;
                    break;
            
                default:
                    const ele = this.get(0,alpha.length - 1);
                    const charr = alpha[ele];
                    res += charr;
                    break;
            }
        }

        return res;
        
    }

    /*
        Returns a string of randon characters 
        including letters of alphabet and numbers from 0 to 9,
        with addition of special characters.

        Parameters:
            size: The total number of characters to be generated.

        Eg.: const random = new Random();
                random.withSpecial(10);
                (returns a list of characters).
                    (output) ki92v$#h1c ..etc...
    */
    withSpecial(size) {

        var res = ""

        var isUpper = false;
        const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
        const special = ['!','@','#','$','%','&','*','+'];
        const numbers = [0,1,2,3,4,5,6,7,8,9];

        for(let i = 0; i < size; i++) {
            const letter = this.get(1,2);

            switch (letter) {
                case 1:   
                    isUpper = false;                 
                    break;

                case 2:
                    isUpper = true;
                    break;
            
                default:
                    isUpper = false;
                    break;
            }


            const type = this.get(1,3);            

            switch (type) {
                case 1:
                    const element = this.get(0,alpha.length - 1);
                    const char = alpha[element];
                    res += char;
                    break;

                case 2:
                    const el = this.get(0,numbers.length - 1);
                    const num = numbers[el];
                    res += num;
                    break;

                case 3:
                    const spec = this.get(0,special.length - 1);
                    const sp = special[spec];
                    res += sp;
                    break;
            
                default:
                    const ele = this.get(0,alpha.length - 1);
                    const charr = alpha[ele];
                    res += charr;
                    break;
            }
        }

        return res;
        
    }
}