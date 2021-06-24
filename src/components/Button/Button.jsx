import React from "react";
import { tokens } from "./Tokens";
import styled, { css } from "styled-components";
import {rgba} from "../Helper";

const StyledButton = styled.button`
  border-radius: ${tokens.borderRadius.default};
  background-color: ${tokens.colors.primary};
  color: ${(props) =>
    props.secondary
      ? tokens.colors.buttonColorSecondary
      : tokens.colors.buttonColorPrimary};
  padding: ${tokens.spacing.default} ${tokens.spacing.lg};
  font-size: ${(props) => {
    if (props.big) return "20px";
    return `${tokens.font.fontSize.default}`;
  }};
  display: ${(props) => (props.block==="block" ? "block" : "")};
  width: ${(props) => (props.block==="block" ? "100%" : "")};
  &:hover {
        box-shadow: inset 0 0 0 100em rgb(0 0 0 / 10%);
  }
  &:focus {
    box-shadow: 0 0 0 3px ${rgba(tokens.colors.primary , 0.5)} ;
}
  outline: none;
  border: none;
  cursor: pointer;
  ${(props) => {
    return (
      props.disabled &&
      css`
        :disabled {
          opacity: 0.4;
          pointer-events: none;
        }
      `
    );
  }}


  ${(props) => {
    return (
      props.rounded &&
      css`
        border-radius: ${props.rounded + "px"};
      `
    );
  }}
  ${(props) => {
    return (
      props.size === "small" &&
      css`
        padding: ${tokens.spacing.sm };
        font-size:${tokens.font.fontSize.sm};
      `
    );
  }}
  ${(props) => {
    return (
      props.size === "medium" &&
      css`
        padding: ${tokens.spacing.lg};
        font-size:${tokens.font.fontSize.lg};
      `
    );
  }}
  ${(props) => {
    return (
      props.size === "large" &&
      css`
        padding: ${tokens.spacing.xl};
        font-size:${tokens.font.fontSize.xl};
      `
    );
  }}
  ${(props) => {
    return (
      props.size &&
      css`
        padding: ${props.size/2 + "px"} ${props.size + "px"};
        font-size:${props.size + "px"};
      `
    );
  }}

${(props) => {
    return (
      props.accent === "secondary" &&
      css`
        background: ${tokens.colors.secondary};
        color: ${tokens.colors.buttonColorSecondary};
      `
    );
  }};
  ${(props) => {
    return (
      props.accent === "primary" &&
      css`
        background: ${tokens.colors.primary};
        color: #fff;
      `
    );
  }};
  ${(props) => {
    return (
      props.accent === "warning" &&
      css`
        background: ${tokens.colors.warning};
        color: #fff;
      `
    );
  }};
  ${(props) => {
    return (
      props.accent === "success" &&
      css`
        background: ${tokens.colors.success};
        color: #fff;
      `
    );
  }};
  ${(props) => {
    return (
      props.accent === "info" &&
      css`
        background: ${tokens.colors.info};
        color: #fff;
      `
    );
  }};
  ${(props) => {
    return (
      props.accent === "error" &&
      css`
        background: ${tokens.colors.error};
        color: #fff;
      `
    );
  }};
  ${(props) => {
    return (
      props.type === "light" &&
      css`

      color: ${
        props.color
        ? props.color
        : "#fff"
      };
        border: 1px solid ${props.color
          ? props.color
          : tokens.colors.primary && props.accent === "secondary"
          ? tokens.colors.secondary
          : tokens.colors.primary && props.accent === "error"
          ? tokens.colors.error
          : tokens.colors.primary && props.accent === "info"
          ? tokens.colors.info
          : tokens.colors.primary && props.accent === "warning"
          ? tokens.colors.warning
          : tokens.colors.primary && props.accent === "success"
          ? tokens.colors.success
          : tokens.colors.primary};`
    );
  }};
  ${(props) => {
    return (
      props.type === "ghost" &&
      css`
        background: ${tokens.colors.transaprantBackground};
        color: ${
          props.color
          ? props.color
          : tokens.colors.primary && props.accent === "secondary"
          ? tokens.colors.secondary
          : tokens.colors.primary && props.accent === "error"
          ? tokens.colors.error
          : tokens.colors.primary && props.accent === "info"
          ? tokens.colors.info
          : tokens.colors.primary && props.accent === "warning"
          ? tokens.colors.warning
          : tokens.colors.primary && props.accent === "success"
          ? tokens.colors.success
          : tokens.colors.primary
        };
        border:none;
      `
    );
  }};
  ${(props) => {
    return (
      props.type === "hallow" &&
      css`
        background: ${tokens.colors.transaprantBackground};
        color: ${props.color
          ? props.color
          : tokens.colors.primary && props.accent === "secondary"
          ? tokens.colors.secondary
          : tokens.colors.primary && props.accent === "error"
          ? tokens.colors.error
          : tokens.colors.primary && props.accent === "info"
          ? tokens.colors.info
          : tokens.colors.primary && props.accent === "warning"
          ? tokens.colors.warning
          : tokens.colors.primary && props.accent === "success"
          ? tokens.colors.success
          : tokens.colors.primary};
        border: 1px solid
          ${props.color
            ? props.color
            : tokens.colors.primary && props.accent === "secondary"
            ? tokens.colors.secondary
            : tokens.colors.primary && props.accent === "error"
            ? tokens.colors.error
            : tokens.colors.primary && props.accent === "info"
            ? tokens.colors.info
            : tokens.colors.primary && props.accent === "warning"
            ? tokens.colors.warning
            : tokens.colors.primary && props.accent === "success"
            ? tokens.colors.success
            : tokens.colors.primary};
      `
    );
  }}
`;

const Button = ({ secondary, big, ...props }) => {
  return (
    <StyledButton
      secondary={secondary}
      big={big}
      {...props}
      style={{ ...props }}
      onClick={(e) => props.onClick(e)}
    >
      {props.lable}
    </StyledButton>
  );
};

export default Button;
