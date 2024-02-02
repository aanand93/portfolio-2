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
	buttonLabel2,
	descriptions,
	topLine,
	headline,
	lightText,
	start,
	img,
	alt,
	href1,
	href2,
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
								<Button onClick={() => window.open(href1)} big fontBig>
									{buttonLabel}
								</Button>
								{/* <Button onClick={() => window.open(href2)} big fontBig>
									{buttonLabel2}
								</Button> */}
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
