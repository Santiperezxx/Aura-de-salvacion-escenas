var intartesano = document.querySelector('.artesano')
var mariposon = document.querySelector('.sefue')

intartesano.addEventListener('click', mano)

function mano(){

intartesano.classList.add('hartesano')
intartesano.classList.remove('asre')
mariposon.classList.remove('sefue')

}

var nuvez =document.querySelector('.nubes')

nuvez.addEventListener('click',viento )

function viento(){
    nuvez.classList.add('nubesitas')
    nuvez.classList.remove('lure')

}


var abrol =document.querySelector('.hojas')

abrol.addEventListener('click', meneo)

function meneo(){
    abrol.classList.toggle('hojascorazon')
    abrol.classList.remove ('rero')
    /* abrol.addEventListener('mouseout', meneoInverso)
    function meneoInverso(){
        abrol.classList.add('hojascorazon2')
    } */
}