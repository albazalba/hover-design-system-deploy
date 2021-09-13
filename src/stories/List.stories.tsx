import React, { Children } from 'react';
import {Story, Meta} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';
import styled from "@emotion/styled"
import {List as ListComponent, ListItem, ListProps,ListItemIcon, List, ListItemText} from '../components/List/List';
import {FiCheck} from 'react-icons/fi';
import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {BiMessageAltDetail} from 'react-icons/bi'
import reportWebVitals from '../reportWebVitals';
import { homedir } from 'os';

export default {
  title: 'Components/List',
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
  children: (
      <>
        <ListItem hoverEffect>
          <ListItemIcon>
            <AiFillHome/>
          </ListItemIcon>
          <ListItemText style={{color:"blue"}} primary="Home" secondary="secondary text" />
          
        </ListItem>
        <ListItem hoverEffect disabled>
          <ListItemIcon>
            <MdAccountCircle />
          </ListItemIcon>
          <ListItemText primary="Account" secondary="secondary text" />
        </ListItem> 
        <ListItem hoverEffect> 
          <ListItemIcon>
            <AiFillSetting />
          </ListItemIcon>
          <ListItemText primary="Settings" secondary="secondary text" />
        </ListItem>
        <ListItem hoverEffect>
          <ListItemIcon>
            <BiMessageAltDetail />
          </ListItemIcon>
          <ListItemText primary="Support" secondary="secondary text" />
        </ListItem>
      </>
  )
};


export const HorizontalList = Template.bind({});
HorizontalList.args = {
  size: 'large',
  alignment: 'horizontal',
  children: (
    <>
      <ListItem hoverEffect>
        <ListItemIcon>
          <AiFillHome/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem hoverEffect>
        <ListItemIcon>
          <MdAccountCircle />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem> 
      <ListItem hoverEffect> 
        <ListItemIcon>
          <AiFillSetting />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem hoverEffect>
        <ListItemIcon>
          <BiMessageAltDetail />
        </ListItemIcon>
        <ListItemText primary="Support" />
      </ListItem>
    </>
)
};

