import React from 'react';
import styled from '@emotion/styled';

// export interface CardProps {
//   heading: string;
//   summary: string;
//   imgsrc: string;
//   shadows: boolean;
//   button: string;
//   line: string;
// }
// type shadows = {
//   box?: 'red' | 'green';
// };
export const Container = styled.div`
  background: ${(props) => (props.background === 'true' ? '#1AB5EB' : '')};
  box-shadow: ${(props) =>
    props.boxshadow === 'true' ? ' 0px 0px 10px rgba(0, 0, 0, 0.15)' : ''};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: ${(props) => (props.color === 'true' ? '#000' : '#fff')};
  border: ${(props) => (props.border === 'true' ? '1px solid #DDDDDD' : '')};
  width: 284px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Heading = styled.h2`
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  margin: 0;
`;
export const Summary = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: normal;
`;
export const Division = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background: blue;
  color: white;
`;

const Card = ({
  heading,
  summary,
  imgsrc,
  button,
  border,
  boxshadow,
  background,
  color,
}) => (
  <Container
    border={border}
    boxshadow={boxshadow}
    background={background}
    color={color}
  >
    <Image src={imgsrc} />

    <Layout>
      <Copy>
        <Heading>{heading}</Heading>
        <Summary>{summary}</Summary>
      </Copy>
      <Division>{button}</Division>
    </Layout>
  </Container>
);

export default Card;
