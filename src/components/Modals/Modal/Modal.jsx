import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function Modal({ isOpen, children, onClose }) {
	const modal = isOpen && document.createElement('div');
	useEffect(() => {
		if (isOpen) {
			modal.id = 'modal';
			document.body.appendChild(modal);
		}
		return () => {
			if (modal) document.body.removeChild(modal);
		};
	}, [isOpen, modal]);

	return (
		isOpen &&
		createPortal(
			<ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
			modal
		)
	);
}

Modal.propTypes = {
	isOpen: PropTypes.bool,
	children: PropTypes.element,
	onClose: PropTypes.func,
};

export default Modal;
