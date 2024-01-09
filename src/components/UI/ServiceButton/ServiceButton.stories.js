import React from 'react';
import ServiceButton from './ServiceButton';

export default {
	title: 'UI/ServiceButton',
	component: ServiceButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		textButton: {
			type: 'string',
			description: 'Текст услуги',
		},
		active: {
			type: 'boolean',
			description: 'Переключает кнопку с активной на неактивную',
		},
		onClick: {
			type: 'func',
			description: 'Обработчик клика',
		},
	},
};

const Template = (arg) => <ServiceButton {...arg} />;

export const Default = Template.bind({});
