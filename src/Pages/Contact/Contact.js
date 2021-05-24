import React from 'react';
import { homeObjThree } from './Data';
import InfoSection2 from '../../Components/InfoSection/InfoSection2';

const Contact = () => {
	return (
		<div>
			<InfoSection2 {...homeObjThree} />
		</div>
	);
};

export default Contact;
