import axios from 'axios'

export const sendFile = (file) => {
	const data = new FormData()

	data.append('file', file)
	axios.post('//localhost:8000/upload', data)
		.then(() => {
			console.log('Success')
		})
		.catch(() => {
			console.log('Error')
		})
}