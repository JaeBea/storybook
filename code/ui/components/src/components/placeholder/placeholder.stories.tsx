import React, { Fragment } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Placeholder } from './placeholder';
import { Link } from '../typography/link/link';

export default {
  component: Placeholder,
} as Meta<typeof Placeholder>;

type Story = StoryFn<typeof Placeholder>;

export const SingleChild: Story = () => (
  <Placeholder>This is a placeholder with single child, it's bolded</Placeholder>
);

export const TwoChildren: Story = () => (
  <Placeholder>
    <Fragment key="title">This has two children, the first bold</Fragment>
    <Fragment key="desc">
      The second normal weight. Here's a&nbsp;
      <Link href="https://storybook.js.org" secondary cancel={false}>
        link
      </Link>
    </Fragment>
  </Placeholder>
);
