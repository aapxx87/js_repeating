

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// *---------------- 162. flat and flatMap

















// *---------------- 162. flat and flatMap

const arr = [[[1, 2], 3], [[4, 5], 6], 7, 8]

// console.log(arr.flat().flat());

console.log(arr.flat(2));














// *---------------- 161. some and every

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


console.log(movements.some(mov => mov > 0));
// movements.some(mov => mov > 0)









/////////////////////////////////////////////////

// *---------------- 157. The find Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0)

console.log(firstWithdrawal);

const account12 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account22 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account32 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account42 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts2 = [account12, account22, account32, account42];

const account = accounts2.find(acc => acc.owner === 'Jessica Davis')

console.log(account);
*/

















// *---------------- 155. The Magic of Chaining Methods
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1

const outcome = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur)

console.log(Math.trunc(outcome));
*/













// *---------------- 153. The reduce Method


/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce((acc, cur, idx, arr) => {
//     console.log(idx, acc);
//     return acc + cur
// }, 0)

const balance = movements.reduce((acc, cur) => acc + cur)

// console.log(balance);


// ------ Maximum value
const max = movements.reduce((acc, mov) => {

  if (acc > mov) {
    return acc
  } else {
    return mov
  }

}, movements[0])

// console.log(max);
*/

















// *---------------- 152. The filter Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => {
    return mov > 0
})

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0)

console.log(withdrawals);
*/








// *---------------- 151. Computing Usernames

/*
// ---- My version
const create_login_from_fullname = fullName => {

    // const name_to_array = fullName.split(' ')

    // const firstLetter = name_to_array
    //     .map(element => element[0].toLowerCase())
    //     .join('')

    // return firstLetter

    // ---- short form
    const result = fullName
        .toLowerCase()
        .split(' ')
        .map(element => element[0])
        .join('')

    return result

}

const create_array_logins = array => {

    // const login = array.map(element => {
    //     return create_login_from_fullname(element.owner)
    // })
    // return login

    array.forEach(element => {
        element.login_name = create_login_from_fullname(element.owner)
    })

}

// const accounts_logins = create_array_logins(accounts)
// console.log(account1, account2, account3, account4);
// console.log(accounts_logins);


*/








// *---------------- 150. The map Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1

const movementsUSD = movements.map(mov => {
    return Math.trunc(mov * eurToUsd)
})

const movementsUSDArrow = movements.map(mov => Math.trunc(mov * eurToUsd))

// console.log(movementsUSD);

// console.log(movementsUSDArrow);


const movDescriptions = movements.map((mov, idx, arr) => {
    // return mov > 0 ? `your deposit ${idx + 1} is ${mov}` : `your withdrawal ${idx + 1} is ${mov}`
    return `your ${mov > 0 ? 'deposit' : 'withdrawal'} ${idx + 1} is ${mov}`
})

console.log(movDescriptions);
*/













// *---------------- 145. forEach With Maps and Sets
/*
// --- Map

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key) => {
    console.log(`${key}: ${value}`);
})

// --- Set

const currenciesUnique = new Set(['usd', 'gbp', 'usd', 'eur', 'eur'])

currenciesUnique.forEach((element) => {

    console.log(element);

})
*/







// *---------------- 144. Looping Arrays: forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//     if (movement > 0) {
//         console.log(`You deposited ${movement}`);
//     } else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// }




movements.forEach(function (movement, idx, arr) {

    // console.log(idx);
    // console.log(arr);

    if (movement > 0) {
        console.log(`You deposited ${movement} - movement ${idx + 1}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)} - movement ${idx + 1}`);
    }

})

*/









// *---------------- 143. The new at Method
/*
const arr = [23, 11, 64]
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// some ways to get last element from array
console.log(arr[arr.length - 1]);  // 64
console.log(arr.slice(-1)); // [64]
console.log(arr.slice(-1)[0]); // 64

console.log(arr.at(-1)); // 64

// also works with strings
console.log('qwerty'.at(-1)); // y
console.log('qwerty'.at(0)); // q
*/






// *---------------- 142. Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e']



// ? - SLICE - don't affect on origin array, it returns new array with extracted parts

// starter parameter
arr.slice(2)  // ['c', 'd', 'e']

// we can define end parameter, end parameter doesn't include in an output
arr.slice(2, 4)  // ['c', 'd']

// we can define a negative parameter
arr.slice(-2)  // ['d', 'e']

// -1 is always the last element in the array
arr.slice(-1)  // ['e']

// we can use a negative parameter to define the end parameter
arr.slice(1, -2)  // ['b', 'c']

// we can create a copy off array with Slice without parameters
const copy = arr.slice()

// new array with spread 
const copyArrSpread = [...arr]



// ? - SPLICE - it works the same as Slice but it DOES REALLY CHANGE the original array

// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log(arr); // ['a', 'b']

// most common case is to remove the last elemenet from origin array
// arr.splice(-1)
// console.log(arr); // ['a', 'b', 'c', 'd']



// ? - REVERSE - mutates the original array

// console.log(arr.reverse()); // ['e', 'd', 'c', 'b', 'a']




// ? - CONCAT - doesn't mutate the original array

const arr2 = [1, 2, 3]

const concatArr = arr.concat(arr2) // ['e', 'd', 'c', 'b', 'a', 1, 2, 3]

// with spread operator
const concatArr2 = [...arr, ...arr2] // ['e', 'd', 'c', 'b', 'a', 1, 2, 3]

// console.log(concatArr2);




// ? - JOIN - объединяет все элементы массива (или массивоподобного объекта) в строку, as parameter we specify separetor

// console.log(arr2.join(' ')); // '1 2 3'*/