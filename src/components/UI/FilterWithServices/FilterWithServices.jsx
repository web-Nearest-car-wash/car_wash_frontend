import PropTypes from 'prop-types';
import styles from './FilterWithServices.module.css';
import ServiceButton from '../ServiceButton/ServiceButton';

function FilterWithServices({ title, services }) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.filters}>
				{services.map((service) => (
					<ServiceButton textButton={service.name} />
				))}
			</div>
		</div>
	);
}

FilterWithServices.propTypes = {
	title: PropTypes.string,
	services: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default FilterWithServices;
