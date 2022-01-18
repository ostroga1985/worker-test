import { useEffect, useState } from 'react'
import './style.css';
import { getFormatedTime} from './../../utils/get-formatted-time'
export const Timer = () => {

	const [milliseconds, setMilliseconds] = useState(0)
	const [seconds, setSeconds] = useState(0)
	const [minutes, setMinutes] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setMilliseconds(milliseconds => milliseconds + 10)
		},  10)

		return () => {
			clearInterval(interval)
		}
	}, [])

	useEffect(() => {
		if (milliseconds === 1000) {
			setMilliseconds(0)
			setSeconds(seconds => seconds + 1)
		}
	}, [milliseconds])

	useEffect(() => {
		if (seconds === 60) {
			setSeconds(0)
			setMinutes(minutes => minutes + 1)
		}
	}, [seconds])

	return(
		<div className='timer'>{getFormatedTime(minutes, seconds, milliseconds)}</div>
	)
}
