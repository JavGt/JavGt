import facebook from '@src/assets/images/socialNetworks/facebook_icon.png';
import instagram from '@src/assets/images/socialNetworks/instagram_icon.png';
import twitter from '@src/assets/images/socialNetworks/twitter_icon.png';
import linkedin from '@src/assets/images/socialNetworks/linkedin_icon.png';
import github from '@src/assets/images/socialNetworks/github_icon.png';

import { SocialNetwork } from '@src/interfaces';

const socialsNetworks: SocialNetwork[] = [
	{
		alt: 'Facebook',
		url: 'https://www.facebook.com/JavGttz/',
		image: facebook,
	},
	{
		alt: 'Instagram',
		url: 'https://www.instagram.com/jav_gttz.exe/',
		image: instagram,
	},
	{
		alt: 'Twitter',
		url: 'https://twitter.com/Jav_Gttz',
		image: twitter,
	},
	{
		alt: 'Linkedin',
		url: 'https://www.linkedin.com/in/francisco-javier-b%C3%A1ez-guti%C3%A9rrez-01091420b/',
		image: linkedin,
	},
	{
		alt: 'Github',
		url: 'https://github.com/JavGt',
		image: github,
	},
];

export { socialsNetworks };
