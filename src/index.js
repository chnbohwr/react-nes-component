import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import Button from './components/Button';
import FontFace from './components/FontFace';

const Demo = () => (
  <div>
    <FontFace />
    <Button>Normal</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
);

const Main = hot(module)(Demo);

render(<Main />, document.getElementById('app'));
