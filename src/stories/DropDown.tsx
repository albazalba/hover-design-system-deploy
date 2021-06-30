import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

export interface PLACEMENT {
	top: "top";
	bottom: "bottom";
	right: "right";
	left: "left";
}

export interface DropDownProp {
	children?: React.ReactNode;
	content?: React.ReactNode;
	dismissOnClickOutside?: boolean;
	placement?: PLACEMENT[keyof PLACEMENT];
	onClose?: () => any;
	onOpen?: () => any;
}

const ChildComponent = (props: any) => {
	const { handleClick } = props;
	return (
		<div>{React.cloneElement(props.children, { onClick: handleClick })}</div>
	);
};

const CardContent = styled.div`
	position: absolute;
	margin-top: 10px;
	box-shadow: rgb(0 0 0 / 16%) 0px 4px 16px;
	background-color: white;
	padding: 10px;
	transform: translateY(-10px);
	transition: all 0.5s ease-in;
`;

const DropDownContainer = styled.div`
	position: relative;
`;

export const DropDown = (props: DropDownProp) => {
	const { children, content, onClose, onOpen } = props;
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			if (onOpen) {
				onOpen();
			}
		} else {
			if (onClose) {
				onClose();
			}
		}
	}, [open]);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<DropDownContainer>
			<ChildComponent handleClick={handleClick}>{children}</ChildComponent>
			{open && content && <CardContent>{content}</CardContent>}
		</DropDownContainer>
	);
};
