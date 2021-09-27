import React, { Children } from 'react';
import {Story, Meta} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';
import styled from "@emotion/styled"
import {List as ListComponent, ListItem, ListProps,ListItemIcon, List, ListItemText} from '../../components/List/List';
import {FiCheck} from 'react-icons/fi';
import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {BiMessageAltDetail} from 'react-icons/bi'
import reportWebVitals from '../../reportWebVitals';
import { homedir } from 'os';

export default {
  title: 'Design system/Components/List',
  component: ListComponent,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta;

const Template: Story<ListProps> = (args) => {
  return (
    <Wrapper>
      <ListComponent {...args}>
      </ListComponent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width:100%;
  /* border:1px solid gray */
`

export const VerticalList = Template.bind({});
VerticalList.args = {
  lists: [
    {
      primaryText:" Home",
      secondaryText: "secondary text",
      icon: <AiFillHome/>,
      hoverEffect: true
    },
    {
      primaryText:"Account",
      secondaryText: "secondary text",
      icon: <MdAccountCircle />,
      hoverEffect: true,
      disabled: true
    },
    {
      primaryText:"Settings",
      secondaryText: "secondary text",
      icon: <AiFillSetting />,
      hoverEffect: true
    },
    {
      primaryText:"Support",
      secondaryText: "secondary text",
      icon: <BiMessageAltDetail />,
      hoverEffect: true
    }
  ],
};


export const HorizontalList = Template.bind({});
HorizontalList.args = {
  size: 'large',
  alignment: 'horizontal',
  lists: [
    {
      primaryText:" Home",
      icon: <AiFillHome/>,
      hoverEffect: true
    },
    {
      primaryText:"Account",
      icon: <MdAccountCircle />,
      hoverEffect: true,
      disabled: true
    },
    {
      primaryText:"Settings",
      icon: <AiFillSetting />,
      hoverEffect: true
    },
    {
      primaryText:"Support",
      icon: <BiMessageAltDetail />,
      hoverEffect: true
    }
  ],
};

