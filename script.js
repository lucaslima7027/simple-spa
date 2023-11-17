function loadPage(page) {
    document.querySelectorAll('.container').forEach(element => {
        element.classList.remove('show')
    })
    document.querySelector(`#${page}`).classList.add('show')
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {loadPage(button.dataset.page)})
})