import React from 'react';
import Capture1 from '../Capture1.JPG';
import Capture2 from '../Capture2.JPG';
import Capture4 from '../Capture4.JPG';
import ContactCard from './ContactCard';
import '../style.css';

const Contact = () => {

	return (
		<div className='contact'>
		 <ContactCard 
			 name='This is Sculpture Park'
			 imgUrl={Capture1}
			 href='http://www.seattleartmuseum.org/visit/olympic-sculpture-park'
			 alt='Sculpture Park'
			 phone='206-258-3365'
			 email='sculpture@seattle.gov'
		 />
		 <ContactCard 
		 	 name='This is Kerry Park'
		 	 imgUrl={Capture2}
		 	 href='https://www.seattle.gov/parks/find/parks/kerry-park'
		 	 alt='Kerry Park'
		 	 phone='206-258-3560'
		 	 email='kerry@seattle.gov'
		 />
		 <ContactCard 
		 	 name='This is Lake Washington'
		 	 imgUrl={Capture4}
		 	 href='https://www.seattleandsound.com/lake-washington/'
		 	 alt='Lake Washington'
		 	 phone='206-258-9915'
		 	 email='lakewashington@seattle.gov'
		 />
		</div>
		);
}

export default Contact;