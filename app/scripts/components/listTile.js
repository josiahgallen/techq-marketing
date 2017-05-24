/* global React */
const ListTile = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		list: React.PropTypes.array.isRequired
	},

	render() {
		const { title, list } = this.props;
		const bullets = list.map((item, index) => {
			return <li key={index}>{item}</li>;
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
