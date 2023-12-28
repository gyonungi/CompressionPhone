import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header.tsx'
import Comparison from './pages/Comparison.tsx'

function App() {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<Routes>
					<Route path='/comprasion' element={<Comparison />} />
				</Routes>
			</div>
		</>
	)
}

export default App
