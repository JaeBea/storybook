import { addons } from '@storybook/manager-api';
import { startCase } from 'lodash-es';

addons.setConfig({
  sidebar: {
    renderLabel: ({ name, type }) => (type === 'story' ? name : startCase(name)),
  },
});
