import { Listbox, ListboxOption } from "@reach/listbox";
import "@reach/listbox/styles.css";
import { THEME } from "../../theme";
import { CONSTANTS } from "../../constants";
import { NONAME } from "dns";
import styled from "@emotion/styled";
import { Global, css } from '@emotion/react'


export interface ListProp {
	defaultValue?: string;
	options: Option[];
	disabled?: boolean;
	size: string;
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

let List = styled(Listbox)`
	[data-reach-listbox-button] {
		outline: none;
		padding: 7px 12px;
	}
`;

export const Select = (props: ListProp) => {
	let style = {
		fontSize: getFontSize(props.size),
		padding: getPadding(props.size),
	};

	return (
		<>
            <Global
            styles={css`
                [data-reach-listbox-popover] {
                    outline: none;
					line-height: 1;
					padding: 0;
                }
				[data-reach-listbox-popover]:focus-within{
					outline: none;
					box-shadow: none;
				}
				[data-reach-listbox-option]{
					padding: 6px 8px ;
					transition:0.2s ease all;
				}
				[data-reach-listbox-option][data-current-nav] {
					background: ${CONSTANTS.primaryColor};
					color: hsl(0, 0%, 100%);
				}
            `}
            />
			<List
				defaultValue={props.defaultValue}
				disabled={props.disabled}
				style={style}
				onChange={props.onChange}
			>
				{props.options.map((item) => {
					return <ListboxOption value={item.value}>{item.label}</ListboxOption>;
				})}
			</List>
		</>
	);
};
