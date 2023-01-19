import { Technology } from '@/types';
import './Tabs.scss';
import technologies from '@/data/skills.json';
import Tab from '../Tab/Tab';
import { WrapperSlider } from '@/components/wrappers/WrapperSlider';

export interface TabsProps {
	technologies: Technology[];
}

const Tabs = ({ technologies }: TabsProps) => {
	return (
		<div className='tabs'>
			<h1 className='container__title'>Skills</h1>

			<WrapperSlider>
				<div className='tabs__content'>
					{technologies.map(technology => (
						<Tab technology={technology} key={technology.name} />
					))}
				</div>
			</WrapperSlider>
		</div>
	);
};

Tabs.defaultProps = {
	technologies: technologies.skills,
};

export default Tabs;
