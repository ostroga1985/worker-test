import { getNewSizes } from './get-new-sizes'

export const resizeImage = (file) => {
	const canvas = document.createElement('canvas')
	const offscreen = canvas.transferControlToOffscreen()
	const ctx = offscreen.getContext('2d')

	const img = new Image()
	img.src = window.URL.createObjectURL(file)

	return new Promise(resolve => {
		img.addEventListener('load', async () => {
			const [width, height] = getNewSizes(img)

			offscreen.width = width
			offscreen.height = height

			const imageData = await createImageBitmap(file)

			ctx.drawImage(imageData, 0, 0, width, height)
			offscreen.convertToBlob({ type: "image/webp" }).then(function (blob) {
				imageData.close()
				resolve(blob)
			})
		})
	})
}