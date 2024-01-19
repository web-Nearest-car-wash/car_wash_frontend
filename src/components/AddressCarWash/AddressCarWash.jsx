import PropTypes from 'prop-types';
import { memo } from 'react';
import { Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import styles from './AddressCarWash.module.css';
import IconLocationActive from '../../assets/locationActive.png';
import IconMetro from '../UI/icons/IconMetro';

function AddressCarWash({ coords, address, metro }) {
	return (
		<div className={styles.container}>
			<div className={styles.headingContainer}>
				<h3 className={styles.heading}>Адрес</h3>
				<div className={styles.addressContainer}>
					<p className={styles.address}>
						<IconMetro />
						&nbsp;
						{metro}
					</p>
					<p className={styles.address}>{address}</p>
				</div>
			</div>
			<div className={styles.mapContainer}>
				<Map
					defaultState={{
						center: [coords.latitude, coords.longitude],
						zoom: 17,
					}}
					style={{ width: '100%', height: '100%' }}
				>
					<ZoomControl />
					<Placemark
						geometry={[coords.latitude, coords.longitude]}
						options={{
							iconLayout: 'default#image',
							iconImageHref: IconLocationActive,
							iconImageSize: [32, 32],
						}}
					/>
				</Map>
			</div>
		</div>
	);
}

AddressCarWash.propTypes = {
	coords: PropTypes.shape({
		latitude: PropTypes.number,
		longitude: PropTypes.number,
	}).isRequired,
	address: PropTypes.string.isRequired,
	metro: PropTypes.string.isRequired,
};

export default memo(AddressCarWash);
