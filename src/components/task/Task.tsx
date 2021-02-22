import React from 'react';

export interface ITask {
    task: {
      id: string
      title: string
      state: string
    }
    onArchiveTask:(id: string) => void 
    onPinTask:(id: string) => void
}

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }: ITask) => {
  return (
    <li className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </li>
  );
}

// Task.defaultProps = {
//   onArchiveTask: (id: string) => {},
//   onPinTask: (id: string) => {} 
// }
export default Task;