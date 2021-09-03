import React, { Children, ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react'
import { THEME } from "../../theme";
import { CONSTANTS } from "../../constants";
// import {MdDelete} from 'react-icons/md'
// import {rgba} from "../components/Helper";

export interface ACCENT {
	primary: "primary";
	secondary: "secondary";
	error: "error";
	info: "info";
	success: "success";
	warning: "warning";
}

// instead of VARIANT why cant we use SHAPE

export interface VARIANT {
	solid: "solid";
	light: "light";
	dark: "dark";
	hallow: "hallow";
	ghost: "ghost";
	block:"block";
	// iconRight: "iconRight"; we cant put iconRight and iconLeft here. what if i need pill button right icon ?
	// iconLeft: "iconLeft"; ""
	// iconOnly: "iconOnly"; ""
}

// type - should find an alternate name for typ coz there is submit, reset,button

export interface SIZE {
	default: "default";
	small: "small";
	large: "large";
	xtraLarge: "xtraLarge";
}

export interface ButtonProps {
	label?: string;
	accent?: ACCENT[keyof ACCENT];
	type?: "submit" | "reset" | "button";
	variant?: VARIANT[keyof VARIANT];
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	icon?: React.ReactNode;
	isLoading?: boolean;
	disabled?: boolean;
	size?: SIZE[keyof SIZE];
	rounded?: number | true;
	fullWidth?: boolean | undefined;
	Children?: any;
	style?:any;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

const StyledButton = styled.button<ButtonProps>`
	
	/* min-width: 100px; */
	display: flex;
	position: relative;
	height: ${(props) => props.icon ? "40px" : "auto"};
	width: ${(props) => getWidth(props.fullWidth, props.icon)};
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	transition: all 500ms ease; 
	font-size: ${(props) => getFontSize(props.size)};
	font-weight: 600;
	padding: ${(props) =>getPadding(props.size, props.icon)};
	border: ${(props) => props.variant === "hallow" ? "1px solid black" : "none" };
	border-radius: ${(props) => getBorderRadiusStyles(props.rounded, props.icon)};
	outline: none;
	color: ${(props) => getFontColor(props.accent)};
	background: ${(props) => getBgColor(props.accent)};
	opacity: ${(props) => getOpacity(props.disabled, props.isLoading)};
	&:hover {
		box-shadow: inset 0 0 0 100em rgb(0 0 0 / 10%);
		cursor: ${(props) => getCursor(props.disabled, props.isLoading)};
	}
	&:active {
	}
	img {
		height:15px;
		/* padding-left: 10px; */
		padding-right: 10px;
	}
	.start-icon{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: ${(props) => !props.startIcon ? "auto" : "5px"} ;
		/* font-size: 18px; */
	}
	.end-icon{
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: ${(props) =>  !props.endIcon ? "auto" : "5px"} ;
		/* font-size: 18px; */
	}
	.icon{
		display: flex;
		align-items: center;
		border-radius: 50%;
		font-size: 18px;
	}
	.is-loading{
	/* position: absolute; */
	margin-right:10px ;
	width: 12px;
	height: 12px;
	/* margin: auto; */
	border: 2px solid transparent;
	border-top-color: #ffffff;
	border-radius: 50%;
	animation: button-loading-spinner 1s ease infinite;
	}

	@keyframes button-loading-spinner {
		from {
			transform: rotate(0turn);
		}

		to {
			transform: rotate(1turn);
		}
	}
	
${(props) => getVariant(props.variant, props.color, props.accent)};
	`

function getOpacity(disabled:any, isLoading:any){
	var value = "1";
	if(isLoading === true){
		value= "0.5";
	} else if(disabled === true){
		value="0.5";
	}
	return value
}

function getCursor(disabled:any, isLoading:any){
	var value="pointer";
	if (disabled){
		value="not-allowed"
	} else if (isLoading) {
		value="not-allowed"
	}
	return value;
}

function getVariant(variant: string | undefined, color: string | undefined, accent: string | undefined){
	return (
		variant === "light" ?
			css`	
				border: 1px solid ${CONSTANTS.borderColor};
				background-color: ${CONSTANTS.lightColor};
				color: ${color
						? color
						: THEME.colors.primary && accent === "secondary"
						? THEME.colors.secondary
						: THEME.colors.primary && accent === "error"
						? THEME.colors.error
						: THEME.colors.primary && accent === "info"
						? THEME.colors.info
						: THEME.colors.primary && accent === "warning"
						? THEME.colors.warning
						: THEME.colors.primary && accent === "success"
						? THEME.colors.success
						: THEME.colors.primary};
				&:hover{
					box-shadow: inset 0 0 0 100em ${color
						? color
						: CONSTANTS.primaryHover && accent === "secondary"
						? CONSTANTS.secondaryHover
						: CONSTANTS.primaryHover && accent === "error"
						? CONSTANTS.errorHover
						: CONSTANTS.primaryHover && accent === "info"
						? CONSTANTS.infoHover
						: CONSTANTS.primaryHover && accent === "warning"
						? CONSTANTS.warningHover
						: CONSTANTS.primaryHover && accent === "success"
						? CONSTANTS.successHover
						: CONSTANTS.primaryHover};;
				}
				
			`
		:variant === "hallow" ?
			css`	
				border: 1px solid
					${color
						? color
						: THEME.colors.primary && accent === "secondary"
						? THEME.colors.secondary
						: THEME.colors.primary && accent === "error"
						? THEME.colors.error
						: THEME.colors.primary && accent === "info"
						? THEME.colors.info
						: THEME.colors.primary && accent === "warning"
						? THEME.colors.warning
						: THEME.colors.primary && accent === "success"
						? THEME.colors.success
						: THEME.colors.primary};
				background-color: transparent;
				color: ${color
						? color
						: THEME.colors.primary && accent === "secondary"
						? THEME.colors.secondary
						: THEME.colors.primary && accent === "error"
						? THEME.colors.error
						: THEME.colors.primary && accent === "info"
						? THEME.colors.info
						: THEME.colors.primary && accent === "warning"
						? THEME.colors.warning
						: THEME.colors.primary && accent === "success"
						? THEME.colors.success
						: THEME.colors.primary};
				&:hover{
					box-shadow: inset 0 0 0 100em ${color
						? color
						: CONSTANTS.primaryHover && accent === "secondary"
						? CONSTANTS.secondaryHover
						: CONSTANTS.primaryHover && accent === "error"
						? CONSTANTS.errorHover
						: CONSTANTS.primaryHover && accent === "info"
						? CONSTANTS.infoHover
						: CONSTANTS.primaryHover && accent === "warning"
						? CONSTANTS.warningHover
						: CONSTANTS.primaryHover && accent === "success"
						? CONSTANTS.successHover
						: CONSTANTS.primaryHover}
				}
				
			` 
			: variant === "ghost" ? 
				css`	 
					background-color: transparent;
					color: ${color
							? color
							: THEME.colors.primary && accent === "secondary"
							? THEME.colors.secondary
							: THEME.colors.primary && accent === "error"
							? THEME.colors.error
							: THEME.colors.primary && accent === "info"
							? THEME.colors.info
							: THEME.colors.primary && accent === "warning"
							? THEME.colors.warning
							: THEME.colors.primary && accent === "success"
							? THEME.colors.success
							: THEME.colors.primary};
					&:hover{
						box-shadow: inset 0 0 0 100em ${color
								? color
								: CONSTANTS.primaryHover && accent === "secondary"
								? CONSTANTS.secondaryHover
								: CONSTANTS.primaryHover && accent === "error"
								? CONSTANTS.errorHover
								: CONSTANTS.primaryHover && accent === "info"
								? CONSTANTS.infoHover
								: CONSTANTS.primaryHover && accent === "warning"
								? CONSTANTS.warningHover
								: CONSTANTS.primaryHover && accent === "success"
								? CONSTANTS.successHover
								: CONSTANTS.primaryHover};;
							}	
			` 
			: null
	);
}

function getWidth( fullWidth: any, icon: any) {
	var value = "auto";
	if (fullWidth === true){
		value = "100%";
	} else if (fullWidth === false) {
		value ="auto"
	} else if (icon) {
		value = "40px"
	}
	return value ;
}

function getFontSize(size: any) {
	console.log("size",size)
	var value = THEME.font.fontSize.default;
	if (size === THEME.font.fontSize.default) {
		value = THEME.font.fontSize.default;
	} else if (size === CONSTANTS.SIZE.small) {
		value = THEME.font.fontSize.sm;
	} else if (size === CONSTANTS.SIZE.large) {
		value = THEME.font.fontSize.lg;
	} else if (size === CONSTANTS.SIZE.xtraLarge) {
		value = THEME.font.fontSize.xl;
	}
	return value;
}

function getPadding(size: any, icon: any) {
	var value = THEME.padding.default;
	if (size === CONSTANTS.SIZE.default) {
		value = THEME.padding.default;
	} else if (size === CONSTANTS.SIZE.small) {
		value = THEME.padding.sm;
	} else if (size === CONSTANTS.SIZE.large) {
		value = THEME.padding.lg;
	} else if (size === CONSTANTS.SIZE.xtraLarge) {
		value = THEME.padding.xl;
	} else if (icon) {
		value = "auto"
	}
	return value;
}

// function getBoxShadow(accent: any) {
// 	var value = THEME.colors.buttonTextColor.primary;
// 	if (accent === CONSTANTS.ACCENT.primary) {
// 		value = THEME.depth.button.primary;
// 	} else if (accent === CONSTANTS.ACCENT.secondary) {
// 		value = THEME.depth.button.secondary;
// 	} else if (accent === CONSTANTS.ACCENT.success) {
// 		value = THEME.depth.button.success;
// 	} else if (accent === CONSTANTS.ACCENT.error) {
// 		value = THEME.depth.button.error;
// 	}
// 	return value;
// }

function getFontColor(accent: any) {
	var value = THEME.colors.buttonColorPrimary;
	if (accent === CONSTANTS.ACCENT.primary) {
		value = THEME.colors.buttonColorPrimary;
	} else if (accent === CONSTANTS.ACCENT.secondary) {
		value = THEME.colors.buttonColorSecondary;
	} else if (accent === CONSTANTS.ACCENT.success) {
		value = THEME.colors.buttonColorPrimary;
	} else if (accent === CONSTANTS.ACCENT.error) {
		value = THEME.colors.buttonColorPrimary;
	}
	return value;
}

function getBgColor(accent: any) {
	var value = THEME.colors.primary;
	if (accent === CONSTANTS.ACCENT.primary) {
		value = THEME.colors.primary;
	} else if (accent === CONSTANTS.ACCENT.secondary) {
		value = THEME.colors.secondary;
	} else if (accent === CONSTANTS.ACCENT.success) {
		value = THEME.colors.success;
	} else if (accent === CONSTANTS.ACCENT.error) {
		value = THEME.colors.error;
	} else if ( accent === CONSTANTS.ACCENT.disabled){
		value = THEME.colors.secondary;
	} else if (accent === CONSTANTS.ACCENT.info){
		value = THEME.colors.info;
	} else if (accent === CONSTANTS.ACCENT.warning){
		value = THEME.colors.warning;
	}
	return value;
}

function getBorderRadiusStyles(rounded: any, icon: any) {
	var value: boolean | string | number = THEME.borderRadius.default;
	if (rounded === true){
		value = "18px";
	} else if (typeof rounded === "number") {
		value = rounded+"px";
	} else if (icon) {
		value= "50%"
	}

	return value;
}



export const Button = (props: ButtonProps) => {
	const { label, variant, accent, size, rounded, startIcon, endIcon, icon, disabled, fullWidth, style, onClick, isLoading } = props;
	return (
		<StyledButton
			variant={variant}
			accent={accent}
			disabled={disabled}
			rounded={rounded}
			size={size}
			startIcon={startIcon}
			endIcon={endIcon}
			icon ={icon}
			fullWidth={fullWidth}
			onClick={onClick}
			isLoading={isLoading}
			style={style}>
			{isLoading && <span className="is-loading"></span>}	
			{startIcon && <span className="start-icon">{startIcon}</span>}
			{label}
			{icon && <span className="icon">{icon}</span>}
			{endIcon && <span className="end-icon">{endIcon}</span>}
		</StyledButton>
	);
};








