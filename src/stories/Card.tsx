import styled from "@emotion/styled";

export interface CardProps {
	children?: React.ReactNode;
	headerImage?: string;
	thumbnail?: string;
	title?: React.ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {
	const { children, title, headerImage } = props;

	return (
		<CardContainer hasImage={headerImage ? true : false}>
			{headerImage && (
				<div className="img-container">
					<img alt="header" src={headerImage} />
				</div>
			)}
			{title && <CardTitle>{title}</CardTitle>}
			{children}
		</CardContainer>
	);
};

export const StyledBody = (props: any) => {
	const { children } = props;
	return <StyledBody.Container>{children}</StyledBody.Container>;
};

export const StyledAction = (props: any) => {
	const { children } = props;
	return <StyledAction.Container>{children}</StyledAction.Container>;
};

StyledAction.Container = styled.div`
	margin: 16px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const CardTitle = styled.div`
	margin: 16px;
	font-weight: 500;
	font-size: 24px;
`;

const CardContainer = styled.div<{ hasImage: boolean }>`
	border: 1px solid #e2e2e2;
	position: relative;
	.img-container {
		width: 100%;
		img {
			width: 100%;
		}
	}
`;

StyledBody.Container = styled.div`
	line-height: 24px;
	font-size: 16px;
	margin: 0 16px 16px 16px;
`;
