import './style.css';

export const Button = ({
	clickHandler,
	name = 'change direction'
}) => (
		<div>
			<button onClick={clickHandler}>{name}</button>
		</div>
	)