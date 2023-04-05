import {useState,useEffect} from 'react'

const initialFormValues = {addList:""};
function Header({addTasks,tasks}) {
  

    const [form, setForm] = useState(initialFormValues);    
    
    useEffect (() => {
      setForm(initialFormValues);
    },[tasks])

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.addList === ""){
          return false;
        }
        addTasks([...tasks,form])

        
    };

  return (
    <section className='todoapp'>
      <header className="header">
		<h1>Todos</h1>
		<form onSubmit={onSubmit}>
			<input
      name='addList'
      value={form.addList} 
      className="new-todo" 
      placeholder="What needs to be done?"
      onChange={onChangeInput} 
      autoFocus />

		</form>
	</header> 
    </section>
    
  )
}

export default Header;