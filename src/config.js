const skills = [
	{
		title: "Languages",
		entries: ["JavaScript", "Python", "Java", "HTML", "CSS/Sass"],
	},
	{
		title: "Frameworks",
		entries: ["React", "Gatsby", "Express", "Node", "Bootstrap"],
	},
	{
		title: "Tools",
		entries: ["Bash/ZSH", "Git & GitHub", "Photoshop", "Sony Vegas Pro"],
	},
];

const jobs = [
	{
		name: "CyberSoc",
		role: "Press & Publicity Officer",
		startDate: "Mar 2019",
		endDate: "Mar 2020",
		link: "https://cybersoc.co.uk/",
		responsibilities: [
			"Assisted CyberSoc President in liaising with external stakeholders.",
			"Wrote and disseminated communications to CyberSoc members and the wider student body.",
		],
	},
	{
		name: "Rewind Gaming",
		role: "Founder & Director of Operations",
		startDate: "Jun 2016",
		endDate: "Nov 2019",
		link: "https://twitter.com/rewindrl",
		responsibilities: [
			"Negotiated partnerships and sponsorships with other companies.",
			"Devised and ran Rewind Gaming's social media campaigns.",
			"Managed a team of 30+ volunteer staff.",
			"Coordinated weekly events.",
			"Graphic Design Lead, responsible for entire Rewind Gaming branding.",
		],
	},
	{
		name: "NCSC",
		role: "CyberFirst Residential Course",
		startDate: "Aug 2017",
		endDate: "Sept 2017",
		link: "https://www.ncsc.gov.uk/information/cyberfirst",
		responsibilities: [
			"Week-long residential course run by CyberFirst, a branch of GCHQ. Introduced to penetration testing, learning how to take over remote systems using Kali Linux and Metasploit and exploit common web vulnerabilities such as SQL injection and XSS. Gained experience using digital forensics tools such as Wireshark to analyse web traffic. Culminated in a 12-hour CTF-style event, gathering data using the techniques and concepts I learned.",
		],
	},
	{
		name: "MintTwist",
		role: "Front-end Web Development Intern",
		startDate: "Aug 2016",
		endDate: "Sept 2016",
		link: "https://www.minttwist.com/",
		responsibilities: [
			"Developed website landing pages for clients.",
			"Managed Git repositories for site data.",
			"Error-checked and resolved bugs in pre-existing code.",
			"Translated design concepts into HTML & CSS.",
		],
	},
];

const projects = [
	{
		name: "CyberSoc",
		description:
			"Website for CyberSoc, the University of York’s Cyber Security society. Designed and built from scratch, using GatsbyJS to leverage static site hosting with dynamic content.",
		techs: ["React", "Express", "Gatsby", "HTML", "Sass"],
		repo: "https://github.com/CyberSocYork/cybersocyork.github.io ",
		link: "https://cybersoc.co.uk",
	},
	{
		name: "WikiCard Viewer",
		description:
			"A web app using ReactJS that allows users to search for a term on Wikipedia and have the results returned to them as a set of aesthetic cards.",
		techs: ["React", "JavaScript", "HTML", "CSS"],
		repo: "https://github.com/silverben10/wiki-card-viewer",
		link: "https://bensilverman.co.uk/wiki-card-viewer/",
	},
];

export { skills, jobs, projects };
