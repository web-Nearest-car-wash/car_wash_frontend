import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

function ModalOverlay({ onClose, children }) {
	useEffect(() => {
		const closePopupByOverlay = (e) => {
			if (e.target.classList.contains(styles.overlay)) {
				onClose();
			}
		};
		document.addEventListener('click', closePopupByOverlay);
		return () => {
			document.removeEventListener('clock', closePopupByOverlay);
		};
	}, [onClose]);

	return <div className={styles.overlay}>{children}</div>;
}

ModalOverlay.propTypes = {
	onClose: PropTypes.func,
	children: PropTypes.element,
};

export default ModalOverlay;
