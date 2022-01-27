import { useEffect } from 'react';
import { Code } from './components';
import Gtag from '../lib';

const code1 = `import Gtag from 'lesca-gtag';

Gtag.pv('Home'); // page view increase 'Home' page.
`;

const code2 = `import Gtag from 'lesca-gtag';

const click = () => {
	Gtag.event('Home', 'button_1'); // increase 'Home' page with 'button_1' category;
};
`;

const code3 = `<button onClick={click}>add event</button>`;

const Demo = () => {
	useEffect(() => {
		Gtag.pv('Home');
	}, []);

	const click = () => {
		Gtag.event('Home', 'button_1');
	};

	return (
		<>
			<h2>add page view</h2>
			<Code code={code1} />

			<h2>add event</h2>
			<Code code={code2} />
			<Code code={code3} theme='html' />
			<button onClick={click}>add event</button>
		</>
	);
};
export default Demo;
