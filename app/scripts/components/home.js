/* global React */

import CarouselOverlay from './carouselOverlay';
import InfoCard from './infoCard';

const Home = React.createClass({

	render() {
		return (
			<div>
				<div className="carousel carousel-slider">
					<CarouselOverlay/>
					<div className="carousel-item" href="#one!"><img src="/app/images/apple-flowers-iphone-desk.jpg"/></div>
					<div className="carousel-item" href="#two!"><img src="/app/images/asian-girl.jpg"/></div>
					<div className="carousel-item" href="#three!"><img src="/app/images/tablet-coffee.jpg"/></div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<InfoCard/>
						</div>
						<div className="col s12 m6">
							<InfoCard/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Home;
