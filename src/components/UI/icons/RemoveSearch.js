import PropTypes from 'prop-types';

function RemoveSearch({ fill, width, height }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '14'}
			height={height || '16'}
			viewBox="0 0 14 16"
			fill="none"
		>
			<path
				d="M1.4 15.0823L0 13.6656L5.6 7.99914L0 2.33264L1.4 0.916016L7 6.58251L12.6 0.916016L14 2.33264L8.4 7.99914L14 13.6656L12.6 15.0823L7 9.41576L1.4 15.0823Z"
				fill={fill || '#252525'}
			/>
		</svg>
	);
}

RemoveSearch.propTypes = {
	fill: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RemoveSearch.defaultProps = {
	fill: '#252525',
	width: '14',
	height: '16',
};

export default RemoveSearch;
