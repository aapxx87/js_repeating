'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP


// ------ Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');

const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');

const inputLoanAmount = document.querySelector('.form__input--loan-amount');

const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');






// ------ Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4,
};

const accounts = [account1, account2, account3, account4];








// ? ----- DISPLAY MOVEMENTS


const displayMovements = (acc) => {

    containerMovements.innerHTML = ''

    acc.movements.forEach((mov, idx) => {

        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `      
        <div class="movements__row">
         <div class="movements__type movements__type--${type}">${idx + 1} ${type}</div>
         <div class="movements__date">3 days ago</div>
         <div class="movements__value">${mov} €</div>
        </div>`


        containerMovements.insertAdjacentHTML('afterbegin', html)

    });

}

// displayMovements(account1.movements)









// ? ----- CALCULATE AND DISPLAY BALANCE

const calcDisplayBalance = (acc) => {

    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0)

    labelBalance.textContent = `${acc.balance} €`

}

// calcDisplayBalance(account1.movements)









// ? ----- CALCULATE AND DISPLAY TOTAL INCOME, OUTCOME AND INTEREST

const calcDisplaySummary = (acc) => {

    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, cur) => acc + cur)

    labelSumIn.innerHTML = `${incomes} €`


    const outcomes = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, cur) => acc + cur)

    labelSumOut.innerHTML = `${outcomes} €`

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * acc.interestRate / 100)
        .filter(int => int >= 1)
        .reduce((acc, cur) => acc + cur)

    labelSumInterest.innerHTML = `${Math.trunc(interest)} €`


}


// calcDisplaySummary(account1.movements)










// ? ----- CREATE SHORT LOGIN NAMES

const createUsernames = (accs) => {

    accs.forEach(acc => {

        acc.usename = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('')

    })

}

createUsernames(accounts)


console.log(accounts);



// ? -----  UPDATE UI

const updateUI = acc => {

    // Display movement
    displayMovements(acc)

    // Display balance
    calcDisplayBalance(acc)

    // Display summary
    calcDisplaySummary(acc)

}



// ------ EVENT HANDLERS

let currentAccount






btnLogin.addEventListener('click', function (e) {

    // Prevent form from submitting
    e.preventDefault()

    // находим в массиве аккаунтов нужный по полю username
    currentAccount = accounts.find(acc => acc.usename === inputLoginUsername.value)

    // альтернативный вариант анписания
    // if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //     console.log('Success');
    // }

    // валидируем пин по найденному аккаунты выше
    // сначала в условие вставляем проверку того, что мы нашли выше нужный аккаунт по логину, то есть что он существует
    if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {

        // Display UI and Welcome message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
        containerApp.style.opacity = '1'

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = ''
        inputLoginPin.blur()


        // // Display movement
        // displayMovements(currentAccount)
        // // Display balance
        // calcDisplayBalance(currentAccount)
        // // Display summary
        // calcDisplaySummary(currentAccount)


        updateUI(currentAccount)

    }


})


btnTransfer.addEventListener('click', function (e) {

    e.preventDefault()

    const amount = Number(inputTransferAmount.value)

    const receiverAcc = accounts.find(acc => acc.usename === inputTransferTo.value)

    // console.log(amount, receiverAcc);

    inputTransferAmount.value = inputTransferTo.value = ''

    if (
        amount > 0 &&
        currentAccount.balance >= amount &&
        receiverAcc &&
        receiverAcc.usename !== currentAccount.usename
    ) {

        // Doing the transfer
        currentAccount.movements.push(-amount)
        receiverAcc.movements.push(amount)

        // Update UI

        updateUI(currentAccount)

        // // -- Display movement
        // displayMovements(currentAccount.movements)
        // // -- Display balance
        // calcDisplayBalance(currentAccount)
        // // -- Display summary
        // calcDisplaySummary(currentAccount)

        console.log('transfer valid');

    }



})

btnClose.addEventListener('click', function (e) {

    e.preventDefault()



    if (
        currentAccount.usename === inputCloseUsername.value &&
        currentAccount.pin === Number(inputClosePin.value)
    ) {

        const index = accounts.findIndex(acc => acc.usename === currentAccount.usename)

        // Delete account
        accounts.splice(index, 1)

        // Hide UI
        containerApp.style.opacity = '0'

    }

    inputCloseUsername.value = inputClosePin.value = ''


})



























