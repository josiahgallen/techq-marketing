/* global React, $ */

import CarouselOverlay from './carouselOverlay';
import ListTile from './listTile';
import { listTiles, blurbs, carouselImages } from '../data/copy';
import { getImagePath } from '../utils';

const Home = React.createClass({

	componentWillMount() {
		$(document).ready(() => {
			console.log('runnin');//eslint-disable-line
			const $carousel = $('.carousel-slider.carousel');
			$carousel.carousel({ full_width: true });
			this.changeCarousel = setInterval(() => {
				$carousel.carousel('next');
			}, 10000);
		});
	},

	componentWillUnmount() {
		clearInterval(this.changeCarousel);
	},

	_getCarouselImages() {
		return carouselImages.map((img, index) => {
			const path = getImagePath(img);
			return <div key={`cb${index}`} className="carousel-item"><img src={path}/></div>;
		});
	},

	_getCarouselLists() {
		return Object.keys(listTiles).map((prop, index) => {
			return (
				<div key={`lt${index}`} className="col s4">
					<ListTile title={prop} list={listTiles[prop]}/>
				</div>
			);
		});
	},

	render() {
		return (
			<div>
				<div className="carousel carousel-slider">
					<CarouselOverlay/>
					{this._getCarouselImages()}
				</div>
				<div className="custom-container">
					<div className="row large-copy">
						<h4 className="section-header s12">Marketing &amp; Business Development for Tech Companies</h4>
						<p className="col s12">
							{blurbs.one}
						</p>
						<div className="container">
							{this._getCarouselLists()}
						</div>
						<p className="col s12">
							{blurbs.two}
						</p>
					</div>
				</div>
			</div>
		);
	}
});

export default Home;
