import React from 'react';

export interface HeaderProviderInterface {
	children: React.ReactNode;
}

export const HeaderContext = React.createContext({
	isOpen: false,
	handleOpen: (): void => {},
});

const HeaderProvider: React.FC<HeaderProviderInterface> = ({ children }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleOpen = () => setIsOpen(!isOpen);

	return (
		<HeaderContext.Provider
			value={{
				isOpen,
				handleOpen,
			}}>
			{children}
		</HeaderContext.Provider>
	);
};
export default HeaderProvider;
