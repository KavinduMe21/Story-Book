import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import React from 'react';

//const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const App: React.FC = () => (
  <>
    <Button type="primary" danger>Button</Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>Dashed</Button>
    <Button type="text" danger>Text</Button>
    <Button type="link" danger>Link</Button>
    <Button type="primary" danger icon={<RightOutlined />}>Button</Button>
    <Button danger icon={<RightOutlined />}>Default</Button>
    <br/><br/>
    <Button type="primary" danger disabled>Button</Button>
    <Button danger disabled>Default</Button>
    <Button type="dashed" danger disabled>Dashed</Button>
    <Button type="text" danger disabled>Text</Button>
    <Button type="link" danger disabled>Link</Button>
    <Button type="primary" danger icon={<RightOutlined />} disabled>Button</Button>
    <Button danger icon={<RightOutlined />} disabled>Default</Button>
  </>
);

export const Red = App;

const App1: React.FC = () => (
  <>
    <Button type="primary">Button</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <Button type="link">Link</Button>
    <Button type="primary" icon={<RightOutlined />}>Button</Button>
    <Button icon={<RightOutlined />}>Default</Button>
    <br/><br/>
    <Button type="primary" disabled>Button</Button>
    <Button disabled>Default</Button>
    <Button type="dashed" disabled>Dashed</Button>
    <Button type="text" disabled>Text</Button>
    <Button type="link" disabled>Link</Button>
    <Button type="primary" icon={<RightOutlined />} disabled>Button</Button>
    <Button icon={<RightOutlined />} disabled>Default</Button>
  </>
);

export const Blue = App1;

const App2: React.FC = () => (
  
  <>
    <Button color="yellow" type="primary">Button</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <Button type="link">Link</Button>
    <Button type="primary" icon={<RightOutlined />}>Button</Button>
    <Button icon={<RightOutlined />}>Default</Button>
    <br/><br/>
    <Button type="primary" disabled>Button</Button>
    <Button disabled>Default</Button>
    <Button type="dashed" disabled>Dashed</Button>
    <Button type="text" disabled>Text</Button>
    <Button type="link" disabled>Link</Button>
    <Button type="primary" icon={<RightOutlined />} disabled>Button</Button>
    <Button icon={<RightOutlined />} disabled>Default</Button>
  </>
);

export const Yellow = App2;

export default {
  title: 'Buttons',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;