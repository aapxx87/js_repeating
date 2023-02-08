// * ------- 121. Working With Strings - Part 1





















// * ------- 120. Coding Challenge #3














// * ------- 118. Maps: Iteration
/*
const openingHours = {
    'mon': { open: 12, close: 22 },
    'tue': { open: 11, close: 23 },
    'wen': { open: 0, close: 24 },
}

const question = new Map([
    ['question', 'What is the best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, "JS"],
    ['correct', 3],
    [true, 'You are Correct'],
    [false, 'Try Again']
])

// console.log(question);

// console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours))

console.log(question.get('question'));

for (const [key, value] of question) {
    if (typeof key === 'number') console.log(key);
}


const answer = 2
console.log(question.get(answer === question.get('correct')));


// Convert Map to array
console.log([...question]);

console.log(question.entries());
console.log(question.keys());
console.log(question.values());
*/






// * ------- 117. Maps: Fundamentals
/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${time}, at adress: ${address}, main dish: ${this.mainMenu[mainIndex]}, ${starterIndex ? 'second dish: ' + this.starterMenu[starterIndex] : ''}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    orderPizzaES6(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    demoMethod() {
        console.log('I am demo method ES6');
    }
}


const rest = new Map()
rest.set('name', 'Classici Italiano')
rest.set(1, 'Firenze, Italy')
rest.set(2, 'Lisbon, Portugal')

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('starterMenu', ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'])
    .set(true, 'we are open')
    .set(false, 'we are closed')
    .set('open', 11)
    .set('close', 23)

// console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 20

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2)

console.log(rest);

console.log(rest.size);

// rest.clear()
*/





































// * ------- 116. Sets
/*

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Ris', 'Pasta', 'Ris'])

console.log(new Set(['Pasta', 'Pizza', 'Pizza', 'Ris', 'Pasta', 'Ris']).size);

console.log(orderSet);

const uniqueArr = [...new Set(['Pasta', 'Pizza', 'Pizza', 'Ris', 'Pasta', 'Ris'])]

console.log(uniqueArr);

// console.log(new Set('overover'));

// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));

orderSet.add('NewDish')
// console.log(orderSet);

orderSet.delete('Pizza')
// console.log(orderSet);

// orderSet.clear()
// console.log(orderSet);

for (const order of orderSet) {
    // console.log(order);
}
*/






// * ------- 114. Looping Objects: Object Keys, Values, and Entries

/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
    [weekdays[3]]: { open: 12, close: 22 },
    [weekdays[4]]: { open: 11, close: 23 },
    [weekdays[5]]: { open: 0, close: 24 },
}


// property names
const properties = Object.keys(openingHours)
console.log(properties.length);

const all = Object.entries(openingHours)


for (const day of Object.keys(openingHours)) {
    console.log(day);
}

let openStr = `We are open ${properties.length} days: `

for (const day of Object.keys(openingHours)) {
    openStr += `${day},`
}

console.log(openStr);

// property values

const values = Object.values(openingHours)
console.log(values);

// Entire object
const entries = Object.entries(openingHours)

for (const x of entries) {
    console.log(x);
}


// for (const [key, {open, close}] of entries) {
//     console.log(x);
// }

// console.log(entries);
*/




// * ------- 113. Optional Chaining (?.)
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
    [weekdays[3]]: { open: 12, close: 22 },
    [weekdays[4]]: { open: 11, close: 23 },
    [weekdays[5]]: { open: 0, close: 24 },
}

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${time}, at adress: ${address}, main dish: ${this.mainMenu[mainIndex]}, ${starterIndex ? 'second dish: ' + this.starterMenu[starterIndex] : ''}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    orderPizzaES6(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    demoMethod() {
        console.log('I am demo method ES6');
    },
    openingHours,
}

// console.log(restaurant.openingHours.mon.open);

// проверяем существуют ли необходимые методы и только при их true возарщаем результат
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)

// With optional chaining
// только если mon существует то следующее свойство будет прочитано, если нет то сразу вернет undefined и не поедет дальше по цепочке
// console.log(restaurant.openingHours.mon?.open);


// if (restaurant.openingHours.fri) {
//     console.log(restaurant.openingHours.fri.open);
// }


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for (const item of days) {
    // console.log(item);
    // console.log(restaurant.openingHours[item]?.open);

    // console.log(`${restaurant.openingHours[item] ? item + ':' + ' we work from ' + restaurant.openingHours[item].open : item + ':' + ' we dont work :('}`)

    // так как работаем с нуля то нужно не || а ?? иначе 0 воспринимает за false
    const open = restaurant.openingHours[item]?.open ?? 'closed'
    // console.log(`On ${item}, we open at ${open}`);

}

// Methods
// проверяем существует метод или нет и если существует, то вызываем его
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.order33?.(0, 1) ?? 'Method does not exist');


// Arrays - проверяем пустой массив или нет
const users = [{ name: 'Jonas', email: 'dddd', }]

console.log(users[0]?.name ?? 'User array is empty');

*/








// * ------- 111. Looping Arrays: The for-of Loop
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
    [weekdays[3]]: { open: 12, close: 22 },
    [weekdays[4]]: { open: 11, close: 23 },
    [weekdays[5]]: { open: 0, close: 24 },
}

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${ time }, at adress: ${ address }, main dish: ${ this.mainMenu[mainIndex] }, ${ starterIndex? 'second dish: ' + this.starterMenu[starterIndex] : ''}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Pasta with ${ ing1 }, ${ ing2 } and ${ ing3 } `);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    // более короткий способ записи методов в объект
    orderPizzaES6(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    // пример без аргументов
    demoMethod() {
        console.log('I am demo method ES6');
    },
    // одинаковые имена, что не совсем удобно
    // openingHours: openingHours,
    // альтернативный вариант
    openingHours,
}


restaurant.demoMethod()
*/










// * ------- 111. Looping Arrays: The for-of Loop
/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 },
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${ time }, at adress: ${ address }, main dish: ${ this.mainMenu[mainIndex] }, ${ starterIndex ? 'second dish: ' + this.starterMenu[starterIndex] : '' } `);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Pasta with ${ ing1 }, ${ ing2 } and ${ ing3 } `);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }

}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) console.log(item);


for (const item of menu.entries()) {
    console.log(item);
}

for (const [i, el] of menu.entries()) {
    console.log(i, el);
}
*/







// * ------- 110. Coding Challenge #1
/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ], [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],],
    score: '4:1',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

    // 3. Create an array 'allPlayers'containing all players of both teams (22 players)
    allplayers: function () {
        return [...this.players[0], ...this.players[1]]
    },

    // 2.1. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
    getGK: function (team) {
        return team === 'Bayern Munich' ? this.players[0][0] : this.players[1][0]
    },

    // 2.2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
    getFieldsPlayers: function (team) {

        if (team === 'Bayern Munich') {

            const teamPlayers = []
            for (let i = 1; i < this.players[0].length; i++) {
                teamPlayers.push(this.players[0][i])
            }
            return teamPlayers

        } else {

            const teamPlayers = []
            for (let i = 1; i < this.players[1].length; i++) {
                teamPlayers.push(this.players[1][i])
            }
            return teamPlayers
        }

    },

    printGoalsTeam: function (team) {

        if (team === this.team1) {

            for (let i = 0; i < this.players[0].length; i++) {
                let acc = 0
                for (let x = 0; x < this.scored.length; x++) {
                    if (this.players[0][i] === this.scored[x]) {
                        acc++
                    }
                }
                console.log(`${this.players[0][i]} ${acc > 0 ? 'made ' + acc + ' goals.' : "didn't make goals."} `);
            }

        } else {

            for (let i = 0; i < this.players[1].length; i++) {
                let acc = 0
                for (let x = 0; x < this.scored.length; x++) {
                    if (this.players[1][i] === this.scored[x]) {
                        acc++
                    }
                }
                console.log(`${this.players[1][i]} ${acc > 0 ? 'made ' + acc + ' goals.' : "didn't make goals."} `);
            }

        }

    },

    // 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
    printGoalsByName: function (...names) {
        console.log(names);
        for (let i = 0; i < names.length; i++) {
            let acc = 0
            for (let x = 0; x < this.scored.length; x++) {
                if (names[i] === this.scored[x]) {
                    acc++
                }
            }
            console.log(`${names[i]} ${acc > 0 ? 'made ' + acc + ' goals.' : "didn't make goals."} `);
        }
    },

    // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
    printGoalsStream() {
        for (const [i, el] of this.scored.entries()) {
            console.log(`Goal ${i + 1}: ${el}`);
        }
    },

    // 2. Use a loop to calculate the average odd and log it to the console (Wealready studied how to calculate averages, you can go check if you don't remember)
    calcAverageOdd() {
        let sum = 0
        for (const odd of Object.values(this.odds)) {
            sum += odd
        }
        console.log(sum / 3);

        return sum / 3
    },

    // 3. Print the 3 odds to the console, but in a nice formatted way,exactly like this: Odd of victory Bayern Munich: 1.33; Odd of draw: 3.25; Odd of victory Borrussia Dortmund: 6.5. Get the team names directly from the game object, don't hardcode them (except for "draw").
    printOdds() {

        for (const [team, score] of Object.entries(this.odds)) {
            // console.log(team, score);
            if (team === 'team1') {
                console.log(`Odd of victory ${this[team]} are ${score}`);
            } else if (team === 'team2') {
                console.log(`Odd of victory ${this[team]} are ${score}`);
            } else {
                console.log(`Odd of draw are ${score}`);
            }
        }

    },

    createObjectScorers() {

        for (const name of this.scored) {

        }

    }

};


const scorers = {

}


// console.log(game.allplayers());

// console.log(game.getGK('Borrussia Dortmund'));

// console.log(game.getFieldsPlayers('Bayern Munich'));

// game.printGoals('Borrussia Dortmund')

// game.printGoalsByName('Hummels', 'Lewandowski', 'Alaba', 'Davies', 'Gnarby',)

// game.printGoalsStream()

// game.calcAverageOdd()

game.printOdds()

*/









// * ------- 109. Logical Assignment Operators
/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 },
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${ time }, at adress: ${ address }, main dish: ${ this.mainMenu[mainIndex] }, ${ starterIndex ? 'second dish: ' + this.starterMenu[starterIndex] : '' } `);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Pasta with ${ ing1 }, ${ ing2 } and ${ ing3 } `);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }

}


const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
}

const rest2 = {
    name: 'La piazza',
    owner: 'Giovanni Rossi',
}

// ? OR assignment operator
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// ? Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10
rest2.numGuests ??= 10

// console.log(rest1);
// console.log(rest2);

rest1.owner = rest1.owner && 'Unknown'
// rest1.owner ??= 'Unknown'
// rest1.owner &&= 'Unknown'

console.log(rest1);

*/





// * ------- 108. The Nullish Coalescing Operator (??)
/*

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 },
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${ time }, at adress: ${ address }, main dish: ${ this.mainMenu[mainIndex] }, ${ starterIndex ? 'second dish: ' + this.starterMenu[starterIndex] : '' } `);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Pasta with ${ ing1 }, ${ ing2 } and ${ ing3 } `);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }

}

restaurant.numGuests = 0

const guests = restaurant.numGuests || 10
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect);
*/



// * ------- 107. Short Circuiting (&& and ||)
/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 },
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${ time }, at adress: ${ address }, main dish: ${ this.mainMenu[mainIndex] }, ${ starterIndex ? 'second dish: ' + this.starterMenu[starterIndex] : '' } `);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Pasta with ${ ing1 }, ${ ing2 } and ${ ing3 } `);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }

}

console.log('----OR----');

// Short-circuting - return first truly value
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1);

// restaurant.numGuests = 23

const guests2 = restaurant.numGuests || 10
console.log(guests2);



console.log('----AND----');
// return a first false value
console.log(0 && '1232');
console.log(7 && '1232');


// check if method exist so next we call it
if (restaurant.orderPizza) {
    restaurant.orderPizza('A', "b")
}

restaurant.orderPizza && restaurant.orderPizza('A', "b")
*/











// * ------- 106. Rest Pattern and Parameters
/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 },
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${ time }, at adress: ${ address }, main dish: ${ this.mainMenu[mainIndex] }, ${ starterIndex ? 'second dish: ' + this.starterMenu[starterIndex] : '' } `);

    },
    orderPasta: function (ing1, ing2, ing3) {

        console.log(`Pasta with ${ ing1 }, ${ ing2 } and ${ ing3 } `);

    },

    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);

    }

}
// 1) Destructuring

// ? SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]


// ? REST, because on LEFT side of =
const [a, b, ...another] = [1, 2, 3, 4, 5]
// console.log(a, b, another);


const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood);

// ? Objects
const { sat, ...weekdays } = restaurant.openingHours
// console.log(sat, weekdays);


// 2) Functions
const add = function (...numbers) {
    console.log(numbers);

    let sum = 0
    for (let i = 0; i < numbers.length; i++) sum += numbers[i]

    console.log(sum);
}

// add(2, 3)
// add(5, 3, 7, 2)

const x = [23, 5, 7]
// add(...x)


restaurant.orderPizza('a', 'b', 'c', 'd')

restaurant.orderPizza('1')

*/





















// * ------- 105. The Spread Operator (...)
/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 },
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${ time }, at adress: ${ address }, main dish: ${ this.mainMenu[mainIndex] }, ${ starterIndex ? 'second dish: ' + this.starterMenu[starterIndex] : '' } `);

    },
    orderPasta: function (ing1, ing2, ing3) {

        console.log(`Pasta with ${ ing1 }, ${ ing2 } and ${ ing3 } `);

    }

}

const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr);

const newArr = [1, 2, ...arr]

console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.starterMenu, 'Gnocci']
// console.log(newMenu);

// ? Copy array
const mainMenuCopy = [...restaurant.mainMenu]

// ? Join 2 arrays
const menuAll = [...restaurant.mainMenu, ...restaurant.starterMenu]


// ? Iterables: arrays, strings, maps, sets. NOT objects
const string = 'dev'
const stringDest = [...string, 1, 2, 3]
// console.log(stringDest);


// ? Real-world example
const ingredients = ['oil', 'tomato', 'cheese']
restaurant.orderPasta(...ingredients)


// ? Objects
const copyRestaurant = { ...restaurant }
// console.log(copyRestaurant);
copyRestaurant.name = 'New name'
console.log(copyRestaurant);

const newRestaurant2 = { foundedIn: 1998, ...restaurant, founder: 'Ivan' }

// console.log(newRestaurant2);

*/



// * ------- 104. Destructuring Objects
/*

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 },
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {

        console.log(starterIndex, mainIndex, time, address);

        console.log(`Delivering to: ${ time }, at adress: ${ address }, main dish: ${ this.mainMenu[mainIndex] }, ${ starterIndex ? 'second dish: ' + this.starterMenu[starterIndex] : '' } `);

    }
}



restaurant.orderDelivery({
    time: '22:30',
    address: 'Via Del Solo, 21',
    mainIndex: 2,
    starterIndex: '',
})




// ? Destructuring object

// const { name, openingHours, categories } = restaurant

// console.log(name);
// console.log(openingHours);
// console.log(categories);


// ? Renaming variables

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant

// console.log(restaurantName);
// console.log(hours);
// console.log(tags);


// ? Default values

// 1) default value 2) default value and renaming
// const { menu = '', starterMenu: starters = [] } = restaurant

// console.log(starters);


// ? Mutating variables

// let a = 111
// let b = 999

// const obj = {
//     a: 23,
//     b: 7,
//     c: 14
// }

// console.log(obj);

// ({ a, b } = obj)
// console.log(a, b);


// ? Nested obj

// const { fri: { open: o, close: c } } = restaurant.openingHours
// console.log(open, close);
// console.log(o, c);

*/

















// * ------- 103. Destructuring Arrays
/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'bruschetta', 'Garlic bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]

    }
}

const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr
// console.log(x, y, z); // 2 3 4


// допустим нам нужны только первые два элемента из массива
const [first, second] = restaurant.categories
// console.log(first, second); // Italian Pizzeria


// допустим нам нужны только первый и третий элемент из массива
const [first2, , third] = restaurant.categories
// console.log(first2, third); // Italian Vegetarian


// допустим хотим поменять местами два типа меню (switch)
let [main, , secondary] = restaurant.categories
// console.log(main, secondary);

// console.log(main);

// const temp = main
// main = secondary
// secondary = temp

// [main, secondary] = [secondary, main]
// console.log(main, secondary);

console.log(restaurant.order(0, 1));

const [starter, main2] = restaurant.order(0, 1)

console.log(starter, main2);


// ? Nested destructuring
const nested = [2, 4, [5, 6]]

// const [i, , j] = nested
// console.log(j);

const [i, , [j, k]] = nested
console.log(k);


// ? Default values
const [p = 1, q = 1, r = 1] = [8, 9]

console.log(p, q, r);
*/




