import styles from './styles/NotFound.module.scss';

export interface NotFoundInterface {}

const NotFound: React.FC<NotFoundInterface> = () => {
	return (
		<div className={styles.NotFound}>
			<div className={styles.NotFound__content}>
				<h1 className={styles.NotFound__title}>404</h1>
				<h2 className={styles.NotFound__description}>Page not found</h2>
			</div>
		</div>
	);
};

export default NotFound;
