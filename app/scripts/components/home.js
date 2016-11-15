/* global React */

const Home = React.createClass({

	render: function () {
		return (
			<div>
				<div className="carousel-slider carousel">
					<a className="carousel-item" href="#one!"><div className="car-img"></div></a>
					<a className="carousel-item" href="#two!"><div className="car-img"></div></a>
					<a className="carousel-item" href="#three!"><div className="car-img"></div></a>
				</div>
			</div>
		);
	}
});

export default Home;
