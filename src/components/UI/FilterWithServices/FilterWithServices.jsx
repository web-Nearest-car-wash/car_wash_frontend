import PropTypes from 'prop-types';
import styles from './FilterWithServices.module.css';
import ServiceButton from '../ServiceButton/ServiceButton';

function FilterWithServices({ title }) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.filters}>
				{/* {
          services.map((service) => (
            <ServiceButton key={service.index} textButton={service.name} />
          ))
        } */}
				<ServiceButton textButton="ручная" />
			</div>
		</div>
	);
}

FilterWithServices.propTypes = {
	title: PropTypes.string,
};

export default FilterWithServices;
