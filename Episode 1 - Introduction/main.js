window.onload = function () {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight

    context.fillRect(0, 0, width, height)   //I kept this example and styled the arrows white to keep both examples present.

    for (var i = 0; i < 100; i += 1) {
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height)
        context.lineTo(Math.random() * width, Math.random() * height)
        context.strokeStyle = '#ffffff';    //This was added to keep both rectangle and stroke examples together.
        context.stroke()
    }
}