const openMenu = document.querySelector(".container_header__DropMenu");
const closeMenu = document.querySelector(".close_dropMenu");

const showMenu = document.querySelector('.container_header__navbar');

const body = document.querySelector('body')


openMenu.addEventListener('click',()=>{

    showMenu.classList.toggle('ativo')
    body.style.overflow='hidden'
})

closeMenu.addEventListener('click',()=>{

    showMenu.classList.toggle('ativo')
    body.style.overflow='scroll'
})