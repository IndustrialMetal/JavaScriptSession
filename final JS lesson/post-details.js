//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then(posts => {
        let ul = document.createElement('ul');
        for (const post of posts) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerText = `${post.id} --- ${post.title} --- ${post.body}`;
        }
        document.body.appendChild(ul);
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((comments) => {
        for (const comment of comments) {
            let a = document.createElement('a');
            a.innerText = comment;
            document.body.appendChild(a);
        }
})