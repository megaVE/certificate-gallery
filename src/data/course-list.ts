import type { Course } from "../@types/course";

export const courseList: Course[] = [
	// Udemy
	// Udemy - Maximilian Schwarzmüller
	{
		name: "Clean Code",
		provider: "Udemy",
		description:
			"Learn how to write readable, understandable and therefore maintainable code - step by step, in an example-driven way",
		tags: ["Clean Code"],
		teacher: "Maximilian Schwarzmüller",
		length: 6.5,
		completedAt: new Date("2024-02-01"),
		path: "udemy/clean-code-maximilian.pdf",
		url: "https://www.udemy.com/certificate/UC-bf578cd3-2540-495d-8a46-ce45a97439f4/",
	},
	{
		name: "React & TypeScript - The Practical Guide",
		provider: "Udemy",
		description:
			"Build type-safe React apps & use TypeScript to enhance your components, state management, Redux & side effects code.",
		tags: ["ReactJS", "TypeScript"],
		teacher: "Maximilian Schwarzmüller",
		length: 7.5,
		completedAt: new Date("2025-03-13"),
		path: "udemy/react-typescript.pdf",
		url: "https://www.udemy.com/certificate/UC-e46ea098-7a4d-4ef4-b431-172a5ae96ad1/",
		githubUrl: "https://github.com/megaVE/react-typescript-learning",
	},
	{
		name: "JavaScript Unit Testing - The Practical Guide",
		provider: "Udemy",
		description:
			"Learn how to write automated tests (unit & integration tests) for your JavaScript projects with Vitest & Jest.",
		tags: ["NodeJS", "JavaScript", "Vitest", "Jest"],
		teacher: "Maximilian Schwarzmüller",
		length: 5.5,
		completedAt: new Date("2025-05-20"),
		path: "udemy/javascript-unit-testing.pdf",
		url: "https://www.udemy.com/certificate/UC-e46ea098-7a4d-4ef4-b431-172a5ae96ad1/",
		githubUrl: "https://github.com/megaVE/vitest-jest-learning",
	},
	// Udemy - Hora de Codar
	{
		name: "JavaScript do básico ao avançado (c/ Node.js e projetos)",
		provider: "Udemy",
		description:
			"Aprenda tudo sobre JavaScript(ES6+), lógica de prog., orientação a objetos, crie projetos para web com Node.js e Express",
		tags: ["JavaScript", "NodeJS", "ExpressJS"],
		teacher: "Hora de Codar",
		length: 23.5,
		completedAt: new Date("2023-11-02"),
		path: "udemy/hdc-javascript.pdf",
		url: "https://www.udemy.com/certificate/UC-565c4439-55d3-4885-a8fd-70190a373923/",
		githubUrl: "https://github.com/megaVE/javascript-learning-projects",
	},
	{
		name: "Desafios de JavaScript - entrevistas e testes técnicos",
		provider: "Udemy",
		description:
			"Exercite programação e se prepare para entrevistas e teste técnicos, resolvendo mais de 40 exercícios com JavaScript!",
		tags: ["JavaScript"],
		teacher: "Hora de Codar",
		length: 4,
		completedAt: new Date("2024-01-30"),
		path: "udemy/hdc-javascript-challenges.pdf",
		url: "https://www.udemy.com/certificate/UC-40720943-ab14-4374-89f2-9350735203a0/",
		githubUrl: "https://github.com/megaVE/javascript-exercises",
	},
	{
		name: "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
		provider: "Udemy",
		description:
			"Crie projetos completos com React, utilizando tecnologias em alta no mercado como Firebase, Node.js, MongoDB e mais!",
		tags: ["JavaScript", "ReactJS", "Firebase", "NodeJS", "MongoDB"],
		teacher: "Hora de Codar",
		length: 30.5,
		completedAt: new Date("2024-01-26"),
		path: "udemy/hdc-react.pdf",
		url: "https://www.udemy.com/certificate/UC-b939185e-93d7-4468-ab5c-81bf0851cd97/",
		githubUrl: "https://github.com/megaVE/react-learning-projects",
	},
	{
		name: "Desafios de React JS - Entrevistas e testes técnicos",
		provider: "Udemy",
		description:
			"Exercite React JS e se prepare para entrevistas e teste técnicos, resolvendo mais de 40 exercícios com React!",
		tags: ["ReactJS"],
		teacher: "Hora de Codar",
		length: 4.5,
		completedAt: new Date("2024-01-29"),
		path: "udemy/hdc-react-challenges.pdf",
		url: "https://www.udemy.com/certificate/UC-1e2f7a12-ac27-42ee-b891-9222b1dc4bc0/",
		githubUrl: "https://github.com/megaVE/react-exercises",
	},
	{
		name: "SQL do básico ao avançado (com MySQL e Projeto)",
		provider: "Udemy",
		description:
			"Aprenda tudo sobre SQL e MySQL de forma prática e objetiva, e ainda crie projetos com PHP e MySQL!",
		tags: ["MySQL", "PHP"],
		teacher: "Hora de Codar",
		length: 17.5,
		completedAt: new Date("2024-01-13"),
		path: "udemy/hdc-mysql.pdf",
		url: "https://www.udemy.com/certificate/UC-13503724-5715-4972-a8ab-3bacdd4cc211/",
		githubUrl: "https://github.com/megaVE/mysql-learning-projects",
	},
	{
		name: "Bootstrap 5 do básico ao avançado (com 4 projetos)",
		provider: "Udemy",
		description:
			"Aprenda Bootstrap 5 criando projetos incríveis e responsivos (mobile first), desde o absoluto zero até a finalização",
		tags: ["HTML", "CSS", "Bootstrap"],
		teacher: "Hora de Codar",
		length: 16.5,
		completedAt: new Date("2024-02-07"),
		path: "udemy/hdc-bootstrap.pdf",
		url: "https://www.udemy.com/certificate/UC-725e1d4b-f72f-4f72-ac17-4f094f96bc44/",
		githubUrl: "https://github.com/megaVE/bootstrap-learning-projecs",
	},
	{
		name: "TypeScript do básico ao avançado (c/ React, Express)",
		provider: "Udemy",
		description:
			"Aprenda TypeScript na prática, integrando com diversos frameworks do mercado (React, Express) e ainda criando projetos!",
		tags: ["TypeScript", "JavaScript", "ReactJS", "NodeJS"],
		teacher: "Hora de Codar",
		length: 14,
		completedAt: new Date("2024-05-23"),
		path: "udemy/hdc-typescript.pdf",
		url: "https://www.udemy.com/certificate/UC-2455d446-bd5c-4d36-a9d1-dd5e55257535/",
		githubUrl: "https://github.com/megaVE/typescript-learning-projects",
	},
	{
		name: "HTML5 e CSS3: Técnicas Avançadas (Com Flexbox e 5 Projetos)",
		provider: "Udemy",
		description:
			"Conheça os elementos do HTML5, as regras do CSS3, aprenda flexbox e ainda construa projetos web!",
		tags: ["HTML", "CSS", "Flexbox"],
		teacher: "Hora de Codar",
		length: 10,
		completedAt: new Date("2023-08-07"),
		path: "udemy/hdc-html-css-advanced.pdf",
		url: "https://www.udemy.com/certificate/UC-13c3ca07-cc35-407f-834a-618caa020020/",
		githubUrl: "https://github.com/megaVE/html-css-learning-projects",
	},
	{
		name: "Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)",
		provider: "Udemy",
		description:
			"Aprenda do básico ao avançado Git e GitHub, uma abordagem prática para o controle de versão e manutenção de repositórios",
		tags: ["Git", "GitHub", "HTML", "CSS"],
		teacher: "Hora de Codar",
		length: 8.5,
		completedAt: new Date("2023-07-25"),
		path: "udemy/hdc-git-github.pdf",
		url: "https://www.udemy.com/certificate/UC-259cb1d1-40c0-4f94-9c76-19bddcbd775d/",
	},
	{
		name: "Linux para Desenvolvedores (c/ terminal, Shell, Apache e +)",
		provider: "Udemy",
		description:
			"Aprenda o poder do Linux, com este curso você utilizará o terminal de forma avançada e se sentirá a vontade no Linux.",
		tags: ["Linux", "Shell", "Apache"],
		teacher: "Hora de Codar",
		length: 7.5,
		completedAt: new Date("2023-08-15"),
		path: "udemy/hdc-linux-dev.pdf",
		url: "https://www.udemy.com/certificate/UC-64aa9283-ccc1-4f5e-a977-1219729da7c0/",
	},
	{
		name: "Visual Studio Code: Produtividade Absoluta",
		provider: "Udemy",
		description:
			"Eleve sua produtividade no VS Code ao nível máximo, conheça as melhores extensões e técnicas para produzir mais código!",
		tags: ["Visual Studio Code"],
		teacher: "Hora de Codar",
		length: 4.5,
		completedAt: new Date("2023-07-26"),
		path: "udemy/hdc-visual-studio-code.pdf",
		url: "https://www.udemy.com/certificate/UC-249947f4-bdf0-46dc-b371-2933896c7184/",
	},
	{
		name: "ChatGPT para Desenvolvedores: Aprenda e crie soluções com IA",
		provider: "Udemy",
		description:
			"Aprenda a utilizar Chat GPT para agilizar tarefas no desenvolvimento, como: Front-end, back-end e também banco de dados!",
		tags: ["ChatGPT"],
		teacher: "Hora de Codar",
		length: 3.5,
		completedAt: new Date("2023-12-21"),
		path: "udemy/hdc-chatgpt.pdf",
		url: "https://www.udemy.com/certificate/UC-f28aec30-aa4f-4dab-a3d5-3a1599986d92/",
	},
	// Udemy - Misc
	{
		name: "Tailwind CSS From Scratch | Learn By Building Projects",
		provider: "Udemy",
		description:
			"Build great looking layouts fast and efficiently using Tailwind CSS utility classes",
		tags: ["HTML", "CSS", "Tailwind"],
		teacher: "Brad Traversy",
		length: 16.5,
		completedAt: new Date("2024-12-31"),
		path: "udemy/tailwind-css-from-scratch.pdf",
		url: "https://www.udemy.com/certificate/UC-30d211dd-18d2-439e-830d-5a36ecff2190/",
		githubUrl: "https://github.com/megaVE/tailwind-learning-projects",
	},
	{
		name: "HTML e CSS Essencial - Front End Completo para Iniciantes",
		provider: "Udemy",
		description:
			"Desenvolva sites responsivos com HTML5, CSS3 e JavaScript em aulas 100% práticas e com exemplos reais publicados na Web.",
		tags: ["HTML", "CSS", "ChatGPT"],
		teacher: "Wagner Cardoso",
		length: 16.5,
		completedAt: new Date("2023-05-29"),
		path: "udemy/html-css-essencial.pdf",
		url: "https://www.udemy.com/certificate/UC-7f0d6a55-a368-46bc-a6c3-19f30dfb24fe/",
	},
	{
		name: "Create a Members Only Blog using PHP, MySQL, & AJAX",
		provider: "Udemy",
		description:
			"Create a Database Driven Blog with Authentication, Validated Contact Forms, & Session Variables using PHP, MYSQL, & AJAX",
		tags: ["HTML", "JavaScript", "PHP", "MySQL", "AJAX"],
		teacher: "YouAccel Training",
		length: 2,
		completedAt: new Date("2025-03-15"),
		path: "udemy/members-only-blog-php.pdf",
		url: "https://www.udemy.com/certificate/UC-a28291fd-fc2c-458a-b1e5-2f606f6edcb4/",
		githubUrl: "https://github.com/megaVE/the-perfect-cup",
	},
	// Rocketseat
	// Alura
	// Misc
];
