import { getNewSizes } from './get-new-sizes'

export const resizeImage = (file) => {
	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')

	const img = new Image()
	img.src = window.URL.createObjectURL(file)

	return new Promise(resolve => {
		img.addEventListener('load', () => {
			const [width, height] = getNewSizes(img)

			canvas.width = width
			canvas.height = height

			ctx.drawImage(img, 0, 0, width, height)
			canvas.toBlob(resolve, 'image/webp', 0.8)
		})
	})
}