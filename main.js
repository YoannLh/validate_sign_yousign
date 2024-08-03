const blackOverlay = document.getElementById('blackDynamicOverlay')
const greenOverlay = document.getElementById('greenOverlay')
const container = document.getElementById('containerDraggableAndCourse')
const element = document.getElementById('draggable')

const POSITION_LEFT_BLACK_OVERLAY = -650
const POSITION_LEFT_GREEN_OVERLAY = -700
const WIDTH_COURSE = 650

let isDragging = false
let offsetX = 0

document.addEventListener('mousedown', (e) => {
  if (element === null) return

  isDragging = true

  offsetX = e.clientX - element.offsetLeft
})

document.addEventListener('mousemove', (e) => {
  if (element === null || blackOverlay === null || greenOverlay === null) return

  if (isDragging) {
    element.style.left = e.clientX - offsetX + 'px'
    blackOverlay.style.left =
      e.clientX - offsetX + POSITION_LEFT_BLACK_OVERLAY + 'px'
    greenOverlay.style.left =
      e.clientX - offsetX + POSITION_LEFT_GREEN_OVERLAY + 'px'

    if (element.offsetLeft <= 0) {
      element.style.left = 0 + 'px'
    }

    if (element.offsetLeft >= WIDTH_COURSE) {
      element.style.left = WIDTH_COURSE + 'px'
      blackOverlay.style.left = 0 + 'px'
      greenOverlay.style.left = 0 + 'px'
    }
  }
})

document.addEventListener('mouseup', () => {
  if (element === null) return

  isDragging = false

  if (element.offsetLeft === WIDTH_COURSE) {
    setTimeout(() => {
      document.location.href = './contact_me.html'
    }, 300)
  }
})
