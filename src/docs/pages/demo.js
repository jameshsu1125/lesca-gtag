import { Button, ButtonGroup, Link } from '@mui/material';
import { useEffect } from 'react';
import Gtag from '../../lib';

Gtag.install('UA-20404972-1');

const Demo = () => {
  useEffect(() => {
    Gtag.pv('Demo');
  }, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <p>
        <Link
          target='_blank'
          href='https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna'
        >
          Check it with Chrome extension
        </Link>
      </p>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            Gtag.event('Demo', 'button');
          }}
        >
          add event
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
