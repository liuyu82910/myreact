import React from 'react';


const Header = () => {
	return(
		<nav className='navbar'>
			<header>this is a new kind of app</header>
			<ul>
				<li><a href='http://localhost:3000'>Home</a></li>
				<li><a href='#products'>Products</a></li>
				<li><a href='#contact'>Contact</a></li>
				<li><a href='#history'>History</a></li>
				<li><a href='#about'>About</a></li>
			</ul>
		</nav>
		);
}

export default Header;