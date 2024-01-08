import React from 'react';
import FilterButton from './FilterButton';

export default {
	title: 'UI/FilterButton',
	component: FilterButton,
	tags: ['autodocs'],
	argTypes: {
		numberOfFilters: {
			type: 'number',
			description: 'Показывает количество отмеченных фильтров',
			options: [0, 1, 11],
			control: {
				type: 'inline-radio',
			},
		},
	},
};

const Template = (arg) => <FilterButton {...arg} />;

export const Default = Template.bind({});

// Default.args = {

// }
