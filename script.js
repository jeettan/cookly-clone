let x = document.getElementsByClassName('btn-go-next');
let y = document.getElementsByClassName('btn-go-back');

let grid = document.querySelector('.grid-container');
let card = grid.querySelector('.card');
let cardWidth = card.clientWidth;

let gridRect = grid.getBoundingClientRect();
let gridWidth = gridRect.width;

let scrollValue = gridWidth;

function updateGridSize() {

    let grid = document.querySelector('.grid-container');
    let gridRect = grid.getBoundingClientRect();
    let gridWidth = gridRect.width;

    scrollValue = gridWidth;

}

x[0].addEventListener("click", function () {

    grid.scrollBy({

        left: scrollValue,
        behavior: 'smooth'
    })

})

y[0].addEventListener("click", function () {

    grid.scrollBy({

        left: -scrollValue,
        behavior: 'smooth'
    })

})

window.addEventListener('resize', function () {
    updateGridSize();
});

