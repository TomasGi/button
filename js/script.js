const trash = document.querySelectorAll('.button-trash')
const deleteButton = document.querySelector('.button')
const close = document.querySelectorAll('.button-close')
const check = document.querySelectorAll('.button-check')
const buttons = document.querySelectorAll('.button-delete')

trash.forEach(button => button.addEventListener('click', function () {
    deleteButton.classList.toggle('run')
    document.querySelector(".tooltip").remove()
}))

check.forEach(button => button.addEventListener('click', function () {
    deleteButton.classList.toggle('check')
    document.querySelector(".tooltip").remove()
    setTimeout(function () {
        deleteButton.classList.toggle('run')
        deleteButton.classList.toggle('check')
    }, 600)
    setTimeout(function () {
        deleteButton.classList.toggle('diss')
    }, 900)
    setTimeout(function () {
        deleteButton.classList.toggle('delete')
    }, 1200)
}))

close.forEach(button => button.addEventListener('click', function () {
    deleteButton.classList.toggle('run')
    document.querySelector(".tooltip").remove()
}))

buttons.forEach(button => button.addEventListener('mouseover', function () {
    let element = button
    console.log(element)
    console.log(element.getAttribute('data-tooltip'))
    let tooltipWrap = document.createElement("div")
    tooltipWrap.className = 'tooltip'
    tooltipWrap.appendChild(document.createTextNode(element.getAttribute('data-tooltip')))
    let firstChild = document.body.firstChild
    firstChild.parentNode.insertBefore(tooltipWrap, firstChild)
    let linkProps = this.getBoundingClientRect()
    let tooltipProps = tooltipWrap.getBoundingClientRect()
    let topPos = linkProps.top - (tooltipProps.height)
    tooltipWrap.setAttribute('style', 'top:' + topPos + 'px;' + 'left:' + linkProps.left + 'px;')
}))

buttons.forEach(button => button.addEventListener('mouseout', function () {
    document.querySelector(".tooltip").remove()
}))