import { ComponentMeta } from '@storybook/react';
import { Tag } from 'antd';
import React from 'react';

const App1: React.FC = () => (
  <>
      <Tag color="magenta">Tag 1</Tag>
      <Tag color="red">Tag 2</Tag>
      <Tag color="volcano">Tag 3</Tag>
      <Tag color="orange">Tag 4</Tag>
      <Tag color="gold">Tag 5</Tag>
      <Tag color="lime">Tag 6</Tag>
      <Tag color="green">Tag 7</Tag>
      <Tag color="cyan">Tag 8</Tag>
      <Tag color="blue">Tag 9</Tag>
      <Tag color="geekblue">Tag 10</Tag>
      <Tag color="purple">Tag 11</Tag>
  </>
);

export const tag = App1;

export default {
    title: 'Tags',
    component: Tag,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Tag>;