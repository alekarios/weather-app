import { Route, Routes, BrowserRouter } from 'react-router-dom';
import pagesConfig from 'src/data/pagesConfig';

const Router = () => {
	const pageRoutes = pagesConfig.map(({ path, title, element }) => {
		return (
			<Route
				key={title}
				path={`/${path}`}
				element={element}
			/>
		);
	});

	return (
		<BrowserRouter>
			<Routes>{pageRoutes}</Routes>
		</BrowserRouter>
	);
};

export default Router;
