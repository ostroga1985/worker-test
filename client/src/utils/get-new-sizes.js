
const MAX_WIDTH = 800
const MAX_HEIGHT = 600

export const getNewSizes = ({width: w, height: h}) => {
	let width = w
	let height = h

	if (width > height) {
		if (width > MAX_WIDTH) {
			height *= MAX_WIDTH / width
			width = MAX_WIDTH
		}
	} else {
		if (height > MAX_HEIGHT) {
			width *= MAX_HEIGHT / height
			height = MAX_HEIGHT
		}
	}

	return [Math.floor(width), Math.floor(height)]
}