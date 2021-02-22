import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Home, {IHomeProps} from './Home';

const Template: Story<IHomeProps> = (args) => <Home {...args}/>;

export const common = Template.bind({})

export default {
    title: 'page/home',
    component: Home,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

// const Template:Story<ICommonLayoutProps> = (args) => <CommonLayout {...args}/>

