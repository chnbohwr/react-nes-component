import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import Button from './components/Button';
import FontFace from './components/FontFace';
import Container from './components/Container';

const Demo = () => (
  <div>
    <FontFace />
    <Button>Normal</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <Container>hi this is container</Container>
    <Container title="hello world" isDark>
      <div>hi this is dark container</div>
    </Container>

    <Container title="hello world" isDark isRounded>
      <div>Good morning. Thou hast had a good night's sleep, I hope.</div>
    </Container>

    <Container isRounded title="spider man" style={{width: 300}}>
      <div>Good morning. Thou hast had a good night's sleep, I hope.</div>
    </Container>

  </div>
);

const Main = hot(module)(Demo);

render(<Main />, document.getElementById('app'));
