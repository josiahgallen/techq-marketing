/* global React */

export const navLinks = [
	{ name: 'Company', path: '/company' },
	{ name: 'Services', path: '/services' },
	// { name: 'Our Work', path: '#' },
	{ name: 'Contact', path: '/contact' }
	// { name: 'Resources', path: '#' }
];

export const logos = {
	techQ: 'logo-prod.png',
	linkedin: 'linkedin-logo.png'
};

export const profile = {
	linkedin: 'https://www.linkedin.com/in/wennie-allen',
	pic: 'profile.jpg',
	contactEmail: 'contact@techqmarketing.com',
	email: 'wennie@techqmarketing.com'
};

export const carouselCopy = [
	{
		img: 'tablet-coffee.jpg',
		copy: <div>
			Helping technology companies achieve revenue, profit, and business
			growth through blended marketing and business development services
		</div>
	},
	{
		img: 'circuit-board-wash.jpg',
		copy: <div>
			Tell your story, plan your product reveal, and create meaningful
			connections to set your company apart
		</div>
	},
	{
		img: 'asian-girl.jpg',
		copy: (
			<div>
				<div>Passionate about technology and innovation</div>
				<div>Deep understanding of hardware, software, and cloud solutions</div>
			</div>
		)
	}
];

export const listTiles = {
	strategy: [
		'Marketing strategy',
		'Positioning & messaging',
		'Content strategy',
		'Go-to-market strategy',
		'Partnerships & ecosystems'
	],
	execution: [
		'Product launches',
		'Pricing model',
		'Market research',
		'Competitive analysis',
		'Market & segment analysis',
		'Content creation'
	],
	consulting: [
		'Digital marketing',
		'Web design',
		'Advice & counsel',
		'Workshops & presentations'
	]
};

export const blurbs = {
	one: `Specializing in B2B inbound markeing with a technology focus.
	We help the sales team win deals; attract customers online and
	convert to wins; serve as baseline for promotional marketing like
	digital, event, and social, ultimately help YOU create revenue
	and success.`,
	two: `Driven by a passion to help technology companies succeed,
	techQ marketing works closely with clients to quickly understand
	the product and create value. Experienced in working with multi-cultural
	and international teams, techQ provides uparalleled insights
	and knowledge to the clients. We deliver full-time experience
	with factional service.`
};

export const companyBlurbs = [
	<p key="0">
		techQ Marketing is a blended marketing and business development service
		company with a mission to help technology companies achieve revenue,
		profit, and business growth.
	</p>,
	<p key="1">
		Based on over 16 years of industry experience, the company is founded on
		a passion for technology and innovation. The strength of the company
		lies with the deep understanding of hardware, software, and cloud solutions.
	</p>,
	<p key="2">
		The unique experience of the founder in Startup settings brings an
		understanding for the agility, resourcefulness, and fast-paced demand of
		any technology company.
	</p>
];

export const profileBlurb = [
	<p key="0">
		<span className="blue-emphasis-words">Wennie Allen</span>, an engineer by
		training, has been shaping and transforming businesses through her
		marketing and business development skills. With a proven track record of
		success, Wennie has helped many large companies, like Texas Instruments
		and Silicon Labs, in developing new businesses; creating eco systems
		through new and existing partners; and driving growth.
	</p>,
	<p key="1">
		Wennie has created new businesses from concept to revenue; launched many
		hardware and software products; authored technical and marketing content;
		created and deployed go-to-market strategies; and represented in press
		releases and media interviews.
	</p>,
	<p key="2">
		Wennie possesses strong business acumen, strategic thinking, technical
		savviness, and collaboration skills. She is experienced in leading a
		team to work towards a goal, specifically in time and task management,
		product development, and working across functional teams.
	</p>,
	<p key="3">
		<span className="bold">Specialties:</span> translate technical features into customer
		values; reaching customers on a personal level, business development,
		business strategy, product marketing & management, partnerships,
		leadership, cross-functional team leadership, strategic communication,
		content & message development
	</p>
];

export const servicesPage = {
	strategy: {
		banner: 'strategy.jpg',
		tagline: <p className="no-margin">Planning is the starting point for any campaign or launch. At techQ,
		we can help you create your unique:</p>,
		results: [
			<li key="0">Tell <span className="red-emphasis-words italic">your story</span> with creative and differentiated marketing</li>,
			<li key="1">Develop <span className="red-emphasis-words italic">personas</span> targeting your audience</li>,
			<li key="2">Create effective marketing <span className="red-emphasis-words italic">actions and KPIs</span></li>,
			<li key="3">Form <span className="red-emphasis-words italic">meaningful connections</span> to ecosystems and partners</li>
		],
		copy: [
			<li key="0">Marketing strategy</li>,
			<li key="1">Positioning & messaging</li>,
			<li key="2">Content strategy</li>,
			<li key="3">Go-to-market strategy</li>,
			<li key="4">Partnerships & ecosystems</li>
		]
	},
	execution: {
		banner: 'whiteboard.jpg',
		tagline: <p className="no-margin">Whether you are a startup looking to launch your first product, or a
		mature company looking to improve your content,</p>,
		results: [
			<li key="0">Plan <span className="red-emphasis-words italic">your product reveal</span> with methodical, process-driven product launch</li>,
			<li key="1">Set your company <span className="red-emphasis-words italic">above competition</span> with technical and isightful content</li>,
			<li key="2">Create <span className="red-emphasis-words italic">compelling use cases</span> in effective business development</li>,
			<li key="3">Generate <span className="red-emphasis-words italic">revenue growth</span> with profitable pricing strategy</li>,
			<li key="4">Provide <span className="red-emphasis-words italic">in-depth market & competitive analysis</span> to your segment</li>
		],
		copy: [
			<li key="0">Product launches</li>,
			<li key="1">Pricing model</li>,
			<li key="2">Market research</li>,
			<li key="3">Competitive analysis</li>,
			<li key="4">Market & segment analysis</li>,
			<li key="5">Content creation</li>

		]
	},
	consulting: {
		banner: 'charts.jpg',
		tagline: <p className="no-margin">There are many different types of marketing services. while
		techQ can provide many services directly, we can also guide, and provide general feedback on:</p>,
		results: [
			<li key="0">Provide advice & counsel</li>,
			<li key="1">Conduct workshops & presentations</li>,
			<li key="2">Improve your <span className="red-emphasis-words italic">digital footprint</span> with SEO best practices</li>,
			<li key="3">Expand <span className="red-emphasis-words italic">your reach</span> through  your web design</li>,
			<li key="4">Enhance or improve <span className="red-emphasis-words italic">your reputation</span> with effective branding</li>
		],
		copy: [
			<li key="0">Branding</li>,
			<li key="1">Digital marketing</li>,
			<li key="2">Web design</li>
		]
	}
};

export const footerCopy = {
	founderInfo: 'Want to know more about the founder? Check out Wennie Allen\'s LinkedIn page here:'
};
