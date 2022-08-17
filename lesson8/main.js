// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}




// створити пустий масив, наповнити його 10 об'єктами new User(....)

let array = [];
let firstUser = new User(1, 'Petro', 'Petrenko', 'Petrenko@gmail.com', 380681234567);
let secondUser = new User(2, 'Ivan', 'Ivanenko', 'Ivanenko@gmail.com', 380687546768);
let thirdUser = new User(3, 'Stepan', 'Stepanenko', 'Stepanenko@gmail.com', 380685416267);
let fourthUser = new User(4, 'Vasyl', 'Vasylenko', 'Vasylenko@gmail.com', 380689376422)
let fifthUser = new User(5, 'Serhii', 'Serhienko', 'Serhienko@gmail.com', 380686789567);
let sixthUser = new User(6, 'Vitalii', 'Vitenko', 'Vitenko@gmail.com', 380683396717);
let seventhUser = new User(7, 'Oleg', 'Olezhko', 'Oleg1970@gmail.com', 380687379655);
let eighthUser = new User(8, 'Sasha', 'Olexandrenko', 'Olexandrenko@gmail.com', 380683316373);
let ninthUser = new User(9, 'Misha', 'Milenko', 'Milenko@gmail.com', 380683239673);
let tenthUser = new User(10, 'Taras', 'Tarasenko', 'Tarasenko@gmail.com', 380687614620);
array = [firstUser, secondUser, thirdUser, fourthUser, fifthUser, sixthUser, seventhUser, eighthUser, ninthUser, tenthUser];
console.log(array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUser = array.filter((value, index) => {
    return index % 2
});
console.log(filteredUser);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUser = array.sort((a, b) => {
    return a.id - b.id;
})
console.log(sortedUser);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}



// створити пустий масив, наповнити його 10 об'єктами Client

let clientArray = [];
let firstClient = new Client(1, 'Petro', 'Petrenko', 'Petrenko@gmail.com', 380681234567, ['Apples', 'Tea']);
let secondClient = new Client(2, 'Ivan', 'Ivanenko', 'Ivanenko@gmail.com', 380687546768, ['Carrots', 'Cabbage', 'Beets']);
let thirdClient = new Client(3, 'Stepan', 'Stepanenko', 'Stepanenko@gmail.com', 380685416267, ['Vinegar', 'Oil', 'Sugar', 'Salt']);
let fourthClient = new Client(4, 'Vasyl', 'Vasylenko', 'Vasylenko@gmail.com', 380689376422, ['Water', 'Bananas', 'Milk'])
let fifthClient = new Client(5, 'Serhii', 'Serhienko', 'Serhienko@gmail.com', 380686789567, ['Ketchup', 'Bread', 'Sausage', 'Flour']);
let sixthClient = new Client(6, 'Vitalii', 'Vitenko', 'Vitenko@gmail.com', 380683396717, ['Apples', 'Vinegar', 'Milk']);
let seventhClient = new Client(7, 'Oleg', 'Olezhko', 'Oleg1970@gmail.com', 380687379655, ['Cucumber', 'Bread', 'Butter', 'Sausage', 'Cola']);
let eighthClient = new Client(8, 'Sasha', 'Olexandrenko', 'Olexandrenko@gmail.com', 380683316373, ['Water', 'Oil', 'Bread']);
let ninthClient = new Client(9, 'Misha', 'Milenko', 'Milenko@gmail.com', 380683239673, ['Meat', 'Vine']);
let tenthClient = new Client(10, 'Taras', 'Tarasenko', 'Tarasenko@gmail.com', 380687614620, ['Bananas', 'Yogurt', 'Milk']);
clientArray = [firstClient, secondClient, thirdClient, fourthClient, fifthClient, sixthClient, seventhClient, eighthClient, ninthClient, tenthClient];
console.log(clientArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClient = clientArray.sort((a, b) => {
    if (a.order.length > b.order.length) {
        return 1;
    }
    if (a.order.length < b.order.length) {
        return -1;
    }
    if (a.order.length === b.order.length) {
        return 0;
    }
});
console.log(sortedClient);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car(model, manufacturer, yearOfProduce, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfProduce = yearOfProduce;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`)}
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(maxSpeed + newSpeed)};
//     this.changeYear = function (newValue) {
//         console.log(yearOfProduce = newValue)};
//     this.addDriver = function(driver) {
//         name = driver.name;
//         age = driver.age;
//     }
// }



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, yearOfProduce, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfProduce = yearOfProduce;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`)}
        this.increaseMaxSpeed = function (newSpeed) {
            console.log(maxSpeed + newSpeed)};
        this.changeYear = function (newValue) {
            console.log(yearOfProduce = newValue)};
        this.addDriver = function(driver) {
            name = driver.name;
    }
}}



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку