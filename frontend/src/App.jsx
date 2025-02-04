
import './assets/Styles/main.scss'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import HomePage from './Pages/HomePage'
import CreatePost from './Components/CreatePost'
import { PostProvider } from './Context/PostContext'
import '../src/assets/Styles/main.scss' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

return (
	<PostProvider>
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<SignupPage/>}></Route>
				<Route path='/createpost' element={<CreatePost/>}></Route>
				<Route path='/Home' element={<HomePage/>}></Route>
				<Route path='/login' element={<LoginPage/>}></Route>
				<Route path='/' element={<LoginPage/>}></Route>
			</Routes>
		</BrowserRouter>
	</PostProvider>
	)
}

export default App
