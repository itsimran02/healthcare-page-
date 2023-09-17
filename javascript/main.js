// const elesel = function(ele, type, callback) {
//     if (ele.length > 1) {
//         for (let i = 0; i < ele.length; i++) {
//             ele[i].addEventListner(type, callback)
//         }

//     }
// }
// const navbar = document.querySelector('[data-navbar]');
// const toggler = document.querySelectorAll('[data-nav-toggler]');
// const overlay = document.querySelector('[overlay]');
// const toggleNav = function() {
//     navbar.classList.toggle("active");
//     overlay.classList.toggle("active");
// }

// elesel(toggler, 'click', toggleNav);


const addEventOnElem = function(elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}
const navbar = document.querySelector('[data-navbar]');
const toggler = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[overlay]');

// console.log(overlay)


const toggleNav = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(toggler, 'click', toggleNav);