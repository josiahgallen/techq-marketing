/* global React */
const ListTile = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		list: React.PropTypes.array.isRequired
	},

	render: function () {
		const { title, list } = this.props;
		const bullets = list.map((item, index) => {
			return <li key={`f${index}`}>{item}</li>;
		});
		return (
			<div className="list-tile-bullets">
				<h6>{title.toUpperCase()}</h6>
				<ul>{bullets}</ul>
			</div>
		);
	}
});

export default ListTile;
