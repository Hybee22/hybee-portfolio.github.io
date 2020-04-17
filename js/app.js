const nav = document.querySelector('.nav')

const toN = nav.offsetTop

const fixNav = () => {
    if (window.scrollY > toN) {
        document.body.style.paddingTop = 5 + 'px'
        document.body.classList.add('fixed-nav')
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav')
    }
    console.log(toN, window.scrollY)
}

window.addEventListener('scroll', fixNav)