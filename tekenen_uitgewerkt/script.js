var papier = document.querySelector('canvas')
var pen = papier.getContext('2d')

// lijn
pen.beginPath()
pen.moveTo(10, 10)
pen.lineTo(100, 100)
pen.stroke()

// vierkant
pen.beginPath()
pen.rect(200, 10, 50, 50)
pen.stroke()

// cirkel
pen.beginPath()
pen.arc(400, 80, 40, 0, Math.PI * 2)
pen.stroke()
