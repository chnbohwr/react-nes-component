# React NES Component

this is a 8 bit style component

!(screenshoot)[./screenshoot/component.png]

### Doc
https://chnbohwr.github.io/react-nes-component/

### requirement

- React 16.4^

### Download from NPM

```
npm install react-nes-component
```

### How to use

```javascript
import React from 'react';
import { render } from 'react-dom';
import {FontFace, Button, Container} from 'react-nes-component';

const Main = () => (
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
        <div>Good morning. Thou hast had a good nights sleep, I hope.</div>
      </Container>
      <br />
      <div style={{ display: 'flex' }}>
        <Container isRounded style={{ width: 300 }}>
          <div>Good morning. Thou hast had a good nights sleep, I hope.</div>
        </Container>
        <Container isDark isRounded title="Super easy">
          <div>Good morning. Thou hast had a good nights sleep, I hope.</div>
        </Container>
      </div>


    </Container>
  </div>
);

render(<Main />, document.getElementById('app'));

```
