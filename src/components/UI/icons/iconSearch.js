import PropTypes from 'prop-types';

function UserIcon({ fill, width, height, className }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '24'}
			height={height || '24'}
			viewBox="0 0 24 24"
			fill="none"
			className={className}
		>
			<g clipPath="url(#clip0_10_67)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M10.4998 2C9.14436 2.00012 7.80863 2.32436 6.60402 2.94569C5.39941 3.56702 4.36086 4.46742 3.575 5.57175C2.78914 6.67609 2.27878 7.95235 2.08647 9.29404C1.89417 10.6357 2.02551 12.004 2.46954 13.2846C2.91357 14.5652 3.65741 15.7211 4.639 16.6557C5.62059 17.5904 6.81147 18.2768 8.11228 18.6576C9.41309 19.0384 10.7861 19.1026 12.1168 18.8449C13.4475 18.5872 14.6972 18.015 15.7618 17.176L19.4138 20.828C19.6024 21.0102 19.855 21.111 20.1172 21.1087C20.3794 21.1064 20.6302 21.0012 20.8156 20.8158C21.001 20.6304 21.1062 20.3796 21.1084 20.1174C21.1107 19.8552 21.0099 19.6026 20.8278 19.414L17.1758 15.762C18.1638 14.5086 18.7789 13.0024 18.9509 11.4157C19.1228 9.82905 18.8446 8.22602 18.148 6.79009C17.4514 5.35417 16.3646 4.14336 15.0121 3.29623C13.6595 2.44911 12.0957 1.99989 10.4998 2ZM3.99977 10.5C3.99977 8.77609 4.68458 7.12279 5.90357 5.90381C7.12256 4.68482 8.77586 4 10.4998 4C12.2237 4 13.877 4.68482 15.096 5.90381C16.3149 7.12279 16.9998 8.77609 16.9998 10.5C16.9998 12.2239 16.3149 13.8772 15.096 15.0962C13.877 16.3152 12.2237 17 10.4998 17C8.77586 17 7.12256 16.3152 5.90357 15.0962C4.68458 13.8772 3.99977 12.2239 3.99977 10.5Z"
					fill={fill || '#696464'}
				/>
			</g>
			<defs>
				<clipPath id="clip0_10_67">
					<rect width="24" height="24" rx="5" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

UserIcon.propTypes = {
	fill: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	className: PropTypes.string,
};

UserIcon.defaultProps = {
	fill: '#696464',
	width: '24',
	height: '24',
	className: '',
};

export default UserIcon;
