
export const getFormatedTime = (m, s, ms) => {
	const minutes = (m < 10) ? '0' + m : m
	const seconds = (s < 10) ? '0' + s : s
	const milliseconds =
		(ms < 1000 && ms >= 100) ? '0' + ms :
		(ms < 100 && ms >= 10) ? '00' + ms:
		(ms < 10) ? '000' + ms : ms

	return `${minutes}:${seconds}:${milliseconds}`
}