let div1 = document.querySelector('#div1')
let body = document.querySelector('body')


function color(e){
    let x = e.offsetX
    let y = e.offsetY
    let xy = x/y
    body.style.backgroundColor = "rgb("+y+","+xy+","+x+")"
    div1.innerHTML = `color rgb(${y},${xy},${x})`
    
}
div1.addEventListener('mousemove', color)