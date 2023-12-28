import { useState } from 'react'
import falseCross from '../../public/Subtract.jpg'
import trueCross from '../../public/SubtractT.jpg'
import { TypePhone, phone } from '../assets/phone.ts'
import Card from '../components/card/Card.tsx'

import ReactPaginate from 'react-paginate'
import { columnNames } from '../assets/ColumnName.ts'
import './comprasion.scss'

interface PageChangeEvent {
	selected: number
}

function compareObjects(array: TypePhone[]): string[] {
	const keys = Object.keys(array[0])

	const uniqueValues = keys.map(key => {
		const allValues = new Set(array.map(obj => obj[key]))
		return allValues.size > 1 ? key : null
	})

	return uniqueValues.filter((key): key is string => key !== null)
}
interface PhonesTableProps {
	phones: TypePhone[]
}
const Comparison: React.FC<PhonesTableProps> = () => {
	const [page, setPage] = useState(0)
	const [phones, setPhones] = useState(phone)
	const [showDifferences, setShowDifferences] = useState(false)
	const differentKeys = compareObjects(phones).filter(key => key !== 'id')

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setShowDifferences(event.target.checked)
	}
	const phonePerPage = 3
	const numberOfphoneVistited = page * phonePerPage
	const renderPhones = phones
		.slice(numberOfphoneVistited, numberOfphoneVistited + phonePerPage)
		.map(item => {
			return (
				<>
					<Card
						key={item.id}
						item={item}
						phones={phones}
						setPhones={setPhones}
					/>
				</>
			)
		})
	const checkboxHead = Object.keys(phones[0])
		.filter(
			key =>
				key !== 'id' &&
				key !== 'name' &&
				key !== 'imageUrl' &&
				(!showDifferences || differentKeys.includes(key))
		)
		.map(key => (
			<tr>
				<th key={key}>{columnNames[key as keyof typeof columnNames]}</th>
			</tr>
		))

	const checkPhoneBody = phones
		.slice(numberOfphoneVistited, numberOfphoneVistited + phonePerPage)
		.map((item, index) => (
			<tr key={index}>
				{Object.keys(item)
					.filter(
						key =>
							key !== 'id' &&
							key !== 'name' &&
							key !== 'imageUrl' &&
							(!showDifferences || differentKeys.includes(key))
					)
					.map(key => {
						showDifferences && differentKeys.includes(key)
						return (
							<tr>
								<td key={key}>
									{key === 'NFC' ? (
										item[key] ? (
											<img width={22} height={22} src={trueCross} alt='True' />
										) : (
											<img
												width={22}
												height={22}
												src={falseCross}
												alt='False'
											/>
										)
									) : (
										<></>
									)}
									{key === 'ESIM' ? (
										item[key] ? (
											<img width={22} height={22} src={trueCross} alt='True' />
										) : (
											<img
												width={22}
												height={22}
												src={falseCross}
												alt='False'
											/>
										)
									) : (
										<></>
									)}
									{key === 'charg' ? (
										item[key] ? (
											<img width={22} height={22} src={trueCross} alt='True' />
										) : (
											<img
												width={22}
												height={22}
												src={falseCross}
												alt='False'
											/>
										)
									) : (
										item[key]
									)}
								</td>
							</tr>
						)
					})}
			</tr>
		))

	const changePage = ({ selected }: PageChangeEvent) => {
		setPage(selected)
	}
	const totalPages = Math.ceil(phones.length / phonePerPage)
	return (
		<>
			<div className='content'>
				<div className='comprasion_header'>
					<h1>Смартфоны</h1>
					<div>
						<span> Отобразить товары: </span>
						<ReactPaginate
							pageCount={totalPages}
							onPageChange={changePage}
							activeClassName={'navigationActive'}
						/>
					</div>
				</div>
				<div className='comprasion_main'>
					<div className='comprasion_main__left'>
						<input
							checked={showDifferences}
							onChange={handleCheckboxChange}
							type='checkbox'
							name='myCheckbox'
						/>
						<p>Показать различия</p>
					</div>
					{renderPhones}
				</div>
			</div>
			<div className='info'>
				<table>
					<thead>
						<tr>{checkboxHead}</tr>
					</thead>
					<tbody>{checkPhoneBody}</tbody>
				</table>
			</div>
		</>
	)
}

export default Comparison
