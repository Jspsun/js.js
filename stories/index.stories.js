import React from 'react';
import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import SimpleOrbitPlanet from '../src/components/doodles/Planet';

storiesOf('Doodles', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('simple orbit planet', () => <SimpleOrbitPlanet />);
