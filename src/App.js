import Router from 'src/router';
import Layout from 'src/components/layout';
import Search from 'src/components/search';
import { DataProvider } from 'src/store/context';

const App = () => {
	return (
		<DataProvider>
			<Layout>
				<Search />
				<Router />
			</Layout>
		</DataProvider>
	);
};

export default App;
