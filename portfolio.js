import emoji from "react-easy-emoji";

export const greetings = {
	name: "Juan David Tujillo Rodriguez ",
	title: "Hi all, I'm Juan",
	description:
	"Soy un desarrollador web Full Stack apasionado que tiene experiencia en desarrollo de aplicaciones web con Javascript, Python, Django, React.js, React Ntive, Next.js y Blockchain en Ethereum, Solidity, Web3.js, SQL Server, Mongo DB, C#, Unity 3D, Moralis y Brownie Framework",
	resumeLink:
		"https://drive.google.com/file/d/1j7QdSt7djBoObRTIT-3Kn52UHwjwfIOA/view",
};

export const openSource = {
	githubUserName: "https://github.com/juandtr",
};

export const contact = {};

export const socialLinks = {
	url: "https://github.com/juandtr",
	linkedin: "https://www.linkedin.com/in/juan-trujillo-7843161b1/",
	github: "https://github.com/juandtr",
	
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"INGENIERO DE SOFTWARE Y DESARROLLADOR FULL STACK QUE QUIERE EXPLORAR TODAS LAS TECNOLOGÍAS",
	data: [
		{
			title: "Full Stack Development and SOFTWARE ENGINEER",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Soy Henry and Holberton School",
		subHeader: "Master of Data Science",
		
		
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "Creategica-Latina",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Apr 2020 – Jun 2021",
		desc: "I worked as a frontend web developer to design web-based administration panels for multiple Django applications, Bootstrap, jQuery, Chart.js and some other libraries, creating development interfaces, and in turn designing and implementing methodologies for web and mobile apps, develop purely interactive applications for web and mobile platforms",
	},
	{
		role: "Software Engineer and Full stack",
		company: "Vulcano Company",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Dec 2021 – Mar 2023",
		desc: "I worked as a Django web developer to create a website where I integrated the computer vision AI model (created by the Vulcano web team) to render YouTube URLs and display the real-time rendering on the website using Django Channels WebSockets, threads for running multiple AI Model instances, jQuery for UI rendering, and implemented it on the Heroku server. I also worked on the creation and automation of a mobile app with Augmented Reality for the easy recognition framework, using Unity 3D and other development frameworks like React Ntive among others...",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	
];

export const projects = [
	// {
	// 	name: "developer-portfolio",
	// 	desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
	// 	github: "https://github.com/1hanzla100/developer-portfolio",
	// 	link: "https://developer-portfolio-1hanzla100.vercel.app/",
	// },
	// {
	// 	name: "AtlasMart",
	// 	desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
	// 	github: "https://github.com/1hanzla100/Django-React-Marketplace",
	// },
	// {
	// 	name: "Technota (Forum)",
	// 	desc: "Get hands-on experience in technical skills with Technota",
	// 	github: "https://github.com/1hanzla100/django-react-forum",
	// },
	// {
	// 	name: "Shopaza (Ecommerce)",
	// 	desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
	// 	github: "https://github.com/1hanzla100/Django-ecommerce",
	// },
];

export const feedbacks = [
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Hanzla Tauqeer",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Hanzla Tauqeer",
	image: "https://avatars.githubusercontent.com/u/75295437?v=4",
	url: "https://github.com/juandtr",
	keywords: [
		"Hanzla",
		// "Hanzla Tauqeer",
		// "@1hanzla100",
		// "1hanzla100",
		// "Portfolio",
		// "Hanzla Portfolio ",
		// "Hanzla Tauqeer Portfolio",
	],
}
