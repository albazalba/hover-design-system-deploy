import React from 'react';
import {storiesOf} from '@storybook/react';
import {CardProps} from './Card';
import Card from './Card';

import {Story, Meta} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 400px;
  height: 500px;
`;
export default {
  title: 'Example/Card',
  component: Card,
  decorators: [withDesign],
  argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Shadow = Template.bind({});
Shadow.args = {
  heading: 'Hello',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus.',

  button: 'Submit',
  imgsrc:
    'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  border: 'true',
  boxshadow: 'true',
  background: 'false',

  color: 'true',
};
