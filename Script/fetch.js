// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


function clickHandler() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => post(data))
}
function post(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
function postLoader() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postData(data))
}

function postData(data) {
    const postSection = document.getElementById('posts');
    
    for (const post of data){
       const div = document.createElement('div');
       div.innerHTML=`
       <h3>User Id : ${post.userId} and id : ${post.id}</h3>
       <h4>Title : ${post.title}</h4>
       <p>${post.body}</p>
       `
        postSection.appendChild(div);
        div.classList = 'post'
    }


}