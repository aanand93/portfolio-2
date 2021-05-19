import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import InfoSection from '../../Components/InfoSection/InfoSection';

const Home = () => {
	return (
		<div>
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
		</div>
	);
};

export default Home;
