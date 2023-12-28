import { FC } from 'react'
import { phone } from '../../assets/phone'

const CardTable: FC = () => {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Производитель</th>
					</tr>
					<tr>
						<th>год релиза</th>
					</tr>
					<tr>
						<th>Диагональ экрана (дюйм)</th>
					</tr>
					<tr>
						<th>Страна-производитель</th>
					</tr>
					<tr>
						<th>Объем памяти</th>
					</tr>
					<tr>
						<th>Частота обновления экрана</th>
					</tr>
					<tr>
						<th>NFC</th>
					</tr>
					<tr>
						<th>Поддержка eSIM</th>
					</tr>
					<tr>
						<th>Поддержка беспроводной зарядки</th>
					</tr>
					<tr>
						<th>Стоимость</th>
					</tr>
				</thead>
				<tbody>
					{phone.map(item => (
						<tr key={item.id}>
							<tr>
								<td>{item.producer}</td>
							</tr>
							<tr>
								<td>{item.year}</td>
							</tr>
							<tr>
								<td>{item.screen}</td>
							</tr>
							<tr>
								<td>{item.country}</td>
							</tr>
							<tr>
								<td>{item.memory}</td>
							</tr>
							<tr>
								<td>{item.hertz}</td>
							</tr>
							<tr>
								<td>{item.NFC}</td>
							</tr>
							<tr>
								<td>{item.ESIM}</td>
							</tr>
							<tr>
								<td>{item.charg}</td>
							</tr>
							<tr>
								<td>{item.price}</td>
							</tr>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default CardTable
