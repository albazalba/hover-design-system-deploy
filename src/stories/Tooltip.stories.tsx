import React from 'react';

import Tooltip from './Tooltip';

import {withDesign} from 'storybook-addon-designs';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 400px;
  height: 500px;
`;
export default {
  title: 'Example/Tooltip',
  component: Tooltip,
  decorators: [withDesign],
  args: {},
};

const Template = (args: any) => <Tooltip {...args} />;

export const Tip = Template.bind({});
Tip.args = {
  isOpen: 'true',
  content: 'tooltip ',
  direction: 'top',
};
