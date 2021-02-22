import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TaskList, { ITaskListProps } from './TaskList';
// import { } from '../task/Task';
import * as TaskStories from '../task/Task.stories'


const Template:Story<ITaskListProps> = (args) => <TaskList {...args}/> 

export const Default = Template.bind({})

Default.args = {
    tasks : [
        {
            ...TaskStories.defaultArgs,

        },
        {
            ...TaskStories.defaultArgs,
            task : {
                ...TaskStories.defaultArgs.task,
                id: "2",
                title: "Task2",
            }
        },
        {
            ...TaskStories.defaultArgs,
            task : {
                ...TaskStories.defaultArgs.task,
                id: "3",
                title: "Task3",
            }
        },
        {
            ...TaskStories.defaultArgs,
            task : {
                ...TaskStories.defaultArgs.task,
                id: "4",
                title: "Task4",
            }
        }
    ]
}
export const Actived = Template.bind({})
Actived.args = {
    tasks : [
        {
            ...TaskStories.defaultArgs,
        },
        {
            ...TaskStories.defaultArgs,
            task : {
                ...TaskStories.defaultArgs.task,
                id: "2",
                title: "Task2",
                state: "TASK_PINNED"
            }
        },
        {
            ...TaskStories.defaultArgs,
            task : {
                ...TaskStories.defaultArgs.task,
                id: "3",
                title: "Task3",
                state: "TASK_ARCHIVED"
            }
        },
        {
            ...TaskStories.defaultArgs,
            task : {
                ...TaskStories.defaultArgs.task,
                id: "4",
                title: "Task4",
                state: "TASK_INBOX"
            }
        }
    ]
}


export const Loading = Template.bind({})
Loading.args = {
    tasks : Default.args.tasks,
    loading: true
}
export const LengthZero = Template.bind({})
LengthZero.args = {
    tasks : [],
    loading: false
}

export default {
    title: 'Item/list',
    component: TaskList,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
} as Meta