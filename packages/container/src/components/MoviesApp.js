import { mount } from 'movies/Movies';
import React, { useRef, useEffect } from 'react';

export default () => {
	const ref = useRef(null);

	console.log('test');
	useEffect(() => {
		mount(ref.current);
	});

	return <div ref={ref}></div>;
};
