import PropTypes from 'prop-types';
import styles from './CarWashContacts.module.css';
import formatSchedule from '../../utils/formatSchedule';
import formatLink from '../../utils/formatLink';
import PhoneIcon from '../UI/icons/PhoneIcon';
import WebsiteIcon from '../UI/icons/WebsiteIcon';

function CarWashContacts({ contacts, schedule }) {
	return (
		<div className={styles.container}>
			{contacts.phone && (
				<div className={styles.info}>
					<h2 className={styles.header}>Контакты</h2>
					<PhoneIcon />
					<p className={styles.text}>
						<a className={styles.link} href={`tel:${contacts.phone}`}>
							{contacts.phone}
						</a>
					</p>
				</div>
			)}
			{schedule && schedule.day_of_week && (
				<div className={styles.info}>
					<h2 className={styles.header}>График работы</h2>
					<p className={styles.text}>{formatSchedule(schedule.day_of_week)}</p>
				</div>
			)}
			{contacts.website && (
				<div className={styles.info}>
					<h2 className={styles.header}>Сайт</h2>
					<WebsiteIcon />
					<p className={styles.text}>
						<a className={styles.link} href={contacts.website}>
							{formatLink(contacts.website)}
						</a>
					</p>
				</div>
			)}
		</div>
	);
}

CarWashContacts.propTypes = {
	contacts: PropTypes.shape({
		address: PropTypes.string.isRequired,
		email: PropTypes.string,
		phone: PropTypes.string,
		website: PropTypes.string,
	}).isRequired,
	schedule: PropTypes.shape({
		day_of_week: PropTypes.arrayOf(PropTypes.string),
		opening_time: PropTypes.string,
		closing_time: PropTypes.string,
		open_until_list: PropTypes.string,
	}),
};

export default CarWashContacts;
