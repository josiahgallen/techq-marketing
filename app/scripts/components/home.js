/* global React */

import ListTile from './listTile';
import { listTiles, blurbs, carouselCopy } from '../data/copy';
import { getImagePath } from '../utils';
import { Slider, Slide } from 'react-materialize';

const Home = React.createClass({

	_getCarouselImages() {
		return carouselCopy.map((spot, index) => {
			const { img, copy } = spot;
			const path = getImagePath(img);
			return <Slide key={index} src={path} alignment="center">{copy}</Slide>;
		});
	},

	_getHomeBodyLists() {
		return Object.keys(listTiles).map((prop, index) => {
			return (
				<div key={index} className="col s12 m4">
					<ListTile title={prop} list={listTiles[prop]}/>
				</div>
			);
		});
	},

	render() {
		return (
			<div className="component-wrapper">
				<Slider interval={6000}>
					{this._getCarouselImages()}
				</Slider>
				<div className="custom-container">
					<div className="row large-copy">
						<h4 className="section-header s12">Marketing &amp; Business Development for Tech Companies</h4>
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
