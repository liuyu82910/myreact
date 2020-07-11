import React from 'react';
import TodoItem from './TodoItem'

const Main = () => {
	let name = 'Larry';
	let occupation = 'Gastroenterologist';
	let country = 'USA';

	const date = new Date();

	let hours = date.getHours();
	let timeOfDay;

	let mon = date.getMonth();
	let monOfYear;

	const timeStyle = {
		fontFamily: 'Times',
	}
	const monthStyle = { 
		fontFamily: 'Helvetica', 
		color: 'white',
	}

	if (hours < 12) {
		timeOfDay = 'morning';
		timeStyle.color = 'green';
	}
	else if (hours >= 12 && hours <= 17) {
		timeOfDay = 'afternoon';
		timeStyle.color = 'purple';
	} 
	else {
		timeOfDay = 'evening';
		timeStyle.color = 'olive';
	};

	if (mon >= 2 && mon <= 4) {
		monOfYear = 'spring';
		monthStyle.backgroundColor = 'violet';
	}
	else if (mon >= 5 && mon <= 8) {
		monOfYear = 'summer';
		monthStyle.backgroundColor = '#81D8D0';
	}
	else if (mon >= 9 && mon <= 11) {
		monOfYear = 'fall';
		monthStyle.backgroundColor = 'khaki';
	}
	else {
		monOfYear = 'winter';
		monthStyle.backgroundColor = 'lightseagreen';
	}
	return(
	 <div>
	 	<section>
			<h2>{`${name} is a ${occupation.toLowerCase()} from ${country}.`}</h2>
			<p>{`${date.toLocaleString()}`}</p>
			<h4 style={timeStyle}>Good {timeOfDay.charAt(0).toUpperCase() + timeOfDay.substr(1).toLowerCase()}!</h4>
			<h4 style={monthStyle}>It is {monOfYear.charAt(0).toUpperCase() + monOfYear.substr(1).toLowerCase()}.</h4>
		</section>
		<main className='todo-list'>
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</main>
	 </div>
		);
};

export default Main;