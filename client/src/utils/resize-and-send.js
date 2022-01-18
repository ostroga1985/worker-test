import { sendFile } from './send-file'
import { resizeImage } from './resize-image'

export const resizeAndSend = async (files) => {
	let i = 0

	while (i < files.length) {
		const file = files[i]

		const blob = await resizeImage(file)
		const resizedImage = new File([blob], "image.webp", { type: "image/webp" })

		sendFile(resizedImage)
		i += 1
	}
}