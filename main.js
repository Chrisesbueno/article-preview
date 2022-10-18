const modal = document.querySelector('.modal')
const button = document.querySelectorAll('.share')
console.log(modal, button)

button.forEach(element => {
    element.addEventListener('click', () => {
        if (modal.classList.contains('show')) {
            modal.classList.remove('show') 
        } else {
            modal.classList.add('show')
        }
    })
});