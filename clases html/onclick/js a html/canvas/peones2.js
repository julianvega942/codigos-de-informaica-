let canvas = document.querySelector("#Tabla")

let ctx = canvas.getContext("2d")

ctx.lineWidth= 1
function dibujarPeon (xC, yC, tam, color){
    ctx.beginPath() 
    ctx.strokeStyle='black'
    ctx.fillStyle=color 

    ctx.moveTo(xC,yC)
    ctx.lineTo(xC-tam,yC+(tam*5/2))
    ctx.lineTo(xC+tam, yC+(tam*5/2))
    ctx.lineTo(xC,yC)

    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.arc(xC, yC, tam, 0, 2*Math.PI)

    ctx.stroke()
    ctx.fill()

}




dibujarPeon (100,700,50,"pink")
