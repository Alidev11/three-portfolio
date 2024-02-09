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
	carrent,
	jobit,
	tripguide,
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
		title: "Front-end Web Developer",
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
		iconBg: "#383E56",
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
			"Link Github: https://github.com/Alidev11/defect_detection",
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
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "flutter",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
