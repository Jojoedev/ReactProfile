
import { useState } from 'react';
import addTaskClasses from './MovieCard.module.css';


const AddTask = ({ onAdd }) =>{
   const [text, setText] = useState('')
   const [day, setDay] = useState('')
   const [reminder, setReminder] = useState(false)

const onSubmit = (e) =>{
    e.preventDefault()

    if(!text || !day || !reminder){ //Validating form input data
        alert("Please fill all field")
        return
    }
    onAdd({text, day, reminder})
    
    //Clear form input upon submit
    setText('');
    setDay('');
    setReminder(false);
  }

    return(
        <form className={addTaskClasses.form} onSubmit = {onSubmit}>
        <div>
            <label>Task </label>
            <input type="text" value={text} onChange={(e) =>
                 setText(e.target.value)} placeholder="Enter Task" ></input>
        </div>
        <div>
            <label>Time and Day </label>
            <input className='form-control' type="text" value={day} onChange={(e) =>
                 setDay(e.target.value)} placeholder="Enter day and time" ></input>
        </div>
        <div>
            <label>Set Reminder </label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) =>
                 setReminder(e.currentTarget.checked)} ></input>
        </div>
         <input type='submit' value='Save Task' /> 
        </form>

    );
}

export default AddTask;