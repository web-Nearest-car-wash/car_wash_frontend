import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SortSelect.module.css';
import SelectIcon from '../icons/SelectIcon';
import '../../../index.css';

function SortSelect({ options, defaultValue }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(
		defaultValue || 'Выберите значение'
	);
	const [reorder, changeReorder] = useState(false);

	const handleReorder = (event) => {
		event.stopPropagation();
		changeReorder(!reorder);
	};
	const toggleDropdown = () => setIsOpen(!isOpen);
	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
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
					onClick={(event) => handleReorder(event)}
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
};

SortSelect.defaultProps = {
	options: ['По близости', 'По рейтингу', 'По цене'],
	defaultValue: 'По близости',
};

export default SortSelect;
