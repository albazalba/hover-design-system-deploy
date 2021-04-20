import React from "react";
import styled from "@emotion/styled";
import { THEME } from "../theme";
import { CONSTANTS } from "../constants";

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
	rounded?: number | true;
}

const StyledButton = styled.button<ButtonProp>`
	font-size: ${(props) => getFontSize(props.size)};
	padding: ${(props) => getPadding(props.size)};
	border: none;
	outline: none;
	border-radius: ${(props) => getBorderRadiusStyles(props.rounded)};
	color: ${(props) => getFontColor(props.accent)};
	background: ${(props) => getBgColor(props.accent)};
	box-shadow: ${(props) => getBoxShadow(props.accent)};
	&:hover {
		cursor: pointer;
		box-shadow: none;
	}
	&:active {
		box-shadow: ${(props) => getBoxShadow(props.accent)};
	}
`;

function getFontSize(size: any) {
	var value = THEME.fonts.size.default;
	if (size === CONSTANTS.SIZE.default) {
		value = THEME.fonts.size.default;
	} else if (size === CONSTANTS.SIZE.small) {
		value = THEME.fonts.size.small;
	} else if (size === CONSTANTS.SIZE.large) {
		value = THEME.fonts.size.large;
	} else if (size === CONSTANTS.SIZE.xtraLarge) {
		value = THEME.fonts.size.xtraLarge;
	}
	return value;
}

function getPadding(size: any) {
	var value = THEME.padding.button.default;
	if (size === CONSTANTS.SIZE.default) {
		value = THEME.padding.button.default;
	} else if (size === CONSTANTS.SIZE.small) {
		value = THEME.padding.button.small;
	} else if (size === CONSTANTS.SIZE.large) {
		value = THEME.padding.button.large;
	} else if (size === CONSTANTS.SIZE.xtraLarge) {
		value = THEME.padding.button.xtraLarge;
	}
	return value;
}

function getBoxShadow(accent: any) {
	var value = THEME.colors.buttonTextColor.primary;
	if (accent === CONSTANTS.ACCENT.primary) {
		value = THEME.depth.button.primary;
	} else if (accent === CONSTANTS.ACCENT.secondary) {
		value = THEME.depth.button.secondary;
	} else if (accent === CONSTANTS.ACCENT.success) {
		value = THEME.depth.button.success;
	} else if (accent === CONSTANTS.ACCENT.error) {
		value = THEME.depth.button.error;
	}
	return value;
}

function getFontColor(accent: any) {
	var value = THEME.colors.buttonTextColor.primary;
	if (accent === CONSTANTS.ACCENT.primary) {
		value = THEME.colors.buttonTextColor.primary;
	} else if (accent === CONSTANTS.ACCENT.secondary) {
		value = THEME.colors.buttonTextColor.secondary;
	} else if (accent === CONSTANTS.ACCENT.success) {
		value = THEME.colors.buttonTextColor.white;
	} else if (accent === CONSTANTS.ACCENT.error) {
		value = THEME.colors.buttonTextColor.white;
	}
	return value;
}

function getBgColor(accent: any) {
	var value = THEME.colors.buttonBgColor.primary;
	if (accent === CONSTANTS.ACCENT.primary) {
		value = THEME.colors.buttonBgColor.primary;
	} else if (accent === CONSTANTS.ACCENT.secondary) {
		value = THEME.colors.buttonBgColor.secondary;
	} else if (accent === CONSTANTS.ACCENT.success) {
		value = THEME.colors.buttonBgColor.success;
	} else if (accent === CONSTANTS.ACCENT.error) {
		value = THEME.colors.buttonBgColor.error;
	}
	return value;
}

function getBorderRadiusStyles(rounded: any) {
	var value: boolean | string | number = THEME.borders.buttonBorderRadius;
	if (rounded === true) {
		value = THEME.borders.buttonBorderRadius;
	} else if (typeof rounded === "number") {
		value = rounded;
	}

	return value + "px";
}

const Button = (props: ButtonProp) => {
	const { label, variant, accent, size, rounded } = props;
	return (
		<StyledButton
			variant={variant}
			accent={accent}
			rounded={rounded}
			size={size}>
			{label}
		</StyledButton>
	);
};

export default Button;
