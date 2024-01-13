import {
	GeolocationControl,
	Map,
	Placemark,
	TrafficControl,
	ZoomControl,
} from '@pbe/react-yandex-maps';
import { useGeolocated } from 'react-geolocated';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCarWashes,
	setCurrentCarWash,
} from '../../store/carWashes/carWashes-slice';
import IconLocation from '../../assets/location.png';

function YMap() {
	const { coords } = useGeolocated({
		positionOptions: {
			enableHighAccuracy: true,
		},
		userDecisionTimeout: 5000,
	});

	const [geoData, setGeoData] = useState(null);
	const dispatch = useDispatch();
	const { listCarWashes, loading } = useSelector(selectCarWashes);

	const getGeolocation = (ymaps) => {
		ymaps.geolocation
			.get({
				provider: 'yandex',
				autoReverseGeocode: true,
			})
			.then((result) => {
				setGeoData(result.geoObjects.get(0).properties.get('metaDataProperty'));
			});
	};

	const coordinates =
		geoData?.GeocoderMetaData.text === 'Москва'
			? coords
			: { latitude: 55.76, longitude: 37.64 };

	return (
		coordinates && (
			<Map
				defaultState={{
					center: [coordinates.latitude, coordinates.longitude],
					zoom: 13,
				}}
				style={{ width: '100%', height: '100%' }}
				onLoad={(ymaps) => getGeolocation(ymaps)}
				modules={['geolocation']}
			>
				<GeolocationControl options={{ float: 'left' }} />
				<TrafficControl options={{ float: 'right' }} />
				<ZoomControl />

				<Placemark geometry={[coordinates.latitude, coordinates.longitude]} />
				{!loading &&
					listCarWashes.map((carWash) => (
						<Placemark
							key={carWash.id}
							geometry={[carWash.latitude, carWash.longitude]}
							onClick={() => console.log(carWash.name)}
							onMouseEnter={() =>
								dispatch(
									setCurrentCarWash({ id: carWash.id, name: carWash.name })
								)
							}
							options={{
								iconLayout: 'default#image',
								iconImageHref: IconLocation,
								iconImageSize: [32, 32],
							}}
						/>
					))}
			</Map>
		)
	);
}

export default memo(YMap);
