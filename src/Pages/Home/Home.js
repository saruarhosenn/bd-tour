import PaymentsSection from '../PaymentsSection/PaymentsSection';
import SuccessStories from '../SuccessStories/SuccessStories';
import CounterUp from './CounterUp/CounterUp';
import Hero from './Hero/Hero';
import Packages from './Packages/Packages';

const Home = () => {
	return (
		<main>
			<Hero />
			<Packages />
			<CounterUp />
			<SuccessStories />
			<PaymentsSection />
		</main>
	);
};

export default Home;