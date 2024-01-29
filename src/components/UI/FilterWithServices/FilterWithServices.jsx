import PropTypes from 'prop-types';
import styles from './FilterWithServices.module.css';
import ServiceButton from '../ServiceButton/ServiceButton';

function FilterWithServices({ title, services, onClick }) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.filters}>
				{services.map((service) => (
					<ServiceButton
						key={service.name}
						textButton={service.name.toLowerCase()}
						onClick={onClick}
					/>
				))}
			</div>
		</div>
	);
}

FilterWithServices.propTypes = {
	onClick: PropTypes.func,
	title: PropTypes.string,
	services: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default FilterWithServices;
