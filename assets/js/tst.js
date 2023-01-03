function displayQ() {
    document.querySelector('#count').innerHTML = count +1
    document.querySelector('#question').innerHTML = question[0]
    displayR()
}

function displayR() {
    let reponseContainers = document.querySelectorAll('.reponse')
    for (let i = 0; i < reponseContainers.length; i++) {
        reponseContainers[i].innerHTML = answers[0][i]
    }
}