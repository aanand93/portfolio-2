import React from 'react';
import { Container, Button } from '../../globalStyles';
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
} from './InfoSectionElements';

const InfoSection = ({
	primary,
	lightBg,
	imgStart,
	lightTopLine,
	lightTextDesc,
	buttonLabel,
	descriptions,
	topLine,
	headline,
	lightText,
	start,
	img,
	alt,
	href,
}) => {
	return (
		<div>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>
									{descriptions}
								</Subtitle>
								<Button onClick={() => window.open(href)} big fontBig>
									{buttonLabel}
								</Button>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</div>
	);
};

export default InfoSection;
