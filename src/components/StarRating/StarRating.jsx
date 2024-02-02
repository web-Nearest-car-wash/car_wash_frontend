/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Star from '../UI/Star/Star';
import SendButton from '../UI/SendButton/SendButton';
import styles from './StarRating.module.css';

export default function StarRating({ numTotalStars, initialRating }) {
	function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
		const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
		return i < threshold ? 'yellow' : 'grey';
	}

	const [numSelectedStars, setNumSelectedStars] = useState(initialRating);
	const [numHoveringStars, setNumHoveringStars] = useState(null);
	const [isUserHovering, setIsUserHovering] = useState(false);

	const isButtonActive = numSelectedStars !== 0;

	return (
		<div className={styles.starRating}>
			<div
				onMouseEnter={() => setIsUserHovering(true)}
				onMouseLeave={() => setIsUserHovering(false)}
			>
				{Array.from({ length: numTotalStars }).map((e, i) => (
					<Star
						key={i}
						color={getColor(
							isUserHovering,
							i,
							numSelectedStars,
							numHoveringStars
						)}
						handleSelect={() => setNumSelectedStars(i + 1)}
						handleHover={() => setNumHoveringStars(i + 1)}
					/>
				))}
			</div>
			<SendButton
				value="Отправить"
				onClick={() => {}}
				disabled={!isButtonActive}
			/>
		</div>
	);
}

StarRating.propTypes = {
	numTotalStars: PropTypes.number.isRequired,
	initialRating: PropTypes.number.isRequired,
};
