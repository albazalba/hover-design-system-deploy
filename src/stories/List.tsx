import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { THEME } from "../theme";
import { CONSTANTS } from "../constants";
import { rgba } from "../components/Helper";

export interface ACCENT {
	primary: "primary";
	secondary: "secondary";
	image: "image";
}

export interface SIZE {
	default: "default";
	small: "small";
	large: "large";
	xtraLarge: "xtraLarge";
}

export interface VARIANT {
	solid: "solid";
	light: "light";
	dark: "dark";
	hallow: "hallow";
	ghost: "ghost";
}

export interface List {
	ul: ListProps;
	li: ListItemProps;
}

export interface ListProps {
	size?: SIZE[keyof SIZE] | any;
	variant?: VARIANT[keyof VARIANT];
	type?: "number" | "roman" | "bullet" | "image" | ReactNode;
	accent?: ACCENT[keyof ACCENT];
	children?: any;
	imageUrl?: string;
	alignment?: "horizontal" | "vertical";
	imageSize?: string;
}

export interface ListItemProps {
	size?: SIZE[keyof SIZE] | any;
	variant?: VARIANT[keyof VARIANT];
	accent?: ACCENT[keyof ACCENT];
	children?: any;
	imageUrl?: string;
}

const StyledList = styled.ul<ListProps>`
	color: ${(props) => getFontColor(props.accent)};
	list-style: ${(props) => getListStyle(props.type)};
	display: flex;
	flex-direction: ${(props) => getAlignment(props.alignment)};
	font-size: ${(props) => getSize(props.size)};

	img {
		width: ${(props) => getImageSize(props.size)};
		vertical-align: middle;
	}

	li {
		padding: ${(props) => getPadding(props.size)};
	}
`;

const StyledListItem = styled.li<ListItemProps>``;

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
	const orderedType = ["roman", "number"];
	const ordered =
		props.type &&
		typeof props.type === "string" &&
		orderedType.includes(props.type)
			? true
			: false;
	return (
		<StyledList as={ordered ? "ol" : "ul"} {...props}>
			{props.children.map((c: any) => {
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
			})}
		</StyledList>
	);
};

// li
export const ListItem = (props: ListItemProps) => {
	return (
		<StyledListItem {...props}>
			{props.imageUrl && <img src={props.imageUrl} />}
			{props.children}
		</StyledListItem>
	);
};
