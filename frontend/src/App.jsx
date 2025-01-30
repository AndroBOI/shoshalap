
import './assets/Styles/main.scss'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import '../src/assets/Styles/main.scss' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

return (
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<SignupPage/>}>	</Route>
				<Route path='/login' element={<LoginPage/>}>	</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
