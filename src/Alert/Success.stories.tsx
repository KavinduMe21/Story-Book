import { Button, Divider, notification, Space } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification';
import React from 'react';
import TestComponent from './success'

const openNotification = (placement: NotificationPlacement) => {
  notification.success({
    message: `Record Addition Successful!`,
    description:
      "Record has been created on [USER STORY NAME]",
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
        Success
      </Button>
    </Space>
  </>
);

export const Success = App;

export default {
title: 'Alert/Success',
component: TestComponent,
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
argTypes: {
  color: { control: 'color' },
},
} 