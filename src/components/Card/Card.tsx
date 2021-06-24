import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div<any>`
	width: ${(props) => (props.big ? "450px" : "300px")};
	padding: 10px;
	transform: translateY(50px);
	transition: 500ms all ease-in-out;
	margin: ${(props) => (props.noMargin ? 0 : "15px")};
	box-shadow: ${(props) =>
		props.shadow ? "0 5px 15px -5px rgba(0, 0, 0, 1)" : ""};
	border-radius: 5px;
	border: ${(props) => (props.border ? "1px solid #DDDDDD" : "")};
`;

export interface CardProps {
	primary?: string;
	big?: boolean;
	image: string;
	children?: React.ReactNode;
}

export const Card1 = (props: CardProps) => {
	const { primary, big, image, children } = props;

	return (
		<StyledCard
			animated={true}
			primary={primary}
			big={big}
			delay={0.5}
			style={{ ...props }}
			{...props}>
			{image && <img src={image} alt="img" style={{ width: "inherit" }} />}
			{children}
		</StyledCard>
	);
};
