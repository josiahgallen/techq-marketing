/* global React */

const CarouselOverlay = React.createClass({

    render() {
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
                    <div className="carousel-overlay"></div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="carousel-overlay info-box">
                        <h5 className="info-box-header">Experiences</h5>
                        <p className="blurb list">
                            <div>Tell your story</div>
                            <div>Plan your product reveal</div>
                            <div>Set your company apart</div>
                            <div>Create meaningful conections</div>
                            <div>Generate revenue growth</div>
                            <div className="emphasis-words">Full-time experience, fractional service</div>
                        </p>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="carousel-overlay"></div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="carousel-overlay"></div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="carousel-overlay info-box">
                        <h5 className="info-box-header">Blended Marketing</h5>
                        <p className="blurb list">
                            <div>Messaging &amp; content creation</div>
                            <div>Product launches</div>
                            <div>Partnership &amp; ecosystems</div>
                            <div>Sales enablement &amp; training</div>
                            <div>Pricing</div>
                            <div>Web strategy</div>
                            <div>Lead generation</div>
                            <div>Social media strategy</div>
                            <div>Market research</div>
                        </p>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="carousel-overlay"></div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="carousel-overlay info-box">
                        <h5 className="info-box-header">Industries</h5>
                        <p className="blurb list">
                            <div>Semiconductor</div>
                            <div>Industrial automation</div>
                            <div>Connected home</div>
                            <div>Automotive</div>
                            <div>Health and fitness</div>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
})

export default CarouselOverlay;
