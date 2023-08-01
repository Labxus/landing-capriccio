// script handle of chordion

const chordion = document.querySelectorAll('.chordion')

chordion.forEach( (item) => {
    item.addEventListener('click', () => {
        item.children[1].classList.toggle('hidden')
        item.children[0].classList.toggle('text-twoTitleColor')
        item.children[0].classList.toggle('mb-10')
    })
} )

// end script handle of chordion

// script handel menu 

document.getElementById('menuNav').addEventListener('click', ()=> {
    document.getElementById('links').classList.toggle('hidden')
    document.getElementById('links').classList.toggle('flex')
    document.getElementById('links').classList.toggle('flex')
    document.getElementById('navLinks').classList.toggle('flex-col')
})

const subMenu = document.querySelectorAll('#subMenu')

subMenu.forEach( (item) => {
    item.addEventListener('click', () => {
        console.log('si');
        item.children[1].classList.toggle('hidden')
    })
} )




