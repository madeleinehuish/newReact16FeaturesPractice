// Ryan Florence from React Router example

import React, { useState, useEffect } from 'react';

function useMedia(query) {
	let [matches, setMatches] = useState(
		window.matchMedia(query).matches
	)

	//componentDidMount, componentDidUpdate
	useEffect(() => {
		let media = window.matchMedia(query);
		if(media.matches !== matches) {
			setMatches(media.matches)
		}
		let listener = () => setMatches(media.matches);
		media.addListener(listener);
		return () => media.removeListener(listener);
	}, [query])

	return matches;
}

function MediaApp() {
	let small = useMedia("(max-width: 400px)");
	let large = useMedia("(min-width: 800px)");
	return (
		<div style={{ marginLeft: '50px'}}>
			<h1>Media</h1>
			<p>
				Small? {small ? "Yep" : "Nope"}.
			</p>
			<p>
				Large? {large ? "Yep" : "Nope"}.
			</p>
		</div>
	)
}

export default MediaApp;
