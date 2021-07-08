import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import React, {useState} from 'react';

export interface ToolTipProps {
  children?: any;
  direction?: string;
  content?: string;
  isOpen?: boolean | any;
}
const Tooltip = (props: any) => {
  let timeout: any;
  const [active, setActive] = useState(false);
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 200);
  };
  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <>
      {!props.isOpen ? (
        <SideBarToolTip
          isOpen={props.isOpen}
          showTip={showTip}
          hideTip={hideTip}
          childrens={props.children}
          active={active}
          content={props.content}
          direction={props.direction}
          page={props.page}
        />
      ) : (
        <TooltipWrapper
          onMouseOver={showTip}
          onMouseEnter={showTip}
          onMouseLeave={hideTip}
          page={props.page}
        >
          {props.children}
          {active && (
            <motion.div
              initial={{
                y: 0,
                opacity: 0,
              }}
              animate={{y: -12, opacity: 1}}
              className={`Tooltip-Tip ${props.direction || 'top'}`}
            >
              {props.content}
            </motion.div>
          )}
        </TooltipWrapper>
      )}
    </>
  );
};
const SideBarToolTip = (props: any) => {
  return (
    <>
      {!props.isOpen ? (
        props.childrens
      ) : (
        <TooltipWrapper
          onMouseEnter={props.showTip}
          onMouseLeave={props.hideTip}
          page={props.page}
        >
          {/* Wrapping */}
          {props.childrens}
          {props.active && (
            <div className={`Tooltip-Tip ${props.direction || 'top'}`}>
              {/* Content */}
              {props.content}
            </div>
          )}
        </TooltipWrapper>
      )}
    </>
  );
};
const TooltipWrapper = styled.div<{page: any}>`
  // display: flex;
  position: relative;
  z-index: 9999;
  .Tooltip-Tip {
    position: absolute;
    border-radius: 4px;
    /* left: 50%; */
    transform: translateX(-50%);
    padding: 6px;
    color: white;
    background: black;
    font-size: 14px;
    line-height: 1;
    z-index: 100;
    white-space: nowrap;
  }
  .Tooltip-Tip::before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
    z-index: 9999;
  }

  .Tooltip-Tip.top {
    top: calc(30px * -1);
    left: 0;
  }

  .Tooltip-Tip.top::before {
    top: 100%;
    border-top-color: black;
  }

  .Tooltip-Tip.right {
    left: calc(25% + 0px);
    transform: translateX(0) translateY(-50%);
    top: 50%;
  }

  .Tooltip-Tip.right::before {
    left: calc(6px * -1);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: black;
  }

  .Tooltip-Tip.bottom {
    /* bottom: calc(30px * -1); */
  }

  .Tooltip-Tip.bottom::before {
    bottom: 100%;
    border-bottom-color: black;
  }

  .Tooltip-Tip.left {
    left: auto;
    right: calc(100% + 10px);
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }

  .Tooltip-Tip.left::before {
    left: auto;
    right: calc(6px * -2);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-left-color: black;
  }
`;
export default Tooltip;
