/********PARA ACTIVAR LA LISTA DESPLEGABLE MOVIL Y ANIMARLO*****/
const ham = document.querySelector('.nav__ham');
const enlaces = document.querySelector('.nav__enlaces-menu');
const barras = document.querySelectorAll('.nav__ham span');
ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});
/*** PARA QUE SE ACTIVE CON EL SCROLL****/
window.addEventListener("scroll", function(){
    var header = document.querySelector(".contenedor-navbar");
    header.classList.toggle("abajo",window.scrollY>0);
})