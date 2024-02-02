/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import starGrey from '../../../assets/star-grey.svg';
import starYellow from '../../../assets/star-yellow.svg';

export default function Star({ color, handleSelect, handleHover }) {
	const iconSrc = color === 'yellow' ? starYellow : starGrey;
	return (
		<img
			src={iconSrc}
			alt="star"
			className="star-rating-star"
			style={{ color }}
			onMouseOver={handleHover}
			onClick={handleSelect}
		/>
	);
}

Star.propTypes = {
	color: PropTypes.string.isRequired,
	handleSelect: PropTypes.func.isRequired,
	handleHover: PropTypes.func.isRequired,
};
