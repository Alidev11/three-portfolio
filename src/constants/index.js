import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	python,
	php,
	mysql,
	tailwind,
	laravel,
	git,
	figma,
	docker,
	fiverr,
	yolov8Graphite,
	defectdetection,
	arTweet,
	caliClustering,
	portailPFE,
	gestionAbsence,
	axure,
	firebase,
	flutter,
	pytorch,
	bcSkills,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Data Scientist",
		icon: backend,
	},
	{
		title: "Freelancer",
		icon: creator,
	},
	{
		title: "Laravel Developer",
		icon: mobile,
	},
	{
		title: "Full stack Web Developer",
		icon: web,
	},
];

const technologies = [
	{
		name: "javascript",
		icon: javascript,
	},
	{
		name: "php",
		icon: php,
	},
	{
		name: "mysql",
		icon: mysql,
	},
	{
		name: "laravel",
		icon: laravel,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "axure",
		icon: axure,
	},
	{
		name: "docker",
		icon: docker,
	},
	{
		name: "firebase",
		icon: firebase,
	},
	{
		name: "flutter",
		icon: flutter,
	},
	{
		name: "pytorch",
		icon: pytorch,
	},
	{
		name: "python",
		icon: python,
	},
];

const experiences = [
	{
		title: "Freelancer",
		company_name: "Fiverr",
		icon: fiverr,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Present",
		points: ["Editing a UENI website.", "Developing a user management system in laravel."],
	},
	{
		title: "Laravel Developer",
		company_name: "Bc Skills Group",
		icon: bcSkills,
		iconBg: "#E6DEDD",
		date: "April 2023 - June 2023",
		points: [
			"Consumption of a REST API using Postman.",
			"Development of a website to manage contracts and partners using Laravel and Bootstrap.",
			"Team management using Trello.",
			"Leading and participating in meetings.",
			"Code version control using Github.",
		],
	},
	{
		title: "Data Scientist",
		company_name: "Concept les frères",
		icon: pytorch,
		iconBg: "#E6DEDD",
		date: "April 2022 - June 2022",
		points: [
			"Data collection and cleaning using opencv.",
			"Training an algorithm to detect production defects in sardine cans using Pytorch and Google colab .",
			"Deployment of the model in a desktop application using Pyqt5.",
			"Link Github https://github.com/Alidev11/defect_detection",
		],
	},
	{
		title: "Front-end Web Developer",
		company_name: "Bc Skills Group",
		icon: bcSkills,
		iconBg: "#E6DEDD",
		date: "July 2021 - August 2021",
		points: [
			"Development of a showcase website for an electrical company using HTML, CSS and jQuery.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"He was very professional and prompt. He completed the order 2 days before the required delivery date. He did a great job and I would highly recommend him. I plan to use him again should I need this type of service and will tell others about him.",
		name: "emmerstine",
		designation: "CEO",
		company: "Divorce Coaching",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial: "Loved working with him. He was diligent and prompt and did a great job.",
		name: "emmerstine",
		designation: "CEO",
		company: "Divorce Coaching",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial: "Merci Ali, à la prochaine pour d'autres projets",
		name: "rikaconcept",
		designation: "Fiverr buyer",
		company: "Ivory Coast",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
	},
];

const projects = [
	{
		name: "ASL Detection",
		description:
			"Command line application to detect American Sign Language(ASL) using the deep learning model Yolov8 and Graphite to monitor its performance.",
		tags: [
			{
				name: "Graphite",
				color: "blue-text-gradient",
			},
			{
				name: "Python",
				color: "green-text-gradient",
			},
			{
				name: "Yolov8",
				color: "pink-text-gradient",
			},
		],
		image: yolov8Graphite,
		source_code_link: "https://github.com/Alidev11/yolov8-graphite",
	},
	{
		name: "Production Defect Detection",
		description:
			"GUI application that detects defects in sardine cans during production. The deep learning model used can detect defects in more than just my dataset.",
		tags: [
			{
				name: "PyQt5",
				color: "blue-text-gradient",
			},
			{
				name: "Python",
				color: "green-text-gradient",
			},
			{
				name: "VGG16",
				color: "pink-text-gradient",
			},
		],
		image: defectdetection,
		source_code_link: "https://github.com/Alidev11/defect_detection",
	},
	{
		name: "Sentiment Analysis of Arabic Tweets",
		description:
			"This web application developed using Streamlit to analyze and extract sentiments from Arabic tweets using artificial intelligence and Deep Learning. I used CNN as a model to classify tweets (positive/negative).",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "Scikit-learn",
				color: "green-text-gradient",
			},
			{
				name: "Keras",
				color: "pink-text-gradient",
			},
			{
				name: "Streamlit",
				color: "red-text-gradient",
			},
		],
		image: arTweet,
		source_code_link: "https://github.com/Alidev11/cnn-ar-tweets",
	},
	{
		name: "California Houses Clustering",
		description:
			"This is a web app that cluster california houses using the Machine Learning Model DBSCAN. We used a dataset from Kaggle to implement this.",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "Scikit-learn",
				color: "green-text-gradient",
			},
			{
				name: "Streamlit",
				color: "pink-text-gradient",
			},
		],
		image: caliClustering,
		source_code_link: "https://github.com/Alidev11/clustering_web_app",
	},
	{
		name: "Company Portal(ESE)",
		description:
			"The aim of this project was to develop a Laravel-based web application to enable a company’s customers to check and update their information in the SAP system. This is my end of study internship project and I can't reveal more about it to ensure confidentiality and security of the system",
		tags: [
			{
				name: "Laravel",
				color: "blue-text-gradient",
			},
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "SAP",
				color: "pink-text-gradient",
			},
			{
				name: "API",
				color: "red-text-gradient",
			},
		],
		image: portailPFE,
		source_code_link: "https://github.com/Alidev11/",
	},
	{
		name: "Absence Management",
		description:
			"web application that enables absence management for different roles, such as Professor, Coordinator, Department Head, and Scholarship Officer. The application also allows the administrator to manage permissions and subjects using PHP, HTML, CSS and JavaScript.",
		tags: [
			{
				name: "PHP",
				color: "blue-text-gradient",
			},
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "Ajax",
				color: "pink-text-gradient",
			},
			{
				name: "MySQL",
				color: "yellow-text-gradient",
			},
		],
		image: gestionAbsence,
		source_code_link: "https://github.com/mhamed-sayamik/gestion-absences",
	},
];

export { services, technologies, experiences, testimonials, projects };
