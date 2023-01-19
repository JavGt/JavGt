// Proyectos
import proyecto1 from '@/assets/image/projects/1.png';
import proyecto2 from '@/assets/image/projects/2.png';
import proyecto3 from '@/assets/image/projects/3.png';
import proyecto4 from '@/assets/image/projects/4.png';
import proyecto5 from '@/assets/image/projects/5.png';
import proyecto6 from '@/assets/image/projects/6.png';
import proyecto7 from '@/assets/image/projects/7.png';
import proyecto8 from '@/assets/image/projects/8.png';
import proyecto9 from '@/assets/image/projects/9.png';
import proyecto10 from '@/assets/image/projects/10.png';
import proyecto11 from '@/assets/image/projects/11.png';
import proyecto12 from '@/assets/image/projects/12.png';

// Technologies
import imgHtml from '@/assets/image/skills/Skill_html.png';
import imgCss from '@/assets/image/skills/Skill_css.png';
import imgJs from '@/assets/image/skills/Skill_js.png';
import imgSass from '@/assets/image/skills/Skill_sass.png';
import imgReact from '@/assets/image/skills/Skill_react.png';
import imgGulp from '@/assets/image/skills/Skill_gulp.png';
import imgGit from '@/assets/image/skills/Skill_git.png';
import imgPhp from '@/assets/image/skills/Skill_php.png';
import imgMysql from '@/assets/image/skills/Skill_mysql.png';
import imgNpm from '@/assets/image/skills/Skill_npm.png';
import imgNode from '@/assets/image/skills/Skill_node.png';
import imgGraphql from '@/assets/image/skills/Skill_graphql.png';

import { Project, Technology } from '@/types';

export const technologies: { [key: string]: Technology } = {
	HTML: {
		_id: '1',
		name: 'HTML',
		image: imgHtml,
	},
	CSS: {
		_id: '2',
		name: 'CSS',
		image: imgCss,
	},
	JAVASCRIPT: {
		_id: '3',
		name: 'JavaScript',
		image: imgJs,
	},
	SASS: {
		_id: '4',
		name: 'Sass',
		image: imgSass,
	},
	REACT: {
		_id: '5',
		name: 'React.js',
		image: imgReact,
	},
	GULP: {
		_id: '6',
		name: 'Gulp.js',
		image: imgGulp,
	},
	GIT: {
		_id: '7',
		name: 'Git',
		image: imgGit,
	},
	PHP: {
		_id: '8',
		name: 'PHP',
		image: imgPhp,
	},
	MYSQL: {
		_id: '9',
		name: 'MySQL',
		image: imgMysql,
	},
	NPM: {
		_id: '10',
		name: 'npm',
		image: imgNpm,
	},
	NODEJS: {
		_id: '11',
		name: 'Node.Js',
		image: imgNode,
	},
	GRAPHQL: {
		_id: '12',
		name: 'GraphQL',
		image: imgGraphql,
	},
};

export const projects: Project[] = [
	{
		_id: '1',
		name: 'Proyecto 1',
		image: proyecto1,
		technologies: [technologies.HTML, technologies.CSS, technologies.JAVASCRIPT],
	},
	{
		_id: '2',
		name: 'Proyecto 1',
		image: proyecto1,
		technologies: [technologies.HTML, technologies.CSS, technologies.JAVASCRIPT],
	},
	{
		_id: '3',
		name: 'Proyecto 1',
		image: proyecto1,
		technologies: [technologies.HTML, technologies.CSS, technologies.JAVASCRIPT],
	},
];
