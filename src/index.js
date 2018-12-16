import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { FontFace, Button, Container, Input } from './components';

const Demo = () => (
  <div>
    <FontFace />
    <div>
      <Button>Normal</Button>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </div>
    <br />
    <Container title="Container">
      <Container>hi this is container</Container>
      <br />
      <Container isDark>
        <div>hi this is dark container</div>
      </Container>
      <br />
      <Container isDark isRounded>
        <div>Good morning. Thou hast had a good night's sleep, I hope.</div>
      </Container>
      <br />
      <div style={{ display: 'flex' }}>
        <Container isRounded style={{ width: 300 }}>
          <div>Good morning. Thou hast had a good night's sleep, I hope.</div>
        </Container>
        <Container isDark isRounded title="Super easy">
          <div>Good morning. Thou hast had a good night's sleep, I hope.</div>
        </Container>
      </div>
      <Input />

    </Container>
  </div>
);

const Main = hot(module)(Demo);

render(<Main />, document.getElementById('app'));
