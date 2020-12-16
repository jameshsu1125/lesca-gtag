import React from 'react';
import { render } from 'react-dom';
import Gtag from './../lib/index';

import './styles.css';

Gtag.install('UA-20404972-1');

function pv() {
	Gtag.pv('title');
}

function evt() {
	Gtag.event('title', 'label');
}

function Demo() {
	return (
		<>
			<button onClick={pv}>send page view</button>
			<button onClick={evt}>send event</button>
		</>
	);
}

render(<Demo />, document.getElementById('app'));
