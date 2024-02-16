import PropTypes from 'prop-types';

function IconFilter({ fill, width, height }) {
	return (
		<svg
			width={width || '44'}
			height={height || '44'}
			viewBox="0 0 44 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="44" height="44" rx="5" fill="#F9F9F9" />
			<path
				d="M18 12.666a1.333 1.333 0 1 0 0 2.667 
        1.333 1.333 0 0 0 0-2.667zm-3.773 0a4.001 
        4.001 0 0 1 7.547 0h9.56a1.333 1.333 0 0 1 0 2.667h-9.56a4.001 
        4.001 0 0 1-7.547 0h-1.56a1.334 1.334 0 0 1 0-2.667h1.56zm11.774 
        8a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667zm-3.774 0a4.001 
        4.001 0 0 1 7.547 0h1.56a1.333 1.333 0 0 1 0 2.667h-1.56a4.002 
        4.002 0 0 1-7.547 0h-9.56a1.334 1.334 0 0 1 0-2.667h9.56zm-4.226 8a1.333 
        1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667zm-3.774 0a4.001 4.001 0 0 1 7.547 
        0h9.56a1.333 1.333 0 0 1 0 2.667h-9.56a4.002 4.002 0 0 1-7.547 0h-1.56a1.334 1.334 0 0 1 0-2.667h1.56z"
				fill={fill || '#5568D0'}
			/>
		</svg>
	);
}

IconFilter.propTypes = {
	fill: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconFilter.defaultProps = {
	fill: '#5568D0',
	width: '44',
	height: '44',
};

export default IconFilter;
