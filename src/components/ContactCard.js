import React from 'react';


const ContactCard = (props) => {
	const hr_style = {
		width: '26%',
		textAlign: 'left',
		marginLeft: '0',
		height: '1px',
		borderColor: 'tomato',
	}

return (
	 <section className='contact-card'>
		<img src={props.imgUrl} alt={props.alt} width='480' heigth='270'/>
		<h3><a href={props.href} target="_blank">{props.name}</a></h3>
		<p>Phone: {props.phone}</p>
		<p>Email: {props.email}</p>
		<hr style={hr_style}/>
	 </section>
	)

}

export default ContactCard;