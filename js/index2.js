document.getElementById('menu').addEventListener('click', (event) => {
    event.stopPropagation();
    let menu = document.getElementById('divMenu');
    menu.classList.toggle('hide');
});

document.getElementById('x2').addEventListener('click', (event) => {
    event.stopPropagation();
    let menu = document.getElementById('divMenu');
    menu.classList.toggle('hide');
});

document.getElementById('contato2').addEventListener('click', (event) => {
    event.stopPropagation();
    let cont = document.getElementById('dContatos2');
    cont.classList.toggle('hide');
});

document.getElementById('proje').addEventListener('click', (event) => {
    event.stopPropagation();
    let menu = document.getElementById('divMenu');
    menu.classList.toggle('hide');
});

document.getElementById('sob').addEventListener('click', (event) => {
    event.stopPropagation();
    let menu = document.getElementById('divMenu');
    menu.classList.toggle('hide');
});
