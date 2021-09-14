import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRef } from "react";

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
	max-width: 300px;
`;

const DropDownContainer = styled.div`
	position: relative;
	display: inline-block;
`;

export const DropDown = (props: DropDownProp) => {
	const { children, content, onClose, onOpen } = props;
	const [open, setOpen] = useState(false);
	const [position, setPosition] = useState("below");
	const [bottom, setBottom] = useState(0);
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(0);

	let list = useRef<HTMLDivElement>(null);
	let container = useRef<HTMLDivElement>(null);

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

		if (list && container) {
			let position = container.current?.getBoundingClientRect();
			console.log(position);

			let listPosition = list.current?.getBoundingClientRect();
			console.log(listPosition);

			if (position && container.current && list.current) {
				// above and below

				let pixelAboveContainer = position.top + container.current.offsetHeight;
				let pixelBelowContainer = window.innerHeight - pixelAboveContainer;

				if (pixelBelowContainer < list.current.offsetHeight) {
					console.log("Position: above");
					setPosition("above");
					setTop(position.top - list.current.offsetHeight + window.scrollY);
				} else {
					console.log("Postion: below");
					setPosition("below");
				}

				// left and right

				let cardWidth = list.current.offsetWidth;
				let pixelAfterContainer = window.innerWidth - position.right;

				if (pixelAfterContainer > cardWidth - container.current.offsetWidth) {
					console.log("Normal");
					setLeft(position.left);
				} else {
					console.log("Move left");
					if (container.current.offsetWidth > list.current.offsetWidth) {
						setLeft(
							position.left -
								(container.current.offsetWidth - list.current.offsetWidth) +
								window.scrollY
						);
					} else {
						console.log("Zero");
						setLeft(
							position.left -
								(list.current.offsetWidth - container.current.offsetWidth)
						);
					}
				}
			}
		}
	}, [open]);

	const handleClick = () => {
		setOpen(!open);
	};

	let style = {};

	if (position == "above") {
		style = {
			position: "absolute",
			backgroundColor: "yellow",
			top: top,
			left: left,
		};
	}

	return (
		<>
			{/* <div> */}
			{/* Just added this part to check if the auto position is working */}
			This is drop down content. This is drop down content. This is drop down
			content. This is drop down content. This is drop down content. This is
			drop down content. This is drop down content. This is drop down content.
			This is drop down content. This is drop down content. This is drop down
			content. This is drop down content. This is drop down content. This is
			drop down content. This is drop down content. This is drop down content.
			This is drop down content. This is drop down content. This is drop down
			content. This is drop down content. This is drop down content. This is
			drop down content. This is drop down content. This is drop down
			content.This is drop down content. This is drop down content. This is drop
			down content. This is drop down content. This is drop down content. This
			is drop down content. This is drop down content. This is drop down
			content. This is drop down content. This is drop down content. This is
			drop down content. This is drop down content. This is drop down content.
			This is drop down content. This is drop down content. This is drop down
			content. This is drop down content. This is drop down content. This is
			drop down content. This is drop down content. This is drop down content.
			This is drop down content. This is drop down content. This is drop down
			content.This is drop down content.This is drop down content. This is drop
			down content. This is drop down content. This is drop down content. This
			is drop down content.This is drop down content.
			{/* </div> */}
			<DropDownContainer ref={container}>
				<ChildComponent handleClick={handleClick}>{children}</ChildComponent>
			</DropDownContainer>
			{open && content && (
				<CardContent style={style} ref={list}>
					{content}
				</CardContent>
			)}
		</>
	);
};
