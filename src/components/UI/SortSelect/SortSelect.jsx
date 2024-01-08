import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SortSelect.module.css';
import SelectIcon from '../icons/SelectIcon';

function SortSelect({ options, defaultValue, onChange, reorderChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(defaultValue);
	const [reorder, setReorder] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);
	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onChange) {
			onChange(option);
		}
	};
	const handleReorder = (event) => {
		event.stopPropagation();
		setReorder(!reorder);
		if (reorderChange) {
			onChange(reorderChange);
		}
	};

	return (
		<div className={styles.selector}>
			<button
				type="button"
				onClick={toggleDropdown}
				className={styles.selected}
			>
				<SelectIcon
					width={30}
					height={30}
					fill="#5568D0"
					className={reorder ? styles.reorder : ''}
					onClick={handleReorder}
				/>
				{selectedOption}
			</button>
			{isOpen && (
				<ul className={styles.menu}>
					{options.map((option) => (
						<li key={option} className={styles.itemWrapper}>
							<button
								type="button"
								onClick={() => handleSelect(option)}
								className={styles.menuItem}
							>
								{option}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

SortSelect.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string),
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	reorderChange: PropTypes.func,
};

SortSelect.defaultProps = {
	options: ['По близости', 'По рейтингу', 'По цене'],
	defaultValue: 'По близости',
	onChange: () => {},
	reorderChange: () => {},
};

export default SortSelect;
