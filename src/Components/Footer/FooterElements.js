import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GrReactjs } from 'react-icons/gr';

export const FooterContainer = styled.div`
	background-color: #101522;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

export const SocialIcon = styled(GrReactjs)`
	margin-right: 10px;
`;

export const WebsiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
	padding: 10px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60px;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
`;
