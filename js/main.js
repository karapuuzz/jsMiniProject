let mainDiv = document.createElement('div')
mainDiv.classList.add('mainDiv')
document.body.appendChild(mainDiv)

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let container = document.createElement('div')
            container.classList.add('container')

            let userInfo = document.createElement('div');
            userInfo.classList.add('userInfo')
            userInfo.innerHTML = `<h2>${user.id} ${user.name}</h2>`

            let learnMore = document.createElement('a')
            learnMore.classList.add('learnMore')
            learnMore.innerText = 'learn more'
            learnMore.href = `user-details.html?user=${JSON.stringify(user)}`

            container.append(userInfo, learnMore)
            mainDiv.appendChild(container)
        }
    })
