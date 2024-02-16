import React from 'react';
import SendButton from './SendButton';

export default {
	title: 'UI/SendButton',
	component: SendButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		textButton: {
			type: 'string',
			description: 'Текст',
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

const Template = (arg) => <SendButton {...arg} />;

export const Default = Template.bind({});
