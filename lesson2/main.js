// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let rockSubgenres = ['alternative', 'christian', 'death', 'hard rock', 'garage', 'heavy metal', 'indie', 'progressive', 'punk', 'experimental']
console.log(rockSubgenres[0]);
console.log(rockSubgenres[1]);
console.log(rockSubgenres[2]);
console.log(rockSubgenres[3]);
console.log(rockSubgenres[4]);
console.log(rockSubgenres[5]);
console.log(rockSubgenres[6]);
console.log(rockSubgenres[7]);
console.log(rockSubgenres[8]);
console.log(rockSubgenres[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Island',
    pageCount: 334,
    genre: 'novel',
}
let book2 = {
    title: 'Spartacus',
    pageCount: 400,
    genre: 'novel',
}
let book3 = {
    title: 'Emotional Intelligence',
    pageCount: 512,
    genre: 'psychology',
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age


let book1st = {
    title: 'Island',
    pageCount: 334,
    genre: 'novel',
    authors: [
        {
            name: 'Merle',
            age: 96,
        },
        {
            name: 'Jones',
            age: 73,
        }
    ],
}
let book2nd = {
    title: 'Spartacus',
    pageCount: 400,
    genre: 'novel',
    authors: [
        {
            name: 'Giovagnoli',
            age: 77,
        },
        {
            name: 'Donatello',
            age: 51,
        }
    ],
}
let book3rd = {
    title: 'Emotional Intelligence',
    pageCount: 512,
    genre: 'psychology',
    authors: [
        {
            name: 'Goleman',
            age: 76,
        },
        {
            name: 'Schteiner',
            age: 70,
        },
        {
            name: 'Bush',
            age: 80,
        }
    ],
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'vasyl',
        username: 'vasya123',
        password: 123456,
    },
    {
        name: 'petro',
        username: 'petro228',
        password: 'dhgdf',
    },
    {
        name: 'ivan',
        username: 'vanya546',
        password: 54161154,
    },
    {
        name: 'stepan',
        username: 'stiopa456',
        password: 'hmfe5iy6',
    },
    {
        name: 'vitaliy',
        username: 'vetal15',
        password: '123vet456',
    },
    {
        name: 'serhii',
        username: 'serg1994',
        password: 'h5457e8ytcmg',
    },
    {
        name: 'mykola',
        username: 'kolyan56',
        password: '4se6g34',
    },
    {
        name: 'oleg',
        username: 'kingoleg',
        password: 4261535,
    },
    {
        name: 'olexandr',
        username: 'sanyok1653',
        password: '42fsdg63df5',
    },
    {
        name: 'pavlo',
        username: 'pasha2013',
        password: 'drhdg467567',
    }
]
console.log(users.length);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);