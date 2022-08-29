let div = document.createElement('div')
div.classList.add('div')

let url = new URL(location.href)
let user = JSON.parse(url.searchParams.get('user'));

div.innerHTML = `<h2>${user.id} ${user.name} ${user.username}</h2> 
                 <h4>${user.email} <br> ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode} <br> ${user.address.geo.lat} ${user.address.geo.lng}</h4>
                 <h3>${user.company.name} <br> ${user.phone} ${user.website} <br> ${user.company.catchPhrase} ${user.company.bs}</h3>`


let button = document.createElement('button')

let buttonDiv = document.createElement('div')
buttonDiv.classList.add('buttonDiv')
buttonDiv.appendChild(button)

button.innerHTML=`<p>Posts</p>`
button.classList.add('button')
button.onclick = () => {
    fetch( `https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((response) => response.json())
        .then(posts=> {
            let postsDiv = document.createElement('div')
            postsDiv.classList.add('postsDiv')
            for (const post of posts) {
                let postTitle = document.createElement("div")
                postTitle.classList.add('postTitle')
                postTitle.innerHTML = `<h2>${post.title}</h2>`

                let postDetails = document.createElement('a')
                postDetails.innerText='Post details'
                postDetails.href = `post-details.html?post=${JSON.stringify(post)}`
                button.hidden = true

                postTitle.appendChild(postDetails)
                postsDiv.appendChild(postTitle)

            }
            document.body.appendChild(postsDiv)
        })
}
document.body.append(div, buttonDiv)