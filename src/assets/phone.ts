export interface TypePhone {
	id: number
	name: string
	imageUrl: string
	producer: string
	year: number
	screen: string
	country: string
	memory: number
	hertz: number
	NFC: boolean
	ESIM: boolean
	charg: boolean
	price: number
	[key: string]: string | number | boolean
}

export const phone: TypePhone[] = [
	{
		id: 0,
		name: 'Apple iPhone 12',
		imageUrl: '../../public/image16.jpg',
		producer: 'Apple',
		year: 2020,
		screen: '6,1',
		country: 'China',
		memory: 128,
		hertz: 60,
		NFC: false,
		ESIM: false,
		charg: true,
		price: 81990,
	},
	{
		id: 1,
		name: 'Xiaomi Mi 11 Lite',
		imageUrl: '../../public/XiaomiMi.jpg',
		producer: 'Xiaomi',
		year: 2021,
		screen: '6,5',
		country: 'China',
		memory: 128,
		hertz: 90,
		NFC: false,
		ESIM: false,
		charg: false,
		price: 27990,
	},
	{
		id: 2,
		name: 'Samsung Galaxy A72',
		imageUrl: '../../public/Sam72.jpg',
		producer: 'Samsung',
		year: 2021,
		screen: '6,7',
		country: 'China',
		memory: 128,
		hertz: 90,
		NFC: false,
		ESIM: false,
		charg: true,
		price: 30990,
	},
	{
		id: 3,
		name: 'Samsung Galaxy A72',
		imageUrl: '../../public/Sam72.jpg',
		producer: 'Xiaomi',
		year: 2021,
		screen: '6,7',
		country: 'China',
		memory: 128,
		hertz: 90,
		NFC: false,
		ESIM: false,
		charg: true,
		price: 30990,
	},
	{
		id: 4,
		name: 'Apple iPhone x',
		imageUrl: '../../public/Sam72.jpg',
		producer: 'Xiaomi',
		year: 2021,
		screen: '6,7',
		country: 'China',
		memory: 128,
		hertz: 90,
		NFC: false,
		ESIM: false,
		charg: true,
		price: 30990,
	},
	{
		id: 5,
		name: 'Xiaomi A72',
		imageUrl: '../../public/Sam72.jpg',
		producer: 'Xiaomi',
		year: 2021,
		screen: '6,7',
		country: 'China',
		memory: 128,
		hertz: 90,
		NFC: false,
		ESIM: false,
		charg: true,
		price: 30990,
	},
]
