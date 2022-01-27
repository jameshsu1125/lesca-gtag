import { render } from 'react-dom';
import { Navation, Code } from './components';
import Gtag from '../lib';
import Demo from './demo';

import './styles.less';

const homepage = 'https://github.com/jameshsu1125/lesca-gtag';
const name = 'lesca-gtag';
const description = 'simple add gtag';

Gtag.install('UA-20404972-1');

const Page = () => {
	return (
		<>
			<Navation />
			<div className='content'>
				<div>
					<h1>{name}</h1>
					<figcaption>{description}</figcaption>
				</div>
				<div>
					<h2>install</h2>
					<Code code={`npm install ${name} --save`} theme='markup' />
				</div>
				<div>
					<Demo />
				</div>
				<div>
					<h2>Usage</h2>
					<a href={homepage}>Documentation</a>
				</div>
			</div>
		</>
	);
};

render(<Page />, document.getElementById('app'));
