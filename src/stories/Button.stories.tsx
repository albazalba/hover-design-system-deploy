import React from 'react';
import {Story, Meta} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';
import {MdDelete} from 'react-icons/md'
import {Button, ButtonProps} from '../components/ButtonUpdated/Button1';

export default {
	title: "Components/Button",
	component: Button,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" }
	}
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />; 

export const Primary = Template.bind({});
Primary.args = {
  accent: 'primary',
  label: 'Button',
};

Primary.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/cOnIxpJzyQUUrcN8flCymY/Untitled?node-id=1%3A2',
    allowFullscreen: true,
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  accent: 'secondary',
  label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  accent: 'success',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: 'xtraLarge',
  label: 'Button',
};

export const StartIcon = Template.bind({});
StartIcon.args ={
  startIcon: <MdDelete />,
  label: 'Button'
};

export const EndIcon = Template.bind({});
EndIcon.args ={
  endIcon: <MdDelete />,
  label: 'Button'
};

export const Icon = Template.bind({});
Icon.args = {
  icon: <MdDelete />,
  variant: "ghost"
}

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading",
  variant: "solid",
  isLoading:true
}