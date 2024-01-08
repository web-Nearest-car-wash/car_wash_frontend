import React from 'react';
import SortSelect from './SortSelect';

export default {
	title: 'UI/SortSelect',
	component: SortSelect,
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};

const Template = () => <SortSelect />;

export const Default = Template.bind({});
Default.args = {
	options: ['По близости', 'По рейтингу', 'По цене'],
	defaultValue: 'По близости',
};
