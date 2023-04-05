import {useState,useEffect} from 'react'

function List({tasks,deleteSelected}) {
	const [newTaskList, setNewTaskList] = useState(tasks);
  	const [status, setStatus] = useState({});

  	useEffect(() => {
    setNewTaskList(tasks)
}, [tasks]);

  	useEffect(() => {
    const newStatus = {};
    newTaskList.forEach((task, i) => {
    newStatus[i] = task.isChecked ? "completed" : "";
    });
    setStatus(newStatus);
  }, [newTaskList]);

  	const handleCheck = (i, name) => {
    const newTasks = [...newTaskList];
    newTasks[i].isChecked = !newTasks[i].isChecked;
    setNewTaskList(newTasks);
  }
 
  	const deleteTask = (i) => {
    deleteSelected(i);
  }

  return (

    <section className="todoapp">
		<input 
		className="toggle-all" 
		type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
				{
					newTaskList && newTaskList.map((task,i) => 
					<li key={i} className={status[i]}>
					<div className="view">
                		<input id={i} checked={task.isChecked} className="toggle" type="checkbox" onChange={() => handleCheck(i)} />
                		<label htmlFor={i}>{task.addList}</label>
                		<button className="destroy" onClick={() => deleteTask(i, task.addList)}></button>
              		</div>
					</li>
				)}
		</ul>
	</section>
  )
}

export default List;