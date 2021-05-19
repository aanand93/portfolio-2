import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	HamburgerIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from './NavbarElements';

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<div>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to='/'>
							<NavIcon />
							Alex Anand
						</NavLogo>
						<HamburgerIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</HamburgerIcon>
						<NavMenu onclick={handleClick} click={click}>
							<NavItem>
								<NavLinks to='/'>Home</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='/projects'>Projects</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='/contact'>Contact</NavLinks>
							</NavItem>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</div>
	);
};

export default Navbar;
