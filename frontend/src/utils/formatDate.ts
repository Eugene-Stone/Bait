export function formatDate(value: string | Date) {
	const date = new Date(value);
	// 2. Форматируем с помощью Intl
	const formatter = new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		// hour: '2-digit',
		// minute: '2-digit',
	});

	const parts = formatter.formatToParts(date);
	// console.log('date parts ', parts);

	const formattedDate = formatter.format(date);

	return formattedDate;
}

// type DateFormatOptions = Intl.DateTimeFormatOptions;

// export function formatDate(
// 	value: string | Date,
// 	options: DateFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' },
// 	locale = 'ru-RU',
// ): string {
// 	const date = typeof value === 'string' ? new Date(value) : value;

// 	if (isNaN(date.getTime())) {
// 		return ''; // Защита от Invalid Date
// 	}

// 	return new Intl.DateTimeFormat(locale, options).format(date);
// }
