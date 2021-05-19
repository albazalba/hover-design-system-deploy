import React from "react";
import styled from "@emotion/styled";
import { THEME } from "../theme";
import { CONSTANTS } from "../constants";
import {rgba} from "./Helper";

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
	light: "light";
	hallow: "hallow";
	ghost: "ghost";
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

interface ButtonProp {
	label?: string;
	accent?: ACCENT[keyof ACCENT];
	type?: "submit" | "reset" | "button";
	variant?: VARIANT[keyof VARIANT];
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	isLoading?: boolean;
	disabled?: boolean;
	size?: SIZE[keyof SIZE];
	rounded?: number | true |String;
}

const StyledButton = styled.button<ButtonProp>`
	font-size: ${(props) => getFontSize(props.size)};
	padding: ${(props) => getPadding(props.size)};
	border: none;
	outline: none;
	border-radius: ${(props) => getBorderRadiusStyles(props.rounded)};
	color: ${(props) => getFontColor(props.accent)};
	background: ${(props) => getBgColor(props.accent)};
	&:hover {
        box-shadow: inset 0 0 0 100em rgb(0 0 0 / 10%);
		cursor: pointer;
  }
  &:focus {
    box-shadow: 0 0 0 3px ${rgba(THEME.colors.primary , 0.5)} ;
}
	&:active {
		
	}
`;

function getFontSize(size: any) {
	console.log("size",size)
	var value = THEME.font.fontSize.default;
	if (size == THEME.font.fontSize.default) {
		value = THEME.font.fontSize.default;
	} else if (size == THEME.font.fontSize.sm) {
		value = THEME.font.fontSize.sm;
	} else if (size == THEME.font.fontSize.lg) {
		value = THEME.font.fontSize.lg;
	} else if (size == THEME.font.fontSize.xl) {
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

// function getBoxShadow(accent: any) {
// 	var value = THEME.colors.buttonColorPrimary;
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
	}
	return value;
}

function getBorderRadiusStyles(rounded: any) {
	var value: boolean | string | number = THEME.borderRadius.default;
	if (rounded === true){
		value = THEME.borderRadius.default;
	} else if (typeof rounded === "number") {
		value = rounded;
	}

	return value;
}

const Button = (props: ButtonProp) => {
	const { label, variant, accent, size, rounded } = props;
	return (
		<StyledButton
			variant={variant}
			accent={accent}
			rounded={rounded}
			size={size}
			 {...props} >
			{label}
		</StyledButton>
	);
};

export default Button;
