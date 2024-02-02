import React from 'react';
import PropTypes from 'prop-types';

function ClearIcon({ width, height, circleFill, backgroundFill }) {
	return (
		<svg
			width={width || '30'}
			height={height || '31'}
			viewBox="0 0 30 31"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="15" cy="15.666" r="15" fill={circleFill || '#F1F1F1'} />
			<path
				d="M9.4 22.6046L8 21.3108L13.6 16.1353L8 10.9599L9.4 9.66602L15 14.8415L20.6 9.66602L22 10.9599L16.4 16.1353L22 21.3108L20.6 22.6046L15 17.4292L9.4 22.6046Z"
				fill={backgroundFill || '#7B7B7B'}
			/>
		</svg>
	);
}

ClearIcon.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	circleFill: PropTypes.string,
	backgroundFill: PropTypes.string,
};

ClearIcon.defaultProps = {
	width: '30',
	height: '31',
	circleFill: '#F1F1F1',
	backgroundFill: '#7B7B7B',
};

export default ClearIcon;
