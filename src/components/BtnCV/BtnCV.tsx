import styles from './styles/BtnCV.module.scss';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const BtnCV = () => {
	const handleDownload = () => {};
	return (
		<button className={styles.BtnCV} type='button' onClick={handleDownload}>
			<span className={styles.BtnCV__text}>Download CV</span>
			<div className={styles.BtnCV__icon}>
				<AiOutlineCloudDownload />
			</div>
		</button>
	);
};

export default BtnCV;
