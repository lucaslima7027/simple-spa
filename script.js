window.onpopstate = function(event) {
    loadPage(event.state.page)
}   
function loadPage(page) {
    document.querySelectorAll('.container').forEach(element => {
        element.classList.remove('show')
    })
    document.querySelector(`#${page}`).classList.add('show')
}

document.querySelectorAll('button').forEach(button => {
    button.onclick = function(){
        let page = this.dataset.page;
        history.pushState({"page": page}, "", `#${page}`);
        loadPage(button.dataset.page);
    }})