/* global React */

import { carouselLists } from '../data/copy';
import CarouselCopy from './carouselCopy';

const CarouselOverlay = React.createClass({

	render() {
		const { two, three, four } = carouselLists;
		return (
			<div id="carousel-row-overlay" className="row carousel-fixed-item">
				<div className="col s12 m6 l3">
					<div className="carousel-overlay info-box">
						<h5 className="info-box-header">Our Mission</h5>
						<p className="blurb">
							To help technology companies to achieve <span className="emphasis-words">revenue</span>,
							<span className="emphasis-words"> profit</span>, and <span className="emphasis-words">business growth </span>
							by providing marketing and business development services.
						</p>
					</div>
				</div>
				<div className="col s12 m6 l3">
					<CarouselCopy/>
				</div>
				<div className="col s12 m6 l3">
					<CarouselCopy data={three}/>
				</div>
				<div className="col s12 m6 l3">
					<CarouselCopy/>
				</div>
				<div className="col s12 m6 l3">
					<CarouselCopy/>
				</div>
				<div className="col s12 m6 l3">
					<CarouselCopy data={two}/>
				</div>
				<div className="col s12 m6 l3">
					<CarouselCopy/>
				</div>
				<div className="col s12 m6 l3">
					<CarouselCopy data={four}/>
				</div>
			</div>
		);
	}
});

export default CarouselOverlay;
