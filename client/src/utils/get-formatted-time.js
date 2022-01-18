
export const getFormatedTime = (m, s, ms) => {
	const minute = (m < 10) ? '0' + m : m
	const second = (s < 10) ? '0' + s : s
	const milliseconds =
		(ms < 1000 && ms >= 100) ? '0' + ms :
		(ms < 100 && ms >= 10) ? '00' + ms:
		(ms < 10) ? '000' + ms : ms

	return `${minute}:${second}:${milliseconds}`
}