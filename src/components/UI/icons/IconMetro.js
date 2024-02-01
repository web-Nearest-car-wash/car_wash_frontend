import PropTypes from 'prop-types';

function IconMetro({ fill, width, height }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '13'}
			height={height || '13'}
			viewBox="0 0 13 13"
			fill="none"
		>
			<circle cx="6.58496" cy="6.5" r="6" fill={fill || '#57BA1A'} />
		</svg>
	);
}

IconMetro.propTypes = {
	fill: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default IconMetro;
