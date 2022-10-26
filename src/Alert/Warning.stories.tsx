import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestComponent from './warning'
import { Button, notification, Space } from 'antd';
import React from 'react';



  type NotificationType =  'warning'

const openNotificationWithIcon = (type: NotificationType) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};



const Template: ComponentStory<typeof TestComponent> = (args:any) => <TestComponent {...args} />;

// export const Warning = Template.bind({  });

const App: React.FC = () => (
  <Space>
     <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
  </Space>

)

export const Warning = App;

export default {
  title: 'Alert/Warning',
  component: TestComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} 