import React from 'react';
import ServiceCheckbox from './ServiceCheckbox';

export default {
	title: 'UI/ServiceCheckbox',
	component: ServiceCheckbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		checked: {
			type: 'boolean',
			description: 'Состояние переключателя',
		},
		onChange: {
			type: 'func',
			description: 'Функция переключения состояния',
		},
	},
};

const Template = (arg) => <ServiceCheckbox {...arg} />;

export const Default = Template.bind({});
