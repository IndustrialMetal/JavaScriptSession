// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('What is the number?');
if ( x !== 0 ) {
    console.log('That`s true');
} else {
    console.log('It`s not right');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Enter a minute');
if (time >= 0 && time <= 15) {
    console.log('1st quater');
} else if (time >= 16 && time <= 30) {
    console.log('2st quater');
} else if (time >= 31 && time <= 45) {
    console.log('3rd quater');
} else if (time >= 46 && time <= 59) {
    console.log('4rd quater');
}  else {
    console.log('Enter correct time');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day =prompt('Enter a date (day only)');
if (day > 0 && day < 11) {
    console.log('1st decade');
} else if (day > 10 && day < 21) {
    console.log('2nd decade');
} else if (day > 20 && day < 32) {
    console.log('3rd decade');
} else {
    console.log('Enter a valid date');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let schedule = +prompt('Enter number of day');
switch (schedule) {
    case 1: console.log('Monday');
    break;
    case 2: console.log('Tuesday');
    break;
    case 3: console.log('Wednesday');
    break;
    case 4: console.log('Thursday');
    break;
    case 5: console.log('Friday');
    break;
    case 6: console.log('Saturday');
    break;
    case 7: console.log('Sunday');
    break;
    default: console.log('Enter correct number');
    break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//??????????????????????????????????????????????????????????????????????????????????????????????????????????????
// Не розумію, як користувач може вводити одночасно два значення, щоб я їх порівняв.
let a;
let b;
let comparing = +prompt('Enter your number');
if (a > b) {
    console.log(a);
} else if (a < b ) {
    console.log(b);
} else {
    console.log('Numbers are equal');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//??????????????????????????????????????????????????????????????????????????????????????????????????????????????
// У 1му завданні вже є змінна "Х". Щоб при перевірці не було конфліктів, замінив її на "ХХ".
let xx = prompt('Write any message');
if (xx == 0 || xx === null || xx === `` || xx === undefined || xx === NaN) {
  console.log('Default');
}