import React from 'react';
import PropTypes from 'prop-types';

function IconSwitchOff({ width, height, dotFill, backgroundFill }) {
	return (
		<svg
			width={width || '51'}
			height={height || '31'}
			viewBox="0 0 51 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_436_2884)">
				<rect
					y="0.166016"
					width="51"
					height="31"
					rx="15.5"
					fill={backgroundFill || '#E9E9EA'}
				/>
				<g filter="url(#filter0_d_436_2884)">
					<rect
						x="2"
						y="2.16602"
						width="27"
						height="27"
						rx="13.5"
						fill={dotFill || 'white'}
					/>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_d_436_2884"
					x="-5"
					y="-1.83398"
					width="41"
					height="41"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="3" />
					<feGaussianBlur stdDeviation="3.5" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_436_2884"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_436_2884"
						result="shape"
					/>
				</filter>
				<clipPath id="clip0_436_2884">
					<rect y="0.166016" width="51" height="31" rx="15.5" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

IconSwitchOff.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	backgroundFill: PropTypes.string,
	dotFill: PropTypes.string,
};

IconSwitchOff.defaultProps = {
	width: '51',
	height: '31',
	backgroundFill: '#E9E9EA',
	dotFill: 'white',
};

export default IconSwitchOff;
