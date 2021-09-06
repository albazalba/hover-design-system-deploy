import React, { useState } from "react";
import { Listbox, ListboxOption } from "@reach/listbox";
import "@reach/listbox/styles.css";
import { SIZE } from "../components/Button";
import { THEME } from "../theme";
import { CONSTANTS } from "../constants";

export interface ListProp {
	defaultValue?: string;
	values: string[];
	disabled?: boolean;
	size: SIZE;
	options: Option[];
	onChange?: (value: string) => void;
	onBlur?: () => void;
	id?: number;
}

interface Option {
	value: string;
	label: string;
}

function getFontSize(size: any) {
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

export const List = (props: ListProp) => {
	let style = {
		fontSize: getFontSize(props.size),
		padding: getPadding(props.size),
	};
	return (
		<>
			<Listbox
				defaultValue={props.defaultValue}
				disabled={props.disabled}
				style={style}

				// To do code not working
				// onChange={props.onChange}
				// onBlur={props.onBlur}
			>
				{props.values.map((item: any) => (
					<ListboxOption value={item.value}>{item.label}</ListboxOption>
				))}
			</Listbox>
		</>
	);
};
