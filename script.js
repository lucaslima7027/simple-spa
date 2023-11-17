window.onhashchange = () => {
    hashRequested = window.location.hash.replace("#", "")
    loadPage(hashRequested)
    
    }
    


function loadPage(page) {
    document.querySelectorAll('.container').forEach(element => {
        element.classList.remove('show')
    })
    document.querySelector(`#${page}`).classList.add('show')
    window.location.hash = `#${page}`
    
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        loadPage(button.dataset.page)
    })
})