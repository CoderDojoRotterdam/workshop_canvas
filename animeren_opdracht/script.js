var papier = document.querySelector('canvas')
var pen = papier.getContext('2d')

function volgendBeeld () {
  // Teken hier de auto

  tekenAuto(250)
}









// ---------------------------------------------- //
// deze code hebben we alvast voor je klaargezet: //
// ---------------------------------------------- //
// Deze functie zorgt er voor dat we constant nieuwe frames tekenen
// voor onze animatie
function volgendFrame () {
  volgendBeeld()
  window.requestAnimationFrame(volgendFrame)
}

// Start de teken lus
volgendFrame()

// Auto
function tekenAuto (x) {

  // maak de auto rood
  pen.fillStyle = 'red'

  // maak de lijnene van de auto blauw
  pen.strokeStyle = 'blue'
  pen.lineWidth = 2

  // maak het canvas leeg
  // pen.clearRect(0, 0, papier.width, papier.height)

  // start met het tekenen van de auto
  pen.beginPath()
  pen.moveTo(x, 510)

  pen.lineTo(x + 100, 510)
  pen.lineTo(x + 120, 450)
  pen.lineTo(x + 250, 450)
  pen.lineTo(x + 260, 500)
  pen.lineTo(x + 410, 550)
  pen.lineTo(x + 400, 600)
  pen.lineTo(x, 600)
  pen.closePath()

  pen.fill()
  pen.stroke()

  // Maak de banden zwart
  pen.strokeStyle = 'black'

  // Maak de velgen grijs
  pen.fillStyle = '#cccccc'

  // Dikte van de banden
  pen.lineWidth = 16

  // Teken het eerste wiel
  pen.beginPath()
  pen.arc(x + 60, 600, 40, 0, 2 * Math.PI)
  pen.stroke()
  pen.fill()
  pen.closePath()

  // Teken het tweede wiel
  pen.beginPath()
  pen.arc(x + 300, 600, 40, 0, 2 * Math.PI)
  pen.stroke()
  pen.fill()
  pen.closePath()
}
