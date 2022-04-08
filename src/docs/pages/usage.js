import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import Code from '../components/code';
import { name } from '../config';

const codes = [
  {
    title: '1. Installation',
    code: `npm install ${name} --save`,
    type: 'text',
  },
  {
    title: '2. install modules before DOM render',
    code: `import Gtag from 'lesca-gtag';
    
Gtag.install('your-gtag-id');  // get your id => https://analytics.google.com/analytics/web/`,
    type: 'js',
  },
  {
    title: '3. page view',
    code: `import Gtag from 'lesca-gtag';
    
Gtag.pv('your-page-name');`,
    type: 'js',
  },
  {
    title: '4. event',
    code: `import Gtag from 'lesca-gtag';

function onClick() {
  Gtag.event('your-page-name', 'action-name');
}`,
    type: 'js',
  },
];

const Usage = () => {
  useEffect(() => {}, []);
  return (
    <div className='Usage'>
      <h2>Usage</h2>
      {codes.map((e) => (
        <div key={e.title}>
          <h3>{e.title}</h3>
          <Code code={e.code} theme={e.type} />
        </div>
      ))}
      <ButtonGroup variant='contained'>
        <Button>click</Button>
      </ButtonGroup>
    </div>
  );
};
export default Usage;
