const assert = require('assert');

const FizzBuzz = require('./fizzBuzz');

describe('Fizz Buzz', () => {
    let fizzBuzz = FizzBuzz();
    assert.equal([1, 2, 'fizz', 4, 'buzz', 'fizz']);
});