import WeatherProvider from './weatherProvider';
import SliderProvider from './sliderProvider';

const compose = (providers) => {
	return providers.reduce((Prev, Curr) => ({ children }) => (
		<Prev>
			<Curr>{children}</Curr>
		</Prev>
	));
};

const ComposedProviders = compose([WeatherProvider, SliderProvider]);
export default ComposedProviders;
