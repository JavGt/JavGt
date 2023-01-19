import { Technology } from '@/types';
import './Tab.scss';

export interface TabInterface {
	technology: Technology;
}

const Tab: React.FC<TabInterface> = ({ technology }) => {
	return (
		<div className='tab'>
			<img className='tab__image' src={technology.image} alt={technology.name} />
			<span className='tab__name'>{technology!.name}</span>
		</div>
	);
};

export default Tab;
