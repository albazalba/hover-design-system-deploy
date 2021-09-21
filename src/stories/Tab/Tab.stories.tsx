import React from 'react';
import {Story, Meta} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';
import {TabProps} from '../../components/Tabs/Tab';
import TabBarWithRender from '../../components/Tabs/Tab';

export default {
  title: 'In progress/Tab',
  component: TabBarWithRender,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta;

const Template: Story<TabProps> = (args) => <TabBarWithRender {...args} />;

export const PrimaryList = Template.bind({});
PrimaryList.args = {
  tabs: [
    {
      title: 'Tab one',
      content: ' Content Two renders here! Lorem ipsum dolor sit amet',
    },
    {
      title: 'Tab Two',
      content: ' Content oo renders here! Lorem ipsum dolor sit amet',
    },
    {
      title: 'Tab Three',
      content: ' Content ao renders here! Lorem ipsum dolor sit amet',
    },
  ],
};
