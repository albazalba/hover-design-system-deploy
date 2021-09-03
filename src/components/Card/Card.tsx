import styled from "@emotion/styled";
import { CONSTANTS } from "../../constants";
import { THEME } from "../../theme";

export interface CardProps {
	children?: React.ReactNode;
	headerImage?: string;
	thumbnail?: string;
	title?: React.ReactNode;
    isElavated?: boolean;
}

export interface CardMediaProps {
    image?: any;
    title?: string;
}

export interface CardHeaderProps {
    title?: string;
    subheader?: string;
    style?: any;
}

export const Card: React.FC<CardProps> = (props) => {
	const { children, isElavated } = props;

	return (
		<CardContainer isElavated={isElavated}>
			{children}
		</CardContainer>
	);
};

const CardContainer = styled.div<CardProps>`
	border: 1px solid #e2e2e2;
    box-shadow: ${(props) => props.isElavated === true ? "0 4px 8px 0 rgba(0,0,0,0.2)" : "none" };
	position: relative;
`;

export const CardHeader = (props: CardHeaderProps) => {
    const { title, subheader, style } = props;
    return <CardHeader.Container><span className="title">{title}</span><span className="subheader">{subheader}</span></CardHeader.Container>
};

CardHeader.Container = styled.div`
    display: flex;
    flex-flow: column;
    margin: 10px 16px 10px 16px;
    .title{
	    font-weight: 600;
	    font-size: 24px;
    }
    .subheader{
        font-size: 15px;
        color: ${CONSTANTS.secondaryColor};
        font-weight: 400;
    }
`

export const CardMedia = (props: CardMediaProps) => {
     const { image, title } = props;
     return <CardMedia.Container><img src={image} title={title} /></CardMedia.Container> 
};

CardMedia.Container = styled.div`
    img{
        max-height: 250px;
        object-fit: cover;
        width:100%;
    }
`;

export const CardBody = (props: any) => {
	const { children } = props;
	return <CardBody.Container>{children}</CardBody.Container>;
};

CardBody.Container = styled.div`
	line-height: 24px;
	font-size: 16px;
	margin: 0 16px 16px 16px;
`;

export const CardAction = (props: any) => {
	const { children } = props;
	return <CardAction.Container>{children}</CardAction.Container>;
};

CardAction.Container = styled.div`
	margin: 16px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;





