const year = new Date().getFullYear()
const copyright = document.getElementById('copyright')
copyright.innerHTML = `&copy; ${year} Preetham Pasala`
const updateScrollPercentage = function ()
{
const heightOfWindow = window.innerHeight
const contentScrolled = window.pageYOffset
const bodyHeight = document.body.offsetHeight
const percentage = document.querySelector('#percentage-container.percentage')
const total = bodyHeight - heightOfWindow
const got = contentScrolled
const percent = parseInt((got / total) * 100)
percentage.style.width = percent + '%'
}
window.addEventListener('scroll', updateScrollPercentage)