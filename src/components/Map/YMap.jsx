import {
	GeolocationControl,
	Map,
	Placemark,
	TrafficControl,
	ZoomControl,
} from '@pbe/react-yandex-maps';
import { useGeolocated } from 'react-geolocated';
import { memo, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchListCarWash,
	selectCarWashes,
	setCurrentCarWash,
	setCurrentCarWashOnMap,
} from '../../store/carWashes/carWashes-slice';
import IconLocation from '../../assets/location.png';
import IconLocationActive from '../../assets/locationActive.png';

function YMap() {
	const { coords } = useGeolocated({
		positionOptions: {
			enableHighAccuracy: true,
		},
		userDecisionTimeout: 5000,
	});

	const navigate = useNavigate();
	const [geoData, setGeoData] = useState(null);
	const dispatch = useDispatch();
	const { listCarWashes, loading, currentCarWashOnMap } =
		useSelector(selectCarWashes);

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

	const coordinates = useMemo(
		() =>
			geoData?.GeocoderMetaData.text === 'Москва'
				? { latitude: coords.latitude, longitude: coords.longitude }
				: { latitude: 55.756379, longitude: 37.623309 },
		[coords, geoData?.GeocoderMetaData.text]
	);

	useEffect(() => {
		dispatch(fetchListCarWash(coordinates));
	}, [dispatch, coordinates]);

	return (
		coordinates && (
			<Map
				defaultState={{
					center: [coordinates.latitude, coordinates.longitude],
					zoom: 13,
				}}
				style={{ width: '100%', height: '100%', position: 'relative' }}
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
							onClick={() => {
								navigate(`/carwashes/${carWash.id}`);
							}}
							onMouseEnter={() => {
								dispatch(
									setCurrentCarWash({ id: carWash.id, name: carWash.name })
								);
								dispatch(
									setCurrentCarWashOnMap({
										id: carWash.id,
										name: carWash.name,
									})
								);
							}}
							options={{
								iconLayout: 'default#image',
								iconImageHref:
									currentCarWashOnMap?.id === carWash.id
										? IconLocationActive
										: IconLocation,
								iconImageSize: [32, 32],
							}}
						/>
					))}
				{geoData?.GeocoderMetaData.text !== 'Москва' && (
					<p
						style={{
							position: 'absolute',
							left: '100px',
							top: '10px',
							zIndex: 100,
							margin: 0,
							maxWidth: '800px',
							color: '#5568d0',
							background: '#cbd9d8',
							boxShadow: '-2px 2px 13px 13px #cbd9d8',
							fontSize: '16px',
							fontWeight: 600,
							lineHeight: '21px',
						}}
					>
						Вы находитесь не в Москве либо не удалось получить данные о вашей
						геолокации. К сожаленью наш сервис работает пока только на
						территории Москвы, поэтому для Вас установлена геолокация по
						умолчанию.
					</p>
				)}
			</Map>
		)
	);
}

export default memo(YMap);
