export interface TypeColumnNames {
	producer: string
	year: string
	screen: string
	country: string
	memory: string
	hertz: string
	NFC: string
	ESIM: string
	charg: string
	price: string
	[key: string]: string
}
export const columnNames = {
	producer: 'Производитель',
	year: 'год релиза',
	screen: 'Диагональ экрана (дюйм)',
	country: 'Страна-производитель',
	memory: 'Объем памяти',
	hertz: 'Частота обновления экрана',
	NFC: 'NFC',
	ESIM: 'Поддержка eSIM',
	charg: 'Поддержка беспроводной зарядки',
	price: 'Стоимость',
}
