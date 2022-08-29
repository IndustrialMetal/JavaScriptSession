//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let url = new URL(location.href);
let id = url.searchParams.get('id');


fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {
        for (const dataElement in data) {
            let div = document.createElement('div')
            document.body.appendChild(div)
            div.innerText = `${data[dataElement]}`
            document.body.appendChild(div)
        }
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(data =>{
        let divComments = document.createElement('div')
        for (const dataElement in data) {
            let divCommentsSub = document.createElement('div')
            divCommentsSub.innerText = `${data[dataElement].body}`
            divComments.appendChild(divCommentsSub)
            document.body.appendChild(divComments)
        }
    })
