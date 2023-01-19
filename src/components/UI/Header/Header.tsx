import './Header.scss';
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
	return (
		<div className='header'>
			<div className='container header__content'>
				<div className='header__logo'>
					Javier <span>Gutierrez</span>
				</div>

				<div>¡Pagina en construcción!</div>
			</div>
		</div>
	);
};

export default Header;
