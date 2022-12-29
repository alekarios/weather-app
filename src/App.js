import Router from 'src/router';
import Layout from 'src/components/layout';
import Header from 'src/components/header';
import Search from 'src/components/search';
import Slider from 'src/components/slider';
import ComposedProviders from 'src/store/composedProviders';
import CountryForm from 'src/components/countryForm';

const App = () => {
	return (
		<ComposedProviders>
			<Layout>
				<Header />
				<Search />
				<Router />
				<Slider>
					<CountryForm />
				</Slider>
			</Layout>
		</ComposedProviders>
	);
};

export default App;
