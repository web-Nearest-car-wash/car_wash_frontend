import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

function ModalOverlay({ onClose, children }) {
	const closePopupByOverlay = (e) =>
		e.target.className.includes('overlay') && onClose();

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div className={styles.overlay} onMouseDown={closePopupByOverlay}>
			{children}
		</div>
	);
}

ModalOverlay.propTypes = {
	onClose: PropTypes.func,
	children: PropTypes.element,
};

export default ModalOverlay;
