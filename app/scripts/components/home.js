/* global React, $ */

import ListTile from './listTile';
import { listTiles, blurbs, carouselCopy } from '../data/copy';
import { getImagePath } from '../utils';

const Home = React.createClass({

	componentWillMount() {
		$(document).ready(() => {
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

	_formatCarouselCopy(items) {
		return items.map((item, index) => {
			return <li key={index}><h1>{item}</h1></li>;
		});
	},

	_getCarouselImages() {
		return carouselCopy.map((spot, index) => {
			const { img, copy } = spot;
			const path = getImagePath(img);
			return (
				<div key={index} className="carousel-item" style={{ backgroundImage: `url(${path})` }}>
					<div className="info-box carousel-overlay">
						<div className="row">
							<div className="col s10 offset-s1">
								<ul>{this._formatCarouselCopy(copy)}</ul>
							</div>
						</div>
					</div>
				</div>
			);
		});
	},

	_getHomeBodyLists() {
		return Object.keys(listTiles).map((prop, index) => {
			return (
				<div key={index} className="col s4">
					<ListTile title={prop} list={listTiles[prop]}/>
				</div>
			);
		});
	},

	render() {
		return (
			<div className="component-wrapper">
				<div className="carousel carousel-slider">
					{this._getCarouselImages()}
				</div>
				<div className="custom-container">
					<div className="row large-copy">
						<h3 className="section-header s12">Marketing &amp; Business Development for Tech Companies</h3>
						<p className="col s12">
							{blurbs.one}
						</p>
						<div className="container">
							{this._getHomeBodyLists()}
						</div>
						<p className="col s12 bottom-home-page">
							{blurbs.two}
						</p>
					</div>
				</div>
			</div>
		);
	}
});

export default Home;
