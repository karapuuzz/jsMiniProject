let mainDiv = document.createElement('div')
let postInfo = document.createElement('div')
postInfo.classList.add('postInfo')

let url = new URL(location.href)
let post = JSON.parse(url.searchParams.get('post'));

postInfo.innerHTML = `<h2>${post.id} ${post.title}</h2>
                      <h4>${post.body}</h4>`

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => response.json())
    .then(comments => {
        for (const comment of comments) {
            let commentsInfo = document.createElement('div')
            commentsInfo.classList.add('commentsInfo')
            commentsInfo.innerHTML = `<h3>${comment.name}</h3>
                                      <p>${comment.body}</p>`
            commentsInfoDiv.appendChild(commentsInfo)

        }
})
let commentsInfoDiv = document.createElement('div')
commentsInfoDiv.classList.add('commentsInfoDiv')
mainDiv.append(postInfo, commentsInfoDiv)
document.body.appendChild(mainDiv)