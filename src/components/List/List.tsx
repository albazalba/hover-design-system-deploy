import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { THEME } from "../../theme";
import { CONSTANTS } from "../../constants";
import { valueScaleCorrection } from "framer-motion/types/render/dom/projection/scale-correction";
// import { rgba } from "../components/Helper";


export interface SIZE {
	default: "default";
	small: "small";
	large: "large";
	xtraLarge: "xtraLarge";
}

export interface List {
	ul: ListProps;
	li: ListItemProps;
}

export interface ListProps {
	size?: SIZE[keyof SIZE] | any;
	children?: any;
	alignment?: "horizontal" | "vertical";
	style?:any;
}

export interface ListItemProps {
	hoverEffect?: boolean;
	size?: SIZE[keyof SIZE] | any;
	children?: any;
	disabled?: boolean;
	style?:any;
	onClick?: (event: React.MouseEvent<HTMLLIElement>) => any;
}

export interface ListItemTextProps {
	children?: any;
	primary?: string;
	secondary?: string;
	style?: any
}

export interface ListItemIconProps {
	children?: any
}

const StyledList = styled.ul<ListProps>`
	list-style: decimal;
	display: flex;
	text-align: center;
	flex-direction: ${(props) => getAlignment(props.alignment)};
	font-size: ${(props) => getSize(props.size)};
	margin:0;
	padding:0;

	img {
		width: ${(props) => getImageSize(props.size)};
		vertical-align: middle;
	}

	li {
		padding: ${(props) => getPadding(props.size)};
	}
`;

const StyledListItem = styled.li<ListItemProps>`
	/* width: 100%; */
    display: flex;
	flex: 1;
	flex-wrap: wrap;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    text-decoration: none;
	cursor: ${(props) => (props.disabled ? "not-allowed" : getCursor(props.hoverEffect))};
	opacity:${(props) => (props.disabled ? "0.5" : "1")};
	&:hover{
	 box-shadow: ${(props) => (props.hoverEffect ? getHoverEffect(props.disabled, props.hoverEffect) : "none") } ;
	}	
`;

function getHoverEffect(disabled:any, hoverEffect:any){
	var value="none";
	if(hoverEffect && !disabled){
		value="inset 0 0 0 100em rgb(0 0 0 / 10%)";
	} else if(hoverEffect===true && disabled===true){
		value="none";
	}
	return value;
}

function getCursor(hoverEffect: any) {
	var value = "mouse";
	if(hoverEffect){
		value = "pointer";
	} else if (hoverEffect === false){
		value = "mouse";
	}
	return value;
}

function getImageSize(size: any) {
	var value = THEME.font.fontSize.default;
	if (size == CONSTANTS.SIZE.default) {
		value = THEME.font.fontSize.default;
	} else if (size == CONSTANTS.SIZE.small) {
		value = THEME.font.fontSize.sm;
	} else if (size == CONSTANTS.SIZE.large) {
		value = THEME.font.fontSize.lg;
	} else if (size == CONSTANTS.SIZE.xtraLarge) {
		value = THEME.font.fontSize.xl;
	}
	return value;
}

function getSize(size: any) {
	var value = THEME.font.fontSize.default;
	if (size == CONSTANTS.SIZE.default) {
		value = THEME.font.fontSize.default;
	} else if (size == CONSTANTS.SIZE.small) {
		value = THEME.font.fontSize.sm;
	} else if (size == CONSTANTS.SIZE.large) {
		value = THEME.font.fontSize.lg;
	} else if (size == CONSTANTS.SIZE.xtraLarge) {
		value = THEME.font.fontSize.xl;
	}
	return value;
}

function getPadding(size: any) {
	var value = THEME.spacing.default;
	if (size === CONSTANTS.SIZE.default) {
		value = THEME.spacing.default;
	} else if (size === CONSTANTS.SIZE.small) {
		value = THEME.spacing.sm;
	} else if (size === CONSTANTS.SIZE.large) {
		value = THEME.spacing.lg;
	} else if (size === CONSTANTS.SIZE.xtraLarge) {
		value = THEME.spacing.xl;
	}
	return value;
}

function getListStyle(type: any) {
	var value = "none";
	console.log(type);
	if (type === CONSTANTS.TYPE.number) {
		value = "decimal";
	} else if (type === CONSTANTS.TYPE.roman) {
		value = "upper-roman";
	} else if (type === CONSTANTS.TYPE.bullet) {
		value = "disc";
	}
	return value;
}
function getAlignment(alignment: any) {
	var value = "column";
	if (alignment === "horizontal") {
		value = "row";
	}
	return value;
}

function getFontColor(accent: any) {
	var value = THEME.colors.black;
	if (accent === CONSTANTS.ACCENT.primary) {
		value = THEME.colors.black;
	} else if (accent === CONSTANTS.ACCENT.secondary) {
		value = THEME.colors.gray[500];
	} else if (accent === CONSTANTS.ACCENT.image) {
		value = THEME.colors.blue[500];
	}
	return value;
}

// ul or ol
export const List = (props: ListProps) => {
	return (
		<StyledList {...props}>
			{/* {props.children.map((c: any) => {
				if (typeof props.type === "string") {
					return c;
				} else {
					return (
						<div style={{ display: "flex", alignItems: "center" }}>
							{props.type}
							{c}
						</div>
					);
				}
			})} */}
			{props.children}
		</StyledList>
	);
};

// li
export const ListItem = (props: ListItemProps) => {
	return (
		<StyledListItem {...props}>
			{props.children}
		</StyledListItem>
	);
};

export const ListItemIcon = (props: ListItemIconProps) => {
	return <StyledListItemIcon {...props}>{props.children}</StyledListItemIcon>
}

const StyledListItemIcon =styled.div`
	display: flex;
	justify-content: center;
	color:rgba(0, 0, 0, 0.54);
	padding-right:16px;
	font-size: 20px;
`

export const ListItemText: React.FC<ListItemTextProps>= (props) => {
	const {children, primary, secondary, style} = props
	return <StyledListItemText>
		<span className="primary-text">{primary}</span>
		<span className="secondary-text">{secondary}</span>
	</StyledListItemText>
}

const StyledListItemText = styled.div`
	font-size: 1rem;
	display: flex;
	flex-flow: column;
	.primary-text{
		font-size: 16px;
	}
	.secondary-text{
		font-size: 14px;
		color:grey
	}
`