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

export const CardMedia = (props: CardMediaProps) => {
     const { image, title } = props;
     return <CardMedia.Container><img src={image} title={title} /></CardMedia.Container> 
};

export const CardHeader = (props: CardHeaderProps) => {
    const { title, subheader, style } = props;
    return (
    <CardHeader.Container>
        <span className="title">{title}</span><span className="subheader">{subheader}</span>
    </CardHeader.Container>
    )
};

export const CardBody = (props: any) => {
	const { children } = props;
	return <CardBody.Container>{children}</CardBody.Container>;
};

export const CardAction = (props: any) => {
	const { children } = props;
	return <CardAction.Container>{children}</CardAction.Container>;
};

const CardContainer = styled.div<CardProps>`
	border: 1px solid #e2e2e2;
    box-shadow: ${(props) => props.isElavated === true ? "0 4px 8px 0 rgba(0,0,0,0.2)" : "none" };
	position: relative;
`;

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


CardMedia.Container = styled.div`
    img{
        max-height: 250px;
        object-fit: cover;
        width:100%;
    }
`;

CardBody.Container = styled.div`
	line-height: 24px;
	font-size: 16px;
	margin: 0 16px 16px 16px;
`;

CardAction.Container = styled.div`
	margin: 16px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;





