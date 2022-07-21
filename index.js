// Add answers here 

// #### 1. Los or New?




function nameOfCity(name){


    if (name.includes('Los')) {
        console.log('Q1.', name);
    }
    if (name.toUpperCase, name.includes('New')) {
        console.log('Q1.', name);
    }
    else {
        console.log('Q1.', "_The city name does not begin with Los or New_");
    }
}

nameOfCity('New York')
nameOfCity('newark')
nameOfCity('London')

// function nameOfCity(string) {
//     const beginsWith = string.substring(0, 3).toLowerCase();
//     if (beginsWith == "new" || beginsWith == "los") {
//       return string;
//     } else {
//       return "The city name does not begin with Los or New";
//     }
//   }
//   nameOfCity("New York");
//   nameOfCity("newark");
//   nameOfCity("London");

console.log("-------------------------------------");

// #### 2. isDivisible?

function isDivisible(int) {

    if (int % 100 === 0) {
    console.log('Q2.', true);
}

else {
    console.log('Q2.', false);
}

}


isDivisible(1)
isDivisible(1000)
isDivisible(100)

console.log("-------------------------------------");

// #### 4. What's the weather?

// function isRaining(weather) {
//     let result = 'rain'

//     console.log('Q3.', weather === result ? 'wet day - you need an umbrella' : 'dry day - leave your umbrella at home');

// }

// isRaining('sun')

function isRaining(weather) {
    return weather ? 'wet day - you need an umbrella' : 
    'dry day - leave your umbrella at home'
}
console.log('Q4.',isRaining(true));

console.log("-------------------------------------");

// ### Loops 

// #### 1. Sequence

// function geometricalSequence()

console.log("-------------------------------------");

// #### 2. Multiples

const multiplesOfThree = () => {
    let result = '';
    let multiples = 0;
    for (i = 0; i < 5; i++) {
        multiples += 3;
        result += multiples + ' ';
    }
    return result;
}
console.log('Q5.', multiplesOfThree());

console.log("-------------------------------------");

// ### Math 

// #### 1. You've got the power

function powerOf(int) {

    let result = Math.pow(int, int);
    console.log('Q6.', result);


}

powerOf(3)
powerOf(4)

console.log("-------------------------------------");

function vowelCount(string) {

    const vowels = 'aeiou'

    let counter = 0;

    for (let i = 0; i < string.length; i++) {

        if (string.includes(vowels)) {
          

        }

        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'o'|| string[i] === 'u' || string[i] === 'i') {
            counter++
        }

        if (vowels.includes(string[i])) {
            // counter++
        }
    }

    return counter
}

console.log('Q7.', vowelCount('hello'));




// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

