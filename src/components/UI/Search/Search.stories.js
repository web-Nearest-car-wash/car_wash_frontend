import React from 'react';
import Search from './Search';

export default {
	title: 'UI/SearchForm',
	component: Search,
};

const Template = (args) => {
	const [query, setQuery] = React.useState('');

	const handleOnChange = (e) => {
		setQuery(e.target.value);
	};

	const clearInput = () => {
		setQuery('');
	};

	return (
		<Search
			{...args}
			query={query}
			onChange={handleOnChange}
			clearInput={clearInput}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Введите название, адрес или услугу',
	nightMode: false,
};
