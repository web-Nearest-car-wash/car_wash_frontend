import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchCarWashesBySearch } from '../../../store/carWashes/carWashes-slice';
import styles from './Search.module.css';
import IconSearch from '../icons/IconSearch';
import RemoveSearch from '../icons/RemoveSearch';
import '../../../index.css';

function Search({ query, nightMode, placeholder, onChange, clearInput }) {
	const dispatch = useDispatch();

	const handleSearchChange = (value) => {
		onChange(value);
		dispatch(fetchCarWashesBySearch(value));
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSearchChange(query);
		}
	};

	const clearSearchValue = () => {
		clearInput();
		dispatch(fetchCarWashesBySearch(''));
	};

	const mode = nightMode ? styles.night : styles.day;

	return (
		<div className={styles.form}>
			<div className={`${styles.wrapper} ${mode}`}>
				<IconSearch className={styles.icon} />
				<input
					type="text"
					id="name"
					name="query"
					className={styles.input}
					placeholder={placeholder}
					onChange={(e) => onChange(e.target.value)}
					onKeyDown={handleKeyDown}
					value={query || ''}
				/>
				{query && (
					<button
						className={styles.clear}
						onClick={clearSearchValue}
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
