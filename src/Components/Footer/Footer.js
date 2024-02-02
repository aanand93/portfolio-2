import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
	FooterContainer,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

const Footer = () => {
	return (
		<FooterContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to='/'>
						<SocialIcon />
						Alex Anand
					</SocialLogo>
					<WebsiteRights>Alex Anand © 2020</WebsiteRights>
					<SocialIcons>
						{/* <SocialIconLink
							href={'https://twitter.com/alex_codes44'}
							target='_blank'
							aria-label='Twitter'>
							<FaTwitter />
						</SocialIconLink> */}
						<SocialIconLink
							href={'https://github.com/aanand93'}
							target='_blank'
							aria-label='GitHub'>
							<FaGithub />
						</SocialIconLink>
						<SocialIconLink
							href={'https://www.linkedin.com/in/alexanderanand/'}
							target='_blank'
							aria-label='LinkedIn'>
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
