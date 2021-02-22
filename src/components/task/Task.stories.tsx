import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Task, { ITask} from './Task';

const Template: Story<ITask> = (args) => <Task {...args} />;

export const Default = Template.bind({})

export const defaultArgs: ITask = {
  task : {
    id : "1",
    title : "Task 1",
    state : "TASK_INBOX" // TASK_PINNED, TASK_ARCHIVED
  },
  onArchiveTask : (id:string) => {
    console.log("onArchiveTask : ", id)
  },
  onPinTask: (id:string) => {
    console.log("onPinTask : ", id)
  }
}
Default.args = {...defaultArgs}

export const Pinned = Template.bind({});

Pinned.args = {
  ...Default.args,
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
} as ITask;

export const Archived = Template.bind({});

Archived.args = {
  ...Default.args,
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
} as ITask;

export default {
    title: 'Item/Task',
    component: Task,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;
