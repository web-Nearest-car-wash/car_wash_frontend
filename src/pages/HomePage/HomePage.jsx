// import Map from "../../components/Map/Map";
import YMap from '../../components/Map/YMap';
import CardCardWash from '../../components/CardCarWash/CardCarWash';

function HomePage() {
	return (
		<section style={{
			width: 1440, minHeight: 760, display: 'flex', justifyContent: 'space-between', columnGap: '16px', backgroundColor: '#ECECEC', padding: '0 40px', boxSizing: 'border-box'
		}}>
			< div >
				<CardCardWash />
				<CardCardWash />
				<CardCardWash />
				<CardCardWash />
			</div>
			<YMap />
		</ section>
	);
}

export default HomePage;
