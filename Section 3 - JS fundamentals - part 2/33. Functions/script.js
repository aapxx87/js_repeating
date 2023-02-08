// * ------- Lecture 33: Functions
/*
function logger() {
    console.log('My name is Jonas')
}

// calling / running / invoking function
// logger()
// logger()
// logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const result = fruitProcessor(5, 0)
console.log(result)
*/






// * ------- Lecture 34: Function Declarations vs. Expressions
/*
// function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear
}

console.log(calcAge1(1987))


// function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear
}

const age2 = calcAge2(1991)
console.log(age2)
*/







// * ------- Lecture 35: Arrow Functions
/*
// ? Function expression

// function calcAge1(birthYear) {
//     return 2022 - birthYear
// }


// ? Arow function

const calcAge3 = birthYear => 2022 - birthYear
// console.log(calcAge3(1987));


// ? case when we have one paarmetr

// const yearsUntilRetirement = birthYear => {
//     const age = 2022 - birthYear
//     const retirement = 65 - age
//     return retirement
// }


// ? case if we have multiple parametres

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear
    const retirement = 65 - age
    return `${firstName} has ${retirement} ages until retirement.`
}

console.log(yearsUntilRetirement(1987, 'Jonas'));
console.log(yearsUntilRetirement(1979, 'Bob'));

*/







// * ------- Lecture 36: Functions Calling Other Functions

/*
// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

const cutFruitPieces = fruit => fruit * 4


// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples)
    const orangesPices = cutFruitPieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPices} pieces of oranges.`
    return juice
}

console.log(fruitProcessor(2, 3));
*/







// * ------- Lecture 37: Reviewing Functions
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {

    const age = calcAge(birthYear)
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement
    } else {
        console.log(`${firstName} is alredy retired`);
        return -1
    }

    // return `${firstName} retires in ${retirement} years.`
    return retirement
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/







// * ------- Lecture 38: Coding Challenge #1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const avgDolphins = calcAverage(85, 54, 41)
const avgKoalas = calcAverage(23, 34, 27)

console.log(`Koalas avg score is ${avgKoalas}. Dolphins avg score is ${avgDolphins}.`);

const checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`Nobody wins. Dolphin average score is ${avgDolphins} and Koalas average score is ${avgKoalas}`);
    }

}

checkWinner(avgDolphins, avgKoalas)

// checkWinner(576, 111)
*/







// * ------- Lecture 39: Introduction to Arrays
/*
const friends = ['michael', 'steven', 'peter']
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
// get the last element from array
console.log(friends[friends.length - 1]);

// const years = new Array(1991, 1984, 2008, 2020)
// console.log(years);

friends[2] = 'Jay'
console.log(friends);


const firstname = 'Jonas'
const jonas = [firstname, 'Schm', 2037 - 1991, friends]

console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018]

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])]

console.log(ages);
*/








// * ------- Lecture 40: Basic Array Operations (Methods)
/*
// ADD ELEMENTS

// Push - push adds an element to the end of a array
const friends = ['michael', 'steven', 'peter']
friends.push('jay')
console.log(friends);


// Unshift - add an element in the beginnig of array
friends.unshift('John')
console.log(friends);


// REMOVE ELEMENTS

// Pop - rmemove the last elemnent of an array
friends.pop()
console.log(friends);


// - remove the first element
friends.shift()
console.log(friends);


// define the position of certain element in an array
console.log(friends.indexOf('steven'));


console.log(friends.includes('steven')); // true
console.log(friends.includes('bob')); // false
*/








// * ------- Lecture 41: Coding Challenge #2
/*

const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(tips);
console.log(total);
*/









// * ------- Lecture 42: Introduction to Objects
/*
const jonas = {
    firstName: 'Jonas',
    lastname: 'Schmedtman',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['michael', 'steven', 'peter']
}
*/









// * ------- Lecture 43: Dot vs. Bracket Notation
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['michael', 'steven', 'peter']
}

console.log(jonas);

console.log(jonas.lastName);

// we can put any expression
console.log(jonas['lastName']);

const nameKey = 'Name'
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


// const interestedIn = prompt('choose from firstName, lastName, age, job, friends')

// // console.log(jonas[interestedIn]);

// // check is property exist
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request');
// }

// add new propery to the object
jonas.location = 'portugal'
jonas['twitter'] = '@sdsd'
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`);
*/







// * ------- Lecture 44: Object Methods
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['michael', 'steven', 'peter'],
    hasDriversLicense: false,

    // calcAge: function (birthyear) {
    //     return 2037 - birthyear
    // },

    // calcAge: function () {
    //     return 2037 - this.birthYear
    // },

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },

    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()} old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
        return this.summary
    }

}

// console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

// jonas.calcAge()
// console.log(jonas.age);


jonas.calcAge()

jonas.getSummary()

const sum = jonas.summary

console.log(sum);

console.log(jonas);
*/







// * ------- Lecture 45: Coding Challenge #3

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    },
}

const john = {
    fullName: 'John Smith',
    mass: 78,
    height: 1.2,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    },
}



if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher ${john.fullName}'s (${john.calcBMI()}) `);
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher ${mark.fullName}'s (${mark.calcBMI()}) `);
}

*/







// * ------- Lecture 46: Iteration: The for Loop
/*
const years = [1990, 1991, 1992, 1995]

for (let rep = 0; rep <= years.length - 1; rep++) {
    console.log(years[rep]);
}
*/







// * ------- Lecture 47: Looping Arrays, Breaking and Continuing

/*
const jonas = ['Jonas', 'Schmedtman', 2037 - 1991, 'teacher', ['michael', 'peter', 'steven'], true]

const typesArray = []

// for (let i = 0; i < jonas.length; i++) {
//     // console.log(jonas[i], typeof jonas[i]);

//     // typesArray[i] = typeof jonas[i]
//     typesArray.push(typeof jonas[i])
// }

// console.log(typesArray);

// continue and break
// -- only strings
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue
//     typesArray.push(typeof jonas[i])
// }

// console.log(typesArray);

// -- break with number
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break
    console.log(jonas[i], typeof jonas[i]);
}
*/







// * ------- Lecture 48: Looping Backwards and Loops in Loops
/*
const jonas = ['Jonas', 'Schmedtman', 2037 - 1991, 'teacher', ['michael', 'peter', 'steven']]

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }


for (let i = 1; i <= 5; i++) {

    console.log(' ');
    console.log(`---- Start Exercise ${i}`);


    for (let y = 1; y <= 5; y++) {
        console.log(`Exercise ${i}, repeat ${y}`);
    }

}
*/












// * ------- Lecture 49: The while Loop

/*
// for (let i = 1; i <= 10; i++) {
//     console.log(`Exersice ${i}`);
// }

// While loop

// let rep = 1

// while (rep <= 9) {
//     console.log(`Exersice ${rep}`);
//     rep++
// }


let dice = Math.trunc(Math.random() * 6 + 1)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1)
}

*/






// * ------- Lecture 50: Coding Challenge #4
/*

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill

const calcTips = bills => {

    for (let i = 0; i < bills.length; i++) {

        const tip = calcTip(bills[i])
        tips.push(tip)
        totals.push(tip + bills[i])

        // if (bills[i] >= 50 && bills[i] <= 300) {
        //     tips.push(bills[i] * 0.15)
        //     totals.push(tips[i] + bills[i])
        // } else {
        //     tips.push(bills[i] * 0.2)
        //     totals.push(tips[i] + bills[i])
        // }

    }

}

calcTips(bills)

console.log('Tips:', tips);
console.log('Totals:', totals);

const arr = [2, 3, 6]

const calcAvarege = arr => {

    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }

    return sum / arr.length

}

console.log(calcAvarege(tips));

*/































