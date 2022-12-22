import Router from 'src/router';
import Layout from 'src/components/layout';
import Search from 'src/components/search'

const App = () => {
	return (
		<Layout>
			<Search/>
			<Router />
		</Layout>
	);
};

export default App;
