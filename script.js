const img = document.querySelector(`.image-box__img`)

//toggle option
const calcZoomPosition = e => {
	//coursor position
	const posX = e.clientX
	const posY = e.clientY

	//img position
	const imgX = img.offsetLeft
	const imgY = img.offsetTop

	//getting new position X and Y inside the img
	const newX = (imgX - posX) * -1
	const newY = (imgY - posY) * -1
	img.style.transformOrigin = `${newX}px ${newY}px`
}
const handleZoomImg = e => {
	img.classList.toggle('zoom-img')
	calcZoomPosition()
}
img.addEventListener(`mousemove`, calcZoomPosition)
img.addEventListener(`click`, handleZoomImg)

// hover option
// const zoomInImg = e => {
// 	//coursor position
// 	const posX = e.clientX
// 	const posY = e.clientY

// 	//img position
// 	const imgX = img.offsetLeft
// 	const imgY = img.offsetTop

// 	//getting new position X and Y inside the img
// 	const newX = (imgX - posX) * -1
// 	const newY = (imgY - posY) * -1
// 	img.style.transformOrigin = `${newX}px ${newY}px`

// 	img.classList.add('zoom-img')
// }
// const zoomOutImg = () => {
// 	img.classList.remove('zoom-img')
// }

// img.addEventListener(`mousemove`, zoomInImg)
// img.addEventListener(`mouseout`, zoomOutImg)
