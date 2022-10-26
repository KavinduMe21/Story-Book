import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import React from 'react';
import TestComponent from './conformation'

const { confirm } = Modal;

const showConfirm = () => {
  confirm({
    title: 'Cancelling From Submission',
    icon: <ExclamationCircleOutlined />,
    content: "This action wont't save any records entered in the forms.Are you sure that you want to continue? ",
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const App: React.FC = () => (
  <Space wrap>
    <Button onClick={showConfirm}>Confirm</Button>
  </Space>
);

export const Conformation = App;

export default {
  title: 'Conformation/Conformation',
  component: TestComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
    label:{ type:"string" }
  }
}