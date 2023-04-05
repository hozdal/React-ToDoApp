import React, { useState, useEffect } from 'react'


function Footer({ allTasks, clearCompleted ,filter}) {
  const buttons = [
    {
      name: 'All',
      selected: false
    },
    {
      name: 'Active',
      selected: false
    },
    {
      name: 'Completed',
      selected: false
    },
  ]
  //buttonlar ve özelliklerimizi burada tutarız.
  const [buttonL, setButtonL] = useState(buttons);

  const [status, setStatus] = useState({});



  const handleCheck = (done, i) => {
    const newTasks = [...buttonL];
    newTasks.forEach((btn, index) => {
      if (index === i) {
        btn.selected = true;
      } else {
        btn.selected = false;
      }
    });
    setButtonL(newTasks);
    allTasks(done.name);
  }

  //döngüyle diziyi gezeriz ve seçilen indexle eşleşme durumuna göre görüntülenen taskları filtreleriz.

  useEffect(() => {
    const newStatus = {};
    buttonL.forEach((btn, index) => {
      newStatus[index] = btn.selected ? "selected" : "";
    });
    setStatus(newStatus);
  }, [buttonL]);
  //selected özelliğine bağlı olarak durumu güncelleriz.
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{filter.length+" "}</strong>
          items left
        </span>

        <ul className="filters">
          {buttonL.map((btn, index2) => (
            <li key={index2} >
              <a href="#/" className={status[index2]} onClick={() => handleCheck(btn, index2)}>{btn.name}</a>
            </li>
          ))}
        </ul>

        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    </div>
  )
}

export default Footer;

