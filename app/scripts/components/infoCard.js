/* global React, $ */

const InfoCard = React.createClass({

	render() {
		return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="/app/images/charts.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-action">
                    <a href="#">This is a link</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
		);
	}
});

export default InfoCard;
