import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Hub from './features/Hub';
import Baseball from './features/Baseball';
import Basketball from './features/Basketball';
import Football from './features/Football';
import Hockey from './features/Hockey';
import './app.scss';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/'>
					<Route index element={<MainLayout children={<Hub />} />} />
					<Route
						path='football'
						element={<MainLayout children={<Football />} />}
					/>
					<Route
						path='basketball'
						element={<MainLayout children={<Basketball />} />}
					/>
					<Route
						path='baseball'
						element={<MainLayout children={<Baseball />} />}
					/>
					<Route path='hockey' element={<MainLayout children={<Hockey />} />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
