import { Button, Divider, notification, Space } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification';
import React from 'react';
import TestComponent from './reset'

const openNotification = (placement: NotificationPlacement) => {
  notification.info({
    message: `Record Reset Successful!`,
    description:
      "Record is successfully resetted on [USER STORY NAME]",
    placement,
  });
};

const App: React.FC = () => (
  <>

    <Space>
      <Button
        type="primary"
        onClick={() => openNotification('bottomRight')}
      >
        Reset
      </Button>
    </Space>
  </>
);

export const Reset = App;

export default {
title: 'Alert/Reset',
component: TestComponent,
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
argTypes: {
  color: { control: 'color' },
},
} 