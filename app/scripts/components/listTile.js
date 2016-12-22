/* global React, $ */
const ListTile = React.createClass({

	render: function () {
        const { title, list } = this.props;
        const bullets = list.map((item, index) => {
            return <li key={`bullet${index}`}>{item}</li>
        });
		return (
			<div>
                <h6 className="bold">{`${title.toUpperCase()}:`}</h6>
				<ul>{bullets}</ul>
			</div>
		);
	}
});

export default ListTile;
