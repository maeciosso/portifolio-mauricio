document.getElementById('menu').addEventListener('click', (event) => {
    event.stopPropagation();
    let menu = document.getElementById('divMenu');
    menu.classList.toggle('hide');
});

document.getElementById('x').addEventListener('click', (event) => {
    event.stopPropagation();
    let menu = document.getElementById('divMenu');
    menu.classList.toggle('hide');
});

document.getElementById('contato').addEventListener('click', (event) => {
    event.stopPropagation();
    let cont = document.getElementById('dContatos');
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
