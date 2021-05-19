import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	HamburgerIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavItemBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	const [button, setButton] = useState(true);
	const [click, setClick] = useState(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const handleClick = () => {
		setClick(!click);
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

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
							<NavItemBtn>
								{button ? (
									<NavBtnLink to='/sign-up'>
										<Button primary>Sign Up</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to='/sign-up'>
										<Button fontBig primary>
											Sign Up
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</div>
	);
};

export default Navbar;
