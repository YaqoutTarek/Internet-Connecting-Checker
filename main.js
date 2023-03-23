let title = document.querySelector(`.title`)
let ul = document.querySelector(`ul`)
let btn = document.querySelector(`button`)

// but this function will start onLoading only !!
window.onload = function () {
    if (window.navigator.onLine) {
        onLine()
    } else {
        offLine()
    }
}
// we want program sensing connecting without refrishing page
window.addEventListener(`online`, function() {
    onLine()
})
window.addEventListener(`offline`, function() {
    offLine()
})

btn.onclick = ()=> {
    window.location.reload()
}

function onLine() {
    title.innerHTML=`Online Now`;
    title.style.color=`green`;
    ul.classList.add(`hide`);
    btn.classList.add(`hide`);
}
function offLine() {
    title.innerHTML=`Offline Now`;
    title.style.color=`dimgray`;
    ul.classList.remove(`hide`);
    btn.classList.remove(`hide`);
}