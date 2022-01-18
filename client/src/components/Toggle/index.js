import './style.css';

export const Toggle = ({
	clickHandler
}) => (
	<div>
		<label className='checkbox-ya'>
			<input type='checkbox' onClick={clickHandler} />
			<span className='checkbox-ya-switch'>
				<span className='checkbox-ya-feature' data-label-on='Worker' data-label-off='Main' />
			</span>
		</label>
	</div>
)