let container = document.getElementById('container')

window.onmousemove = e =>{
    const mouseX = e.clientX
    const mouseY = e.clientY

    const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

    const maxX = container.offsetWidth - window.innerWidth,
        maxY = container.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1.1,
        panY = maxY * yDecimal * -1.1 ;

 

    container.animate({
        transform: `translate(${panX}px, ${panY}px)`
    },{
        duration: 3000,
        fill: 'forwards',
        easing: 'ease'
    }
    )
}