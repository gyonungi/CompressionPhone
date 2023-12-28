import { FC, useState } from 'react'
import vector from '../../../public/Vector.jpg'
import { TypePhone, phone } from '../../assets/phone'
import '../../pages/comprasion.scss'
import './card.scss'
interface CardProps {
	item: TypePhone
	phones: TypePhone[]
	setPhones: React.Dispatch<React.SetStateAction<TypePhone[]>>
}

const Card: FC<CardProps> = ({ item, phones, setPhones }) => {
	const [searchValue, setSearchValue] = useState('')
	const [selectedPhone, setSelectedPhone] = useState<number | null>(null)

	const handleReplacePhone = (
		currentId: number,
		replacingPhoneId: number
	): void => {
		const currentIndex = phones.findIndex(phone => phone.id === currentId)
		const replaceIndex = phones.findIndex(
			phone => phone.id === replacingPhoneId
		)

		if (currentIndex !== -1 && replaceIndex !== -1) {
			const newPhones = [...phones]
			newPhones[currentIndex] = phones[replaceIndex]
			setPhones(newPhones)
		}
	}

	const handleModalOpen = (phoneId: number): void => {
		setSelectedPhone(phoneId)
	}

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	const filterItems = phone
		?.filter(item =>
			item.name.toLowerCase().includes(searchValue.toLowerCase())
		)
		.filter(phone => phone.id !== selectedPhone)
		.map(item => (
			<div key={item.id}>
				<button
					className='card__buttons'
					onClick={() => {
						if (typeof selectedPhone === 'number') {
							handleReplacePhone(selectedPhone, item.id)
						} else {
							console.log('error')
						}
					}}
				>
					<img width={20} height={20} src={vector} />
				</button>
				<img width={23} height={50} src={item.imageUrl} alt='phone' />
				{item.name}
			</div>
		))

	return (
		<>
			<div className='card'>
				<div className='comprasion_main__right'>
					<div className='card__block'>
						<img src={item.imageUrl} />
						<div
							className='card__pointer'
							onClick={() => handleModalOpen(item.id)}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='27'
								viewBox='0 0 30 27'
								fill='none'
							>
								<path
									d='M24.375 10.125L15 18.5625L5.625 10.125'
									stroke='#0D5ADC'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					</div>
				</div>
				<p>{item.name}</p>
			</div>
			{selectedPhone !== null && (
				<div className='cardPopup'>
					<div className='cardPopup__inputBlock'>
						<input
							placeholder='Поиск'
							value={searchValue}
							onChange={handleInput}
							type='text'
							className='cardPopup__input'
						/>
					</div>
					<div className='cardPopup__card'>{filterItems}</div>
				</div>
			)}
		</>
	)
}

export default Card
