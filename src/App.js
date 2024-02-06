import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import MainLayout from './layouts/MainLayout';
import Hub from './features/Hub';
import './app.scss';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/'>
					<Route index element={<MainLayout children={<Hub />} />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
