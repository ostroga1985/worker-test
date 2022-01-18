import { useState } from 'react'
import './style.css';

export const FileUploader = ({ processFiles }) => {
	const [drag, setDrag] = useState(false)

	const dragStartHandler = (e) => {
		e.preventDefault()
		setDrag(true)
	}

	const dragLeaveHandler = (e) => {
		e.preventDefault()
		setDrag(false)
	}

	const dropHandler = async(e) => {
		e.preventDefault()

		const files = [...e.dataTransfer.files]

		setDrag(false)
		processFiles(files)
	}

	const handlers = {
		onDragStart: dragStartHandler,
		onDragLeave: dragLeaveHandler,
		onDragOver: dragStartHandler
	}

	return(
		<>
			{
				drag
					? <div className='drop-zone hovered'
							{...handlers}
							onDrop={dropHandler}
						>Drop files</div>
					: <div className='drop-zone' {...handlers}>Drag files to upload</div>
			}
		</>
	)
}