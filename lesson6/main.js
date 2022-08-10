// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// console.log(a.length);
// let b = 'lorem ipsum';
// console.log(b.length);
// let c = 'javascript is cool';
// console.log(c.length);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// console.log(a.toUpperCase());
// let b = 'lorem ipsum';
// console.log(b.toUpperCase());
// let c = 'javascript is cool';
// console.log(c.toUpperCase());



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// console.log(a.toLowerCase());
// let b = 'LOREM IPSUM';
// console.log(b.toLowerCase());
// let c = 'JAVASCRIPT IS COOL';
// console.log(c.toLowerCase());



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// str = ' dirty string   ';
// let cuttedString = str.replaceAll(` `,``);
// console.log(cuttedString);



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToArray(str) {
//   let split = str.split(` `);
//     return split;
// }
// let arr = stringToArray(str);
// console.log(arr);



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let mapped = arr.map((value, index) => {
//     let str = `${value}`
//     return console.log(str);
// })



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums(nums, direction) {
//     if (direction === 'ascending') {
//         nums.sort((a, b) => a - b )
//     }
//     if (direction === 'descending' ) {
//         nums.sort((a, b) => b - a)
//     }
// }
// sortNums(nums, 'ascending')
// console.log(nums);
// sortNums(nums, 'descending')
// console.log(nums);



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sorted = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration;
// })
// console.log(sorted);
//
// let filtered = coursesAndDurationArray.filter(value => {
//     return value.monthDuration > 5;
// })
// console.log(filtered);



// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let cardsStock = [
//     {cardSuite: 'spade', value: 6, color: 'black'},
//     {cardSuite: 'diamond', value: 6, color: 'red'},
//     {cardSuite: 'heart', value: 6, color: 'red'},
//     {cardSuite: 'clubs', value: 6, color: 'black'},
//     {cardSuite: 'spade', value: 7, color: 'black'},
//     {cardSuite: 'diamond', value: 7, color: 'red'},
//     {cardSuite: 'heart', value: 7, color: 'red'},
//     {cardSuite: 'clubs', value: 7, color: 'black'},
//     {cardSuite: 'spade', value: 8, color: 'black'},
//     {cardSuite: 'diamond', value: 8, color: 'red'},
//     {cardSuite: 'heart', value: 8, color: 'red'},
//     {cardSuite: 'clubs', value: 8, color: 'black'},
//     {cardSuite: 'spade', value: 9, color: 'black'},
//     {cardSuite: 'diamond', value: 9, color: 'red'},
//     {cardSuite: 'heart', value: 9, color: 'red'},
//     {cardSuite: 'clubs', value: 9, color: 'black'},
//     {cardSuite: 'spade', value: 10, color: 'black'},
//     {cardSuite: 'diamond', value: 10, color: 'red'},
//     {cardSuite: 'heart', value: 10, color: 'red'},
//     {cardSuite: 'clubs', value: 10, color: 'black'},
//     {cardSuite: 'spade', value: 'jack', color: 'black'},
//     {cardSuite: 'diamond', value: 'jack', color: 'red'},
//     {cardSuite: 'heart', value: 'jack', color: 'red'},
//     {cardSuite: 'clubs', value: 'jack', color: 'black'},
//     {cardSuite: 'spade', value: 'queen', color: 'black'},
//     {cardSuite: 'diamond', value: 'queen', color: 'red'},
//     {cardSuite: 'heart', value: 'queen', color: 'red'},
//     {cardSuite: 'clubs', value: 'queen', color: 'black'},
//     {cardSuite: 'spade', value: 'king', color: 'black'},
//     {cardSuite: 'diamond', value: 'king', color: 'red'},
//     {cardSuite: 'heart', value: 'king', color: 'red'},
//     {cardSuite: 'clubs', value: 'king', color: 'black'},
//     {cardSuite: 'spade', value: 'joker', color: 'black'},
//     {cardSuite: 'diamond', value: 'joker', color: 'red'},
//     {cardSuite: 'heart', value: 'joker', color: 'red'},
//     {cardSuite: 'clubs', value: 'joker', color: 'black'},
// ];
// let jokerFind = cardsStock.filter(valueCard => {
//     return valueCard.value === 'joker' && valueCard.cardSuite === 'spade'
// })
// console.log(jokerFind);
// let sixFind = cardsStock.filter(valueCard => {
//     return valueCard.value === 6
// })
// console.log(sixFind);
// let redCardsFind = cardsStock.filter(valueCard => {
//     return valueCard.color === 'red'
// })
// console.log(redCardsFind);
// let diamondFind = cardsStock.filter(valueCard => {
//     return valueCard.cardSuite === 'diamond'
// })
// console.log(diamondFind);
// let clubsFromNineFind = cardsStock.filter(valueCard => {
//     return valueCard.cardSuite === 'clubs' && valueCard.value === 9 || valueCard.cardSuite === 'clubs' && valueCard.value === 10 ||
//     valueCard.cardSuite === 'clubs' && valueCard.value === 'jack' || valueCard.cardSuite === 'clubs' && valueCard.value === 'queen' ||
//         valueCard.cardSuite === 'clubs' && valueCard.value === 'king' || valueCard.cardSuite === 'clubs' && valueCard.value === 'joker'
// })
// console.log(clubsFromNineFind);



// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reducer = cardsStock.reduce((accumulator, card) => {
//     if (card.cardSuite === 'spade') {
//         accumulator.spades.push(card);
//     } else if (card.cardSuite === 'diamond') {
//         accumulator.diamonds.push(card);
//     }
//     else if (card.cardSuite === 'heart') {
//         accumulator.hearts.push(card);
//     }
//     else if (card.cardSuite === 'clubs') {
//         accumulator.clubs.push(card);
//     }
//     return accumulator;
// }, {spades:[], diamonds:[], hearts:[], clubs:[]})
// console.log(reducer);