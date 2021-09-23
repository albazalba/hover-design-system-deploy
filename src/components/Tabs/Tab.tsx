import React, {useState} from 'react';
import styled from '@emotion/styled';

export interface TabProps {
  title?: string;
  active?: boolean;
  render?: any;
  tabs?: any;
}
export default function TabBarWithRender({tabs}: any) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabComponent>
      <TabContainer>
        {tabs.map((tab: any, index: any) => (
          <TabButton
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            <Title active={activeTab === index}>{tab.title}</Title>
            <Indicator active={activeTab === index} />
          </TabButton>
        ))}
      </TabContainer>
      {/* {tabs[activeTab].render()} */}
      {tabs[activeTab].content}
    </TabComponent>
  );
}

const TabContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
`;
const TabButton = styled.button<TabProps>`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.6s;
  background: ${(props) => (props.active ? '#C4C4C4' : '#f2f2f2')};
  &:focus {
    outline: none;
  }
`;
const Title = styled.span<TabProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  /* text-transform: uppercase; */
  font-size: 20px;
  color: ${(props) => (props.active ? '#3e5b5b' : '#333')};
  transition: 0.6s;
`;
const Indicator = styled.span<TabProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* border-bottom-width: 2px;
  border-bottom-style: solid; */
  /* border-bottom-color: ${(props) => (props.active ? 'yellow' : 'red')}; */
  transition: 0.6s;
`;
const TabComponent = styled.div`
  width: 100%;
`;
