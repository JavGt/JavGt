import imgHtml from './img/skills/Skill_html.png';
import imgCss from './img/skills/Skill_css.png';
import imgJs from './img/skills/Skill_js.png';
import imgSass from './img/skills/Skill_sass.png';
import imgReact from './img/skills/Skill_react.png';
import imgGulp from './img/skills/Skill_gulp.png';
import imgGit from './img/skills/Skill_git.png';
import imgPhp from './img/skills/Skill_php.png';
import imgMysql from './img/skills/Skill_mysql.png';
import imgNpm from './img/skills/Skill_npm.png';
import imgPWA from './img/skills/PWA.png';
import imgNode from './img/skills/Skill_node.png';
import imgGraphql from './img/skills/Skill_graphql.png';

import imgFondo1 from './img/projects/1.png';
import imgFondo2 from './img/projects/2.png';
import imgFondo3 from './img/projects/3.png';
import imgFondo4 from './img/projects/4.png';
import imgFondo5 from './img/projects/5.png';
import imgFondo6 from './img/projects/6.png';
import imgFondo7 from './img/projects/7.png';
import imgFondo8 from './img/projects/8.png';
import imgFondo9 from './img/projects/9.png';
import imgFondo10 from './img/projects/10.png';

export const skills = [
	{ id: '1', nombre: 'HTML', img: imgHtml },
	{ id: '2', nombre: 'CSS', img: imgCss },
	{ id: '3', nombre: 'JavaScript', img: imgJs },
	{ id: '4', nombre: 'Sass', img: imgSass },
	{ id: '5', nombre: 'React.js', img: imgReact },
	{ id: '6', nombre: 'Gulp.js', img: imgGulp },
	{ id: '7', nombre: 'Git', img: imgGit },
	{ id: '8', nombre: 'PHP', img: imgPhp },
	{ id: '9', nombre: 'MySQL', img: imgMysql },
	{ id: '10', nombre: 'npm', img: imgNpm },
	{ id: '11', nombre: 'Node.Js', img: imgNode },
	{ id: '12', nombre: 'GraphQL', img: imgGraphql },
];

const buscarImg = nombre => skills.filter(skill => skill.nombre === nombre);

export const Proyectos = [
	{
		id: '1',
		nombre: 'SWD',
		url: 'https://quizzical-jones-06f169.netlify.app/',
		git: 'https://github.com/JavGt/SWSDT',
		fondo: imgFondo1,
		tecnologias: [
			...buscarImg('HTML'),
			...buscarImg('CSS'),
			...buscarImg('JavaScript'),
			{ id: '12', img: imgPWA },
		],
	},
	{
		id: '2',
		nombre: 'Control de gastos',
		url: 'https://nervous-visvesvaraya-209ea7.netlify.app/',
		git: 'https://github.com/JavGt/SWSDT',
		fondo: imgFondo2,
		tecnologias: [
			...buscarImg('HTML'),
			...buscarImg('CSS'),
			...buscarImg('JavaScript'),
			...buscarImg('React.js'),
		],
	},
	{
		id: '3',
		nombre: 'Agencia Viajes',
		url: 'https://powerful-headland-36196.herokuapp.com/',
		git: 'https://github.com/JavGt/agencia_deployment',
		fondo: imgFondo3,
		tecnologias: [
			...buscarImg('HTML'),
			...buscarImg('CSS'),
			...buscarImg('JavaScript'),
			...buscarImg('Node.Js'),
			...buscarImg('MySQL'),
		],
	},
	{
		id: '4',
		nombre: 'APV',
		url: 'https://clever-dijkstra-9b2252.netlify.app/',
		git: 'https://github.com/JavGt/47-ServiceWorkers-PWA',
		fondo: imgFondo4,
		tecnologias: [
			...buscarImg('HTML'),
			...buscarImg('CSS'),
			...buscarImg('JavaScript'),
			{ id: '12', img: imgPWA },
		],
	},
	{
		id: '5',
		nombre: 'Criptomonedas',
		url: 'https://condescending-morse-2c6a2d.netlify.app/',
		git: 'https://github.com/JavGt/39-PROYECTO-Criptomonedas',
		fondo: imgFondo5,
		tecnologias: [
			...buscarImg('HTML'),
			...buscarImg('CSS'),
			...buscarImg('React.js'),
			...buscarImg('JavaScript'),
		],
	},
	{
		id: '6',
		nombre: 'Veterinaria',
		url: 'https://focused-brattain-e288cc.netlify.app/',
		git: '',
		fondo: imgFondo6,
		tecnologias: [
			...buscarImg('HTML'),
			...buscarImg('CSS'),
			...buscarImg('React.js'),
			...buscarImg('JavaScript'),
		],
	},
	{
		id: '7',
		nombre: 'Salon de Belleza',
		url: 'https://udemy-pr5.netlify.app/',
		git: 'https://github.com/JavGt/Udemy_Proyecto_5.git',
		fondo: imgFondo7,
		tecnologias: [
			...buscarImg('HTML'),
			...buscarImg('CSS'),
			...buscarImg('PHP'),
			...buscarImg('JavaScript'),
		],
	},
	{
		id: '8',
		nombre: 'Arquitectura Bosque',
		url: 'https://udemy-pr9.netlify.app/',
		git: 'https://github.com/JavGt/Udemy_Proyecto_9',
		fondo: imgFondo8,
		tecnologias: [...buscarImg('HTML'), ...buscarImg('Sass')],
	},
	{
		id: '9',
		nombre: 'Necleus',
		url: 'https://udemy-pr10.netlify.app/',
		git: 'https://github.com/JavGt/Udemy_Proyecto_10',
		fondo: imgFondo9,
		tecnologias: [...buscarImg('HTML'), ...buscarImg('Sass')],
	},
	{
		id: '10',
		nombre: 'Graphql Api Rick',
		url: 'https://compassionate-bardeen-f1b2ba.netlify.app/',
		git: 'https://github.com/JavGt/GraphqlApiRick',
		fondo: imgFondo10,
		tecnologias: [
			...buscarImg('HTML'),
			...buscarImg('GraphQL'),
			...buscarImg('Sass'),
			...buscarImg('React.js'),
		],
	},
];
