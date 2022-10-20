import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestComponent from './Test'

export default {
    title: 'Example/Test',
    component: TestComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      color: { control: 'color' },
      label:{ type:"string" }
    },
  } as ComponentMeta<typeof TestComponent>;


const Template: ComponentStory<typeof TestComponent> = (args:any) => <TestComponent {...args} />;

export const Primary = Template.bind({  });

export const Red = Template.bind({  });
Red.args={
  color:"red",
  label:"Red Color Test Compo"
}