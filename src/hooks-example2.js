//from Dan Abramov's video...

import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext2 } from './theme-context';

const hooksExample2 = () => {
	const firstName = useFormInput('Madeleine');
	const lastName = useFormInput('Huish');
	const theme = useContext(ThemeContext2);
	const width = useWindowWidth();
	useDocumentTitle(firstName.value + ' ' + lastName.value);

	return (
		<section style={{ marginLeft: '50px'}}>
			<div label="first name">
				<input {...firstName} />
			</div>
			<div label="last name">
				<input {...lastName} />
			</div>
			<div label="width" style={{ marginLeft: '50px'}}>
				Window width is : {width}
			</div>
			<span style={{ marginLeft: '20px'}}>
				current name is : {firstName.value}&nbsp;{lastName.value}
			</span>
			<div style={{
				backgroundColor: theme.background,
				width: theme.size,
				border: theme.border,
				margin: theme.margin
			}}>Check out my context color!</div>
		</section>
	)
}

//'custom hook' function (should always start with 'use')
function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleResize);
		return () => {          //can do cleanup in return function from useEffect
			window.removeEventListener('resize', handleResize);
		}
	})
	return width;
}

function useDocumentTitle(title) {
	useEffect(() => {
		document.title = title;
	})
}

function useFormInput(initialValue) {
	const [value, setValue] = useState(initialValue);
	function handleChange(e) {
		setValue(e.target.value);
	}
	return {
		value,
		onChange: handleChange
	}
}

export default hooksExample2;

// // //this is the original before using custom hooks
// const hooksExample2 = () => {
// 	const [firstName, setFirstName] = useState('Madeleine');
// 	const [lastName, setLastName] = useState('Huish');
// 	const theme = useContext(ThemeContext2);
// 	const width = useWindowWidth();
// 	useEffect(() => {
// 		document.title = title;
// 	})
//
// 	// commented these out as this was original version for changing document title without custom hook
// 	useEffect(() => {
// 		document.title = firstName + ' ' + lastName;
// 	})
//
// 	useEffect(() => {
// 		const handleResize = () => setWidth(window.innerWidth)
// 		window.addEventListener('resize', handleResize);
// 		return () => {          //can do cleanup in return function from useEffect
// 			window.removeEventListener('resize', handleResize);
// 		}
// 	})
//
// 	function handleFirstNameChange(e) {
// 		setFirstName(e.target.value);
// 	}
//
// 	function handleLastNameChange(e) {
// 		setLastName(e.target.value)
// 	}
//
// 	return (
// 		<section style={{ marginLeft: '50px'}}>
// 			<div label="first name">
// 				<input value={firstName} onChange={handleFirstNameChange} />
// 			</div>
// 			<div label="last name">
// 				<input value={lastName} onChange={handleLastNameChange} />
// 			</div>
// 			<div label="width" style={{ marginLeft: '50px'}}>
// 				Window width is : {width}
// 			</div>
// 			<span style={{ marginLeft: '20px'}}>
// 				current name is : {firstName}&nbsp;{lastName}
// 			</span>
// 			<div style={{
// 				backgroundColor: theme.background,
// 				width: theme.size,
// 				border: theme.border,
// 				margin: theme.margin
// 			}}>Check out my context color!</div>
// 		</section>
// 	)
// }
