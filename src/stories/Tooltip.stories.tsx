import React from 'react';

import Tooltip from './Tooltip';
import {Story, Meta} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';
import styled from '@emotion/styled';
import {ToolTipProps} from './Tooltip';

const Container = styled.div`
  max-width: 400px;
  height: 500px;
`;
export default {
  title: 'Example/Tooltip',
  component: Tooltip,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

const Template: Story<ToolTipProps> = (args) => {
  return (
    <Tooltip {...args}>
      <h1>hello</h1>
    </Tooltip>
  );
};

export const PrimaryList = Template.bind({});
PrimaryList.args = {
  isOpen: 'true',
  content: 'tooltip ',
  direction: 'top',
};
