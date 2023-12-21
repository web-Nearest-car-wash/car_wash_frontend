import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';
import UserIcon from '../icons/iconSearch';
import RemoveSearch from '../icons/removeSearch';
import '../../../index.css';

function Search({ query, nightMode, placeholder, onChange, clearInput }) {
	const mode = nightMode ? styles.night : styles.day;

	return (
		<div className={styles.form}>
			<div className={`${styles.wrapper} ${mode}`}>
				<UserIcon className={styles.icon} />
				<input
					type="text"
					id="name"
					name="query"
					className={styles.input}
					placeholder={placeholder}
					onChange={onChange}
					value={query || ''}
				/>
				{query && (
					<button
						className={styles.clear}
						onClick={clearInput}
						aria-label="Очистить поиск"
					>
						<RemoveSearch />
					</button>
				)}
			</div>
		</div>
	);
}

Search.propTypes = {
	query: PropTypes.string,
	nightMode: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	clearInput: PropTypes.func,
};

Search.defaultProps = {
	query: '',
	nightMode: false,
	placeholder: '',
	onChange: () => {},
	clearInput: () => {},
};

export default Search;
