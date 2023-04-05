import { useState } from "react";
import "./styles.css";
import Header from "./Header/index";
import List from "./List/index";
import Footer from "./Footer/index";
function Todo() {

  const [tasks,addTasks] = useState([
    {
      isChecked: true,
      addList: 'Learn JavaScript',
    },
    {
      isChecked: false,
      addList: 'Learn React',
    },
    {
      isChecked: false,
      addList: 'Have a life!'
    }
  ]);

  const [filterTasks, setFilterTasks] = useState('All');

  let allTasks = tasks.filter((task) => {
    if (filterTasks === 'All') {
      return task;
    } else if (filterTasks === 'Active') {
      return task.isChecked === false;
    } else {
      return task.isChecked === true;
    }
  })
  
  const deleteCompleted = () => {
    const completedTasks = tasks.filter((task) => !task.isChecked)
    addTasks(completedTasks);
  }

  const clickedBtn = (filterBtn) => {
    setFilterTasks(filterBtn);
  }

  const deleteSelected = (deleteValue) => {
    let getItems = [...tasks]
    getItems.splice(deleteValue, 1);
    addTasks(getItems);
  }

  return (
    <div>
        <Header addTasks={addTasks} tasks={tasks}/>
        <List tasks={allTasks} deleteSelected={deleteSelected}/>
        <Footer tasks={tasks} allTasks={clickedBtn} filter={allTasks}  clearCompleted={deleteCompleted}/>
    </div>
  )
}

export default Todo;