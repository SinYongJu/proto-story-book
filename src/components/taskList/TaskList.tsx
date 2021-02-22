import React from 'react';
import Task, { ITask } from '../task/Task';

export interface ITaskListProps {
    tasks: ITask[]
    loading: boolean
    onPinTask:(id:string) => void
    onArchiveTask:(id:string) => void
}

const LoadingRow = (
    <div className="loading-item">
        <span className="glow-checkbox" />
        <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
        </span> 
    </div>) 

const LengthZero = (
    <div className="list-items">
      <div className="wrapper-message">
        <span className="icon-check" />
        <div className="title-message">You have no tasks</div>
        <div className="subtitle-message">Sit back and relax</div>
      </div>
    </div>
  )
    
const TaskList: React.FC<ITaskListProps> = ({loading, tasks, onPinTask, onArchiveTask} : ITaskListProps) => {
    const event = {
        onPinTask, onArchiveTask
    }
    if(loading) {
        return (
            <ul className="list-items" >
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </ul>
        )
    }
    if (tasks.length === 0) {
        return LengthZero
    }
    return (
        <ul className="list-items" >
            {tasks.map((item, index) => <Task key={`task_${item.task.id}__${index}`} task={item.task} {...event} /> )} 
        </ul>
    );
};

TaskList.defaultProps = {
    tasks:[],
    loading : false
}

export default TaskList;