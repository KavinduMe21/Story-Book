import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestComponent from './information'
export default {
    title: 'Information/Information',
    component: TestComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      color: { control: 'color' },
      label:{ type:"string" }
    },
  } as ComponentMeta<typeof TestComponent>;


const Template: ComponentStory<typeof TestComponent> = (args:any) => <TestComponent {...args} />;

export const information = Template.bind({  });
