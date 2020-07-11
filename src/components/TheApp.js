import React from 'react';
import Joke from './Joke';
import jokesData from '../jokesData';

const Apps = () => {
	const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} 
		punchline={joke.punchline} />)

	return (
		<div>
			{jokeComponents}
		</div>
		)
};
const TheApp = () => {
	return(
		<div>
			<Joke punchline='its hard to explain puns to kleptomaniacs because they always take things literally.'/>
			<Joke 
				question='Whats the best thing about Switzerland?'
				punchline='Idk, but the flag is a big plus'/>
			<Joke 
				question='Did you hear about the mathematician whos afraid of negative numbers' 
				punchline='He is going to stop at nothing to avoid them.'/>
			<Joke 
				question='Here about the new restaurant called Karma' 
				punchline='There is no menu, you get what you deserve.'/>
			<Joke 
				question='Did you hear about the actor who fell thru the floorboards' 
				punchline='He was just going thru a stage.'/>
			<Joke 
				question='Did you hear about the claustrophobic astronaut' 
				punchline='He just needed a little space.'/>
		</div>
		)
}

// export default TheApp;
export default Apps;