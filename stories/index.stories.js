import React from 'react';
import { storiesOf } from '@storybook/react';
import StyledComponent from '../src/components/StyledComponent';


storiesOf('components', module)
  .add('styled component', () => <StyledComponent />);
