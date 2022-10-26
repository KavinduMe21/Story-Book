import { Button, Divider, notification, Space } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification';
import React from 'react';
import TestComponent from './error'

const openNotification = (placement: NotificationPlacement) => {
  notification.error({
    message: `Record Addition Unsuccessful!`,
    description:
      "Record has been cancelled on [USER STORY NAME]",
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
        Error
      </Button>
    </Space>
  </>
);

export const Error = App;

export default {
title: 'Alert/Error',
component: TestComponent,
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
argTypes: {
  color: { control: 'color' },
},
} 