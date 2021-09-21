import React from 'react';

import Tooltip from '../../components/Tooltip/Tooltip';
import {Story, Meta} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';
import styled from '@emotion/styled';
import {ToolTipProps} from '../../components/Tooltip/Tooltip';

const Container = styled.div`
  max-width: 400px;
  height: 500px;
`;
export default {
  title: 'In progress/Tooltip',
  component: Tooltip,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

const Template: Story<ToolTipProps> = (args) => {
  return (
    <Tooltip {...args}>
      <h1>ToolTip</h1>
    </Tooltip>
  );
};

export const PrimaryList = Template.bind({});
PrimaryList.args = {
  isOpen: 'true',
  content: 'tooltip ',
  direction: 'top',
};
