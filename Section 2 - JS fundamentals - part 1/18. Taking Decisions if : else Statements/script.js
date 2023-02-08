
/*

const age = 15;
// const isOldEnough = age >= 19

if (age >= 18) {
    // console.log('Sarah can start driving license')
} else {
    const yearsLeft = 18 - age
    // console.log(`Sarah CAN'T start driving license.  Wait for ${yearsLeft} years`)
}

*/






/*

const birthYear = 2001

let century

if(birthYear <= 2000) {
    century = 20
} else {
    century = 21
}


// console.log(century)
*/






// const firstname = 'Tolik2'
//
// if (firstname === 'Tolik') {
//     console.log('He is really Tolik')
// } else {
//     console.log("No, he isn't Tolik")
// }



const massMark = 78
const tallMark = 1.69
const BMIMark = massMark / tallMark ** 2


const massJohn = 92
const tallJohn = 1.95
const BMIJohn = massJohn / tallJohn ** 2

const markHigherBMI = BMIMark > BMIJohn


// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}) `)
// } else if (BMIJohn > BMIMark) {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}) `)
// } else {
//     console.log(`John and Mark have the same BMI (${BMIMark})`)
// }


// console.log(BMIMark, BMIJohn, markHigherBMI)






// ------- Lecture 20: Type Conversion and Coercion

//  type conversion

/*

const inputYear ='1991'
console.log(Number(inputYear), inputYear)
console.log(inputYear + 18)
console.log(Number(inputYear) + 18)

console.log(String(23), 23)


type coercion
console.log('I am ' + 23 + ' years old.')
console.log('I am ' + '23' + ' years old.')

console.log('23' - '10' - 3)  // 10
console.log('23' + '10' + 3)  // 23103
console.log('23' * '2') // 46
console.log('23' / '2') // 11.5

let n = '1' + 1 // '11'
n = n - 1 // 10 - number
console.log(n)

console.log(2 + 3 + 4 + '5') // '95'
console.log('10' - '4' - '3' - 2 + '5') // 15

 */









// ------- 21. Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

/*

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(4))
console.log(Boolean(''))

const money = 10
if(money) {
    console.log('You have a Money')
} else {
    console.log('No money')
}


let height = 'f'

if(height) {
    console.log('Exist')
} else {
    console.log('Height is Undefined')
}

*/





// ------- Lecture 22: Equality Operators: == vs. ===

/*

const age = 18

if(age === 18) console.log('Adult (strict)')
if(age == 18) console.log('Adult (loose)')


const favNumber = Number(prompt('Your favourite Number?'))
// console.log(typeof favNumber, favNumber)

// if(favNumber == 23) console.log('It is 23')


if(favNumber !== 23) console.log('Not 23')

*/







// ------- Lecture 24: Logical Operators

/*
const hasDrlic = true
const hasGoodVision = false

const shouldDrive = hasDrlic && hasGoodVision

console.log(shouldDrive)
*/







// ------- Lecture 25: Coding challenge 3

/*

const averDol = (96 + 108 + 10) / 3
const averKoalas = (96 + 108 + 10) / 3

console.log(`Dolphin score is ${averDol}`, `Koalas score is ${averKoalas}`)

// if(averDol > averKoalas) {
//     console.log(`Dolphin win with score ${averDol} vs Koalas score ${averKoalas} `)
// } else if (averKoalas > averDol) {
//     console.log(`Koalas win with score ${averKoalas} vs Dolphin score ${averDol} `)
// } else {
//     console.log('The results are the same')
// }



if(averDol > averKoalas && averDol > 100) {
    console.log(`Dolphin win with score ${averDol} vs Koalas score ${averKoalas} `)
} else if (averKoalas > averDol && averKoalas > 100) {
    console.log(`Koalas win with score ${averKoalas} vs Dolphin score ${averDol} `)
} else if (averKoalas < 100 && averDol < 100 ) {
    console.log(`Both have less then 100 points - both loos. Dolpin ${averDol}, Koalas ${averKoalas}`)
} else if (averDol === averKoalas && averDol > 100 ) {
    console.log(`Draw = Both have more then 100 points - but equal ${averDol}`)
}

*/






// ------- Lecture 26: The switch statement

/*
const day = 'tuesday'

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Monday plan 1')
//         console.log('Monday plan 2')
//         break
//     case 'tuesday':
//         console.log('Tuesday plan 1')
//         console.log('Tuesday plan 2')
//         break
//     default:
//         console.log('Not a valid day')
// }

if (day === 'monday') {
    console.log('Monday plan 1')
    console.log('Monday plan 2')
} else if (day === 'tuesday') {
    console.log('Tuesday plan 1')
    console.log('Tuesday plan 2')
} else {
    console.log('Not a valid day')
}

*/







// ------- Lecture 27: Statements and Expressions

// It is expression because it produces a value
// 3 + 4
// It is also expression because it also produces a value
// 1997
// It is also expression because it also produces a boolean value at the end
// true && false && !false


// Statement is a bigger piece of code  that doesn't produce any value

// Statement example - it doesn't produce a value
// if (23 > 10) {
//     const str = '23 is bigger'
// }







// ------- Lecture 28: The Conditional (Ternary) Operator

/*
const age = 17
// age >= 18 ? console.log('> 18') : console.log('< 18')

const ages = age >= 18 ? '> 18' : '< 18'
console.log(ages)

console.log(`i am ${age > 18 ? 'adult' : 'teen'}`)

*/




// ------- Lecture 29: Coding challenge

const bill = 40

// const tip = bill >= 50 && bill <= 300 ? 15 : 20

console.log(`Bill is ${bill}, tips are ${bill >= 50 && bill <= 300 ? 15 : 20}% or ${bill*((bill >= 50 && bill <= 300 ? 15 : 20)/100)}, the final value is ${bill + bill*((bill >= 50 && bill <= 300 ? 15 : 20)/100)}`)




















































