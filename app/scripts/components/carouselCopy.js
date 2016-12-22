/* global React */

const CarouselCopy = React.createClass({

	propTypes: {
		data: React.PropTypes.object
	},

	_generateCopyList(section) {
		return section.copy.map((item, index) => {
			if(item.charAt(0) === '*') {
				return (
					<li key={section.title + index} className="emphasis-words">
						{item.substring(1)}
					</li>
				);
			} else {
				return <li key={section.title + index}>{item}</li>;
			}
		});
	},

	render: function () {
		const { data } = this.props;
		// console.log(data);
		if(data) {
			return (
				<div className="carousel-overlay info-box">
					<h5 className="info-box-header">{data.title}</h5>
					<ul className="blurb centered">
						{this._generateCopyList(data)}
					</ul>
				</div>
			);
		} else {
			return (
				<div className="carousel-overlay"></div>
			);
		}

	}
});

export default CarouselCopy;
