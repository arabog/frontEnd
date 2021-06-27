const selectItem = el => {
          return document.querySelector(el)
}

const body = selectItem('body')
const menuBtn = selectItem('.menu')

menuBtn.addEventListener('click', func)

function func() {
          body.classList.toggle('open')
}