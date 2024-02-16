import PropTypes from 'prop-types';
import styles from './SendButton.module.css';

function SendButton({ onClick, value, disabled }) {
	return (
		<button
			aria-label="Кнопка отправления"
			className={styles.button}
			onClick={onClick}
			value={value}
			disabled={disabled}
		>
			{value}
		</button>
	);
}

SendButton.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.string,
	disabled: PropTypes.bool,
};

export default SendButton;
