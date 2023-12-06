var lucero =document.querySelector('.lampara')
var lucecita = document.querySelector('.luz')

lucero.addEventListener('click', titilo)

function titilo (){
    lucero.classList.remove('sombra')
    lucecita.classList.remove('alumbra')
    lucecita.classList.add('lucecita')
}