import { ComponentMeta } from '@storybook/react';
import { Tabs } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Tab 1" key="1">
      This is the content of Tab Pane 1
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 2" key="2">
      This is the content of Tab Pane 2
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 3" key="3">
      This is the content of Tab Pane 3
    </Tabs.TabPane>
  </Tabs>
);

export const Tab = App;

export default {
    title: 'Tabs',
    component: Tab,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Tab>;