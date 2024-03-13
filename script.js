const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

/* 检查 bar是否在页面上 */
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}