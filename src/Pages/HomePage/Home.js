import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import InfoSection from '../../Components/InfoSection/InfoSection';
import InfoSection2 from '../../Components/InfoSection/InfoSection2';
import InfoSection3 from '../../Components/InfoSection/InfoSection3';

const Home = () => {
	return (
		<div>
			<InfoSection3 {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<InfoSection2 {...homeObjThree} />
		</div>
	);
};

export default Home;
