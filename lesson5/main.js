// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function square(a, b) {
//     let sumSquare = a * b;
//     console.log(sumSquare);
//     return sumSquare
// }
//
// square(5, 10);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function squareCircle(r) {
//     let sumSquareCircle = (r * 3.14) ** 2
//     console.log(sumSquareCircle);
//     return sumSquareCircle
// }
// squareCircle(10);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCylinder(r, h) {
//     let sumSquareCylinder = 2 * 3.14 * r * h;
//     console.log(sumSquareCylinder);
//     return sumSquareCylinder
// }
// squareCylinder(5, 15)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1,2,3,4,5,6];
// function arraycounter(array) {
//     for (const arrayElement of array) {
//     console.log(arrayElement);
//     }
// }
// arraycounter(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function textInputer(text) {
//     document.write(`<p>${text}</p>`)
// }
// textInputer('Something');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ul(textLi) {
//     document.write(`<ul>
//         <li>${textLi}</li>
//         <li>${textLi}</li>
//         <li>${textLi}</li>
//                     </ul>`)
// }
// ul('Something in li');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function ulka(textLi, liCount) {
//     document.write(`<ul>`);
//     for (let i = 0; i < liCount; i++) {
//         const textLiElement = liCount[i];
//         document.write(`<li>${textLi}</li>`);
//         document.write(`</ul>`);
//     }
// }
// ulka('Something in li', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1, true, 'word', null, NaN];
// function elementsOfArray(elements) {
//     for (const element of elements) {
//         document.write(`<ul>
//             <li>${element}</li>
// </ul>`);
//     }
// }
// elementsOfArray(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//     {
//         id: 124232,
//         name: 'Serg',
//         age: 20,
//     },
//     {
//         id: 546876,
//         name: 'Vasya',
//         age: 25,
//     },
//     {
//         id: 57645,
//         name: 'Petya',
//         age: 32,
//     }
// ]
// function arrayOfUsers(usersInfo) {
//     for (let i = 0; i < usersInfo.length; i++) {
//         const usersInfoElement = usersInfo[i];
//         document.write(`<div>
//         <p>
//         ${usersInfoElement.id} -- ${usersInfoElement.name} -- ${usersInfoElement.age}
// </p>
// </div>`)
//     }
// }
// arrayOfUsers(array);

// - створити функцію яка повертає найменше число з масиву

// let arr = [11, 92, 43, 74, 55, 68, 6];
//
// function min(findMinimal) {
//     for (let i = 0; i < findMinimal.length; i++) {
//         let minNumberElement = findMinimal[i];
//         let minNumber = findMinimal[0];
//         if (minNumberElement < minNumber) {
//             return minNumberElement
//         }
//             }
// }
// console.log(min(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [10, 20, 30];
// function sumArrayElements(arraySum) {
//     for (let i = 0; i < arraySum.length; i++) {
//         const arraySumElement = arraySum[i];
//         console.log(arraySum[0] + arraySum[1] + arraySum[2]);
//     }
// }
// sumArrayElements(arr);