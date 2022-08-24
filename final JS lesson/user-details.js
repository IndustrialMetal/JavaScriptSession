// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then(data => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        for (const dataElement of data) {
            // for (const dataElementKey in dataElement) {
            //     div.innerText = `${dataElementKey}`
            // // }
            div.innerText = `${dataElement}`;
            // console.log(dataElement);
        }
        }
    )
