import './style.css';
import logo from './logo.svg';

export const Logo = ({
	status,
	swap
}) => (
		<div className={`logo-container ${swap[status]}`}>
			<img src={logo} className={`logo ${status}`} alt="logo" />
		</div>
	)