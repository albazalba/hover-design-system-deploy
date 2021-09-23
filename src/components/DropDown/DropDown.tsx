import styled from '@emotion/styled';
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuPopover,
    MenuLink,
  } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { ReactNode } from 'react';
import {CONSTANTS} from '../../constants'

export interface DropDownProps {
    list?: any;
    buttonName?: any;
    buttonIcon?:any;
    children?: ReactNode;
    buttonStyle?: any;
    menuListStyle?: any;
}

export const DropDown = (props: DropDownProps) => {
    console.log(props);
    return (
        <Menu>
            <MenuButton style={props.buttonStyle}>
            {props.buttonName}
            {props.buttonIcon && <span style={{paddingLeft:"10px"}} aria-hidden>{props.buttonIcon}</span>}
            </MenuButton>
            <DropDownList style={props.menuListStyle}>
            {props.list.map((list: any) => (
                    <MenuItem  onSelect={list.onSelect} style={list.menuItemStyle} >
                        {list.label}
                    </MenuItem>   
            ))}
            </DropDownList>
        </Menu>
    );
  }

  const DropDownList = styled(MenuList)`
    > [data-reach-menu-item][data-selected] {
        background: ${CONSTANTS.primaryColor};
        color: white;
    }
`