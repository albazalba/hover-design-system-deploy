import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'



const animatedCss = css`
    opacity: 1;
    transform: translateY(0);
`

const StyledCard = styled.div`
    width: ${props => (props.big ? '450px' : '300px')};
    padding: 10px;
    transform: translateY(50px);
    transition: 500ms all ease-in-out;
    margin: ${props => (props.noMargin ? 0 : '15px')};
    box-shadow: ${props => (props.shadow ? "0 5px 15px -5px rgba(0, 0, 0, 1)":"")};
    border-radius: 5px;
    border:${props => (props.border ? "1px solid #DDDDDD":"")};

    ${props => props.animated && animatedCss}
`

const Card = ({primary, big, delay,image,children,...props }) => {     
    const [animated, setAnimated] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAnimated(true);
        },props.delay)
    }, []);


        return (
            <StyledCard
                animated={animated}
                primary={primary}
                big={big}
                delay={0.5}
                style={{...props}}
                {...props}
            >
                <img src={image} style={{width:"inherit"}} />
                {children}    
               
            
            </StyledCard>
        )
    }


export default Card
