// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let id = url.searchParams.get('id');


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then(users => {
        let ul = document.createElement('ul')
        for (const user of users) {
            let li = document.createElement('li');
            li.innerText = user.title;
            ul.appendChild(li);
            let a = document.createElement('a');
            ul.appendChild(a);
            a.href =`post-details.html?id=${user.id}`
            a.innerText = 'Post details'
        }
        document.body.appendChild(ul);
    })
