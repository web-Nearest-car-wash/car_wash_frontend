function formatSchedule(days) {
	const weekDays = [
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
		'Воскресенье',
	];
	const formatedWeekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	if (days.length === 7) {
		return 'Пн-Вс';
	}
	const sortedDays = days
		.map((day) => weekDays.indexOf(day))
		.sort((a, b) => a - b);
	const firstDay = formatedWeekDays[sortedDays[0]];
	const lastDay = formatedWeekDays[sortedDays[sortedDays.length - 1]];
	return `${firstDay}-${lastDay}`;
}

export default formatSchedule;
