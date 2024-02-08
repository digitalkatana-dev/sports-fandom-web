import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import Auth from './features/Auth';
import Hub from './features/Hub';
import Baseball from './features/Baseball';
import Basketball from './features/Basketball';
import Football from './features/Football';
import Hockey from './features/Hockey';
import Profile from './features/Profile';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/'>
					<Route index element={<Auth />} />
					<Route
						path='hub'
						element={
							<ProtectedRoute element={<MainLayout children={<Hub />} />} />
						}
					/>
					<Route
						path='football'
						element={
							<ProtectedRoute
								element={<MainLayout children={<Football />} />}
							/>
						}
					/>
					<Route
						path='basketball'
						element={
							<ProtectedRoute
								element={<MainLayout children={<Basketball />} />}
							/>
						}
					/>
					<Route
						path='baseball'
						element={
							<ProtectedRoute
								element={<MainLayout children={<Baseball />} />}
							/>
						}
					/>
					<Route
						path='hockey'
						element={
							<ProtectedRoute element={<MainLayout children={<Hockey />} />} />
						}
					/>
					<Route
						path='Profile'
						element={
							<ProtectedRoute element={<MainLayout children={<Profile />} />} />
						}
					/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
