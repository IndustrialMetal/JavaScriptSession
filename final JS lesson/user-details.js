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
        let div = document.createElement('div')
        document.body.appendChild(div)

        function recursion(item){
            for (const itemElement in item) {
                if (typeof item[itemElement] !=='object'){
                    let p = document.createElement('p')
                    p.append(`${itemElement} - ${item[itemElement]}`)
                    div.appendChild(p)
                } else {
                    recursion(item[itemElement]);
                }
            }
        }
        recursion(users);
    })


let btnDiv = document.createElement('div')
let btn = document.createElement('button')
btn.innerText = 'Post of current user'
btnDiv.appendChild(btn)
document.body.appendChild(btnDiv)

btn.onclick = function (){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(comments => {
            let divForAll = document.createElement('div')
                document.body.appendChild(divForAll)
            for (const comment of comments) {
                let div = document.createElement('div')
                div.innerText = `${comment.id} ----- ${comment.title} ---- ${comment.body}`
                let btnPosts = document.createElement('button')
                btnPosts.innerText = 'Press'
                btnPosts.onclick = function () {
                    location.href = `post-details.js?id=${comment.id}`
                }
                div.append(btnPosts)
                divForAll.appendChild(div)
            }
        })
}