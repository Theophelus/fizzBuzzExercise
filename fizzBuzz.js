
// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print.


let fizzBuzzFunc = () => {
    let fBuzz = function () {
        let storeFizzBuzz = [];
        for (let i = 1; i <= 100; i++) {
            storeFizzBuzz.push(i);
        }
        storeFizzBuzz = storeFizzBuzz.map((element) => {
            if (element % 3 === 0 && element % 5 === 0) {
                console.log('FizzBuzz');
            } else
            if (element % 3 === 0) {
                console.log('Fizz')
            } else if (element % 5 === 0) {
                console.log('Buzz')
            } else {
                console.log(element);
            }
        })
    }
    // console.log(fBuzz());
    return {
        fBuzz
    }
}