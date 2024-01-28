import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
	<div className={styles.loaderContainer}>
		<div className={styles.spinner} />
	</div>
);

export default Loader;
