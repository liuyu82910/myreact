import React from 'react';
import ReactDOM from 'react-dom';
import MyInfo from './components/MyInfo';
import MyApp from './components/MyApp';
import Contact from './components/Contact';
// import TheApp from './components/TheApp';
import Apps from './components/TheApp';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const myfirstelement = <ol>
// <li>Hello React </li>
// <li>Hello Dom </li>
// <li>Hello JS </li>
// </ol>

// function YourApp() {
// 	return (
// 	 	<ul>
// 			<li>Hello Python</li>
// 			<li>Hello Django</li>
// 			<li>Hello Selenium</li>
// 	    </ul>
// 	    );
// }


ReactDOM.render(
<Apps />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
