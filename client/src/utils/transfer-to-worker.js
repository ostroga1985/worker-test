import { getNewSizes } from "."
import { sendFile } from "./send-file"

export const transferToWorker = (files) => {
	const myWorker = new Worker('worker.js', { type: 'module' })

	const canvas = document.createElement('canvas')
	const offscreen = canvas.transferControlToOffscreen()

	let i = 0

	myWorker.postMessage({ canvas: offscreen }, [offscreen])
	myWorker.onmessage = async(e) => {
		const blob = e.data
		const resizedImage = new File([blob], 'image.webp', { type: 'image/webp' })

		sendFile(resizedImage)

		if (i <= files.length) {
			i += 1
			const file = files[i]

			transfer(file, myWorker)
		}
	}

	transfer(files[0], myWorker)
}

const transfer = (file, myWorker) => {
	const img = new Image()

	img.src = window.URL.createObjectURL(file)
	img.addEventListener('load', () => {
		const [width, height] = getNewSizes(img)

		myWorker.postMessage({ file, width, height })
	})
}