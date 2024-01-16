// PromotionItem.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../TheAdvancedSection/theAdvancedSection.module.css';

export default function PromotionItem({ text }) {
	return (
		<div className={styles.textPromotion}>
			<p className={styles.text}>{text}</p>
		</div>
	);
}

PromotionItem.propTypes = {
	text: PropTypes.string.isRequired,
};
