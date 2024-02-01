import PropTypes from 'prop-types';
import styles from './theAdvancedSection.module.css';
import creditcard from '../../assets/creditcard.svg';
import checkmark from '../../assets/checkmark.svg';
// import certificate from '../../assets/certificate.svg';
import couch from '../../assets/couch.svg';
import discount from '../../assets/discount.svg';
// import wifi from '../../assets/wifi.svg';

function TheAdvancedSection({ payment, promotions, restRoom }) {
	// закомментированы не реализованные на бэке поля

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.left}>
					<img
						src={creditcard}
						className={styles.icon}
						alt="Иконка способа оплаты"
						title="Иконка способа оплаты"
					/>
					<p className={styles.text}>Способы оплаты</p>
				</div>
				<div className={styles.right}>
					{payment ? (
						<p className={styles.text}>{payment?.join('/')}</p>
					) : (
						<p className={styles.text}>Услуг не найдено</p>
					)}
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.left}>
					<img
						src={discount}
						className={styles.icon}
						alt="Иконка акции"
						title="Иконка акции"
					/>
					<p className={styles.text}>Акции</p>
				</div>
				<div className={styles.right}>
					{promotions?.length > 0 ? (
						promotions.map((promotion) => (
							<p key={promotion} className={styles.text}>
								{promotion}
							</p>
						))
					) : (
						<p className={styles.text}>Услуг не найдено</p>
					)}
				</div>
			</div>
			{/* <div className={styles.item}>
				<div className={styles.left}>
					<img
						src={certificate}
						className={styles.icon}
						alt="Иконка сертификата"
						title="Иконка сертификата"
					/>
					<p className={styles.text}>Сертификаты</p>
				</div>
				<div className={styles.right}>
					<a href="/" download="" className={styles.certificate}>
						Сертификат соответствия.JPEG
					</a>
				</div>
			</div> */}
			<div className={styles.item}>
				<div className={styles.left}>
					<img
						src={couch}
						className={styles.icon}
						alt="Иконка комнаты отдыха"
						title="Иконка комнаты отдыха"
					/>
					<p className={styles.text}>Комната отдыха</p>
				</div>
				<div className={styles.right}>
					{restRoom ? (
						<img src={checkmark} className={styles.icon} alt="Галочка" />
					) : (
						<p className={styles.text}>Услуг не найдено</p>
					)}
				</div>
			</div>
			{/* <div className={styles.item}>
				<div className={styles.left}>
					<img src={wifi} alt="Иконка Wi-Fi" title="Иконка Wi-Fi" />
					<p className={styles.text}>Wi-Fi</p>
				</div>
				<div className={styles.right}>
					{wiFi === true ? (
						<img src={checkmark} className={styles.icon} alt="Галочка" />
					) : (
						<p className={styles.text}>Услуг не найдено</p>
					)}
				</div>
			</div> */}
		</div>
	);
}

TheAdvancedSection.propTypes = {
	payment: PropTypes.arrayOf(PropTypes.string),
	promotions: PropTypes.arrayOf(PropTypes.string),
	restRoom: PropTypes.bool,
};

export default TheAdvancedSection;
