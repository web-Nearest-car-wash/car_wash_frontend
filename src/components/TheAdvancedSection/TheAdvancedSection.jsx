import React from 'react';
import PromotionItem from '../PromotionItem/PromotionItem';
import styles from './theAdvancedSection.module.css';
import creditcard from '../../assets/creditcard.svg';
import checkmark from '../../assets/checkmark.svg';
import certificate from '../../assets/certificate.svg';
import check from '../../assets/check.svg';
import couch from '../../assets/couch.svg';
import discount from '../../assets/discount.svg';
import giftCard from '../../assets/gift-card.svg';
import safety from '../../assets/safety.svg';
import tablerDisabled from '../../assets/tabler_disabled.svg';
import wifi from '../../assets/wifi.svg';

export default function TheAdvancedSection() {
	const promotions = [
		{ id: 1, text: '-10% на первую мойку' },
		{ id: 2, text: 'Скидка за приведенного друга' },
		{ id: 3, text: 'Скидка 50% в День Рождения' },
	];

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.left}>
					<img
						src={creditcard}
						className={styles.icon}
						alt="Иконка способа оплаты"
					/>
					<p className={styles.text}>Способы оплаты</p>
				</div>
				<div className={styles.right}>
					<p className={styles.text}>
						карта / наличные / QR-код /банковский перевод
					</p>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.left}>
					<img src={discount} className={styles.icon} alt="Иконка акции" />
					<p className={styles.text}>Акции</p>
				</div>
				<div className={styles.right}>
					{promotions.map((promotion) => (
						<PromotionItem key={promotion.id} text={promotion.text} />
					))}
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.left}>
					<img
						src={certificate}
						className={styles.icon}
						alt="Иконка документов"
					/>
					<p className={styles.text}>Документы</p>
				</div>
				<div className={styles.right}>
					<a href="/" download="" className={styles.certificate}>
						Сертификат качества.PDF
					</a>
					<a href="/" download="" className={styles.certificate}>
						Сертификат соответствия.JPEG
					</a>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.left}>
					<img
						src={couch}
						className={styles.icon}
						alt="Иконка комнаты отдыха"
					/>
					<p className={styles.text}>Комната отдыха</p>
				</div>
				<div className={styles.right}>
					<img src={checkmark} className={styles.icon} alt="Галочка" />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.left}>
					<img src={check} alt="Иконка чека дл юр.лиц" />
					<p className={styles.text}>Чеки дл юр.лиц</p>
				</div>
				<div className={styles.right}>
					<img src={checkmark} className={styles.icon} alt="Галочка" />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.left}>
					<img src={wifi} alt="Иконка Wi-Fi" />
					<p className={styles.text}>Wi-Fi</p>
				</div>
				<div className={styles.right}>
					<img src={checkmark} className={styles.icon} alt="Галочка" />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.left}>
					<img src={safety} alt="Иконка гарантии" />
					<p className={styles.text}>Гарантия</p>
				</div>
				<div className={styles.right}>
					<img src={checkmark} className={styles.icon} alt="Галочка" />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.left}>
					<img src={giftCard} alt="Иконка подарочного сертификата" />
					<p className={styles.text}>Подарочный сертификат</p>
				</div>
				<div className={styles.right}>
					<img src={checkmark} className={styles.icon} alt="Галочка" />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.left}>
					<img
						src={tablerDisabled}
						alt="Иконка доступности для людей с инвалидностью"
					/>
					<p className={styles.text}>Доступно для людей с инвалидностью</p>
				</div>
				<div className={styles.right}>
					<img src={checkmark} className={styles.icon} alt="Галочка" />
				</div>
			</div>
		</div>
	);
}
