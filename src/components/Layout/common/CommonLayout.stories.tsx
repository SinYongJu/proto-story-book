import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CommonLayout, { ICommonLayoutProps } from './CommonLayout'

const Template: Story<ICommonLayoutProps> = (args) => <CommonLayout {...args}/>;

export const Primary = Template.bind({})

export default {
    title: 'Example/Layout',
    component: CommonLayout,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

// const Template:Story<ICommonLayoutProps> = (args) => <CommonLayout {...args}/>

