// * ------- 138. More Closure Examples

/*

// Example 1

let f

const g = function () {
    const a = 23
    f = () => {
        console.log(a * 2);
    }
}


const h = () => {
    const b = 777
    f = () => {
        console.log(b * 2);
    }
}

// g()
// f()

// h()
// f()


// Example 2


const boardPassengers = (n, wait) => {

    const perGroup = n / 3

    setTimeout(function () {
        console.log(`We are boarding all ${n} passengers`);
    }, wait * 1000)

    console.log(`Will start in ${wait} seconds`);

}

boardPassengers(180, 3)

*/





















// * ------- 137. Closures

/*
const secureBooking = function () {

    let passengerCount = 0

    return function (text) {
        passengerCount++
        console.log(`${passengerCount} passengers`);
    }

}

const booker = secureBooking()

booker()
booker()
booker()

console.dir(booker)
*/





// * ------- 136. Immediately Invoked Function Expressions (IIFE)

/*

const runOnce = () => {
    console.log('Once run function');
}

// we create a function expression without assigning to any variable
// we need to wrap a function to parenthesis
// и сразу немедленно ее вызываем
// так как мы обернули в скобки, то это стало function expression и мы сразу его вызвали
// IIFE - немедленно вызваемое function expression

// (function () {
//     console.log('Really once run function');
// })()


// это так же работает и для стрелочных функций
// почему то не работает одновремнно с предыдущей

// (() => console.log('Arrow IIFE'))()

{
    const isPrivate = 23
}

// console.log(isPrivate);

*/








// * ------- 135. Coding Challenge #1

/*

const pool = {
    question: "What is your favourite programming language? ",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

    generateAnswerString() {
        let firstPart = this.question
        for (const item of this.options) {
            firstPart = firstPart + item
        }
        return firstPart
    },

    registerNewAnswer() {
        const answer = Number(prompt(this.generateAnswerString()))
        this.answers[answer - 1]++
        this.displayResults('string')
    },

    answers: [0, 0, 0, 0],

    displayResults(type = 'array') {

        let arrayResultString = 'Poll results are '

        for (const [i, item] of this.answers.entries()) {
            arrayResultString = arrayResultString + item + ', '
        }

        console.log(type === 'array' ? this.answers : `${arrayResultString.slice(0, -2) + '.'}`);
    },

}


const btnAnswer = document.querySelector('.answerPool')
btnAnswer.addEventListener('click', pool.registerNewAnswer.bind(pool))

// const data1 = [5, 2, 3]
// const data2 = [1, 5, 3, 9, 6, 1]

// const displayExternal = pool.displayResults
// displayExternal.call(data1, 'array')

*/


















// * ------- 133. The call and apply Methods + 134. The bind Method

/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // older way to addd methods
    // book: function() {},
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }

}

lufthansa.book(239, 'Jonas')
lufthansa.book(635, 'John Smith')
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book

// Does not work
// book(23, 'Ivan')


// ? CALL METHOD

// у функций есть методы, мы создали выше функцию book из объекта, но this уже не привязан к тому объекту. вызываем метод call у функции book, который привязывает this к нужному нам объекту то есть eurowings. все аргументы после первого являются аргунемнтами для функции, первый указывает на то к чему привзаться - что вызвать
book.call(eurowings, 23, 'Sara Lop')
console.log(eurowings);

book.call(lufthansa, 239, 'Mary cooper')

console.log(lufthansa);


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 111, 'Petr etr')

// console.log(swiss);


// APPLY METHOD
// в отличие от call рпинимате не набор аргументов, а массив
const flightData = [583, 'Gerge Cooper']
book.apply(swiss, flightData)
console.log(swiss);

book.call(swiss, ...flightData)


// ? BIND METHOD

// book.call(eurowings, 23, 'Sara Lop')
// bind возвращает новую функцию где this привязано к определенному объекту
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookSW = book.bind(swiss)

bookEW(111, 'Steve Petrov')
bookLH(111, 'Steve Petrov')
bookSW(111, 'Steve Petrov')

// console.log(eurowings);

// мы можем сразу зафиксировать и определенные параметры, всегда первый парамтр будет 23 и нужно бдует далее ввсети только второй
const bookEW23 = book.bind(lufthansa, 23)

bookEW23('Sipo IOU')
bookEW23('Martha Coop')


// With EventListeners
lufthansa.planes = 300
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++
    console.log(this.planes);
}


const btnBuy = document.querySelector('.buyBTN')
btnBuy.addEventListener('click', lufthansa.buyPlane.bind(lufthansa))


// Partial Application - we can pre-set parameters

const addTax = (rate, value) => value + value * rate

console.log(addTax(10, 200));

// предуставновим что бы значение налогов всегда было к примеру 23%
const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100));


const addVAT2 = value => {
    console.log(value * 0.23);
}

const addTax2 = function (rate) {
    return function (value) {
        return value + value * rate
    }
}

const newF = addTax2(0.23)
console.log(newF(100));

*/



























// * ------- 132. Functions Returning Functions

/*

const greet = greeting => {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

// сохранили результат вызовы функции в переменную, а она возвращает другую функцию, поэтому greetHey стала функцией в которую мы можем передать аргумент
const greetHey = greet('Hey')
greetHey('Jonas')

// можно все сделать в одну строку
greet('Hello')('Jonas')

// Challengr
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello2')('Jonas2')

*/








// * ------- 131. Functions Accepting Callback Functions
/*
const oneWord = str => {
    return str.replace(/ /g, '').toLowerCase()
}


const upperFirstWord = str => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);

}

transformer('JavaScript is the best!', upperFirstWord)

transformer('JavaScript is the best!', oneWord)
*/











// * ------- 129. How Passing Arguments Works: Value vs. Reference
/*
const flight = 'LH234'

const jonas = {
    name: 'Jonas Schmedtman',
    passport: 123456789,
}


const checkin = (flightNum, passenger) => {

    flightNum = 'LH999'

    passenger.name = 'Mr. ' + passenger.name

    if (passenger.passport === 123456789) {
        alert('Check In')
    } else {
        alert('Wrong passport!')
    }


}

// checkin(flight, jonas)

// console.log(flight);
// console.log(jonas);


const newPassport = person => {
    person.passport = Math.trunc(Math.random() * 1000000)
}


newPassport(jonas)

console.log(jonas);

checkin(flight, jonas)
*/










// * ------- 128. Default Parameters
/*
const bookings = []

// в дефолтные значения можно засовывать любые expression
// но еще можем вставлять туда любые значения предыдущих параметров, но нужно соблюдать порядок следования параметров  
const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {

    // ES5
    // по сути мы можем вот так проставить дефолтное значение
    // numPassengers = numPassengers || 1
    // price = price || 199

    // const booking = {
    //     flightNum: flightNum,
    //     numPassengers: numPassengers,
    //     price: price
    // }

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);

    bookings.push(booking)

}

createBooking('LH123')

createBooking('LH123', 100)

// нельзя пропускать параметр и оставлять пустое место
createBooking('LH123', undefined, 1000)

*/