import Task from './Task';
import { useState } from "react";

const Contact = () =>{
    const [tasks, setTask] = useState([
        {
        id: 1,
        text: 'Food Shopping',
        day: '15th July 2023',
        reminder: true,
        
        },
        {
            id: 2,
            text: 'Holiday',
            day: '11th August 2023',
            reminder: false,
            
            },
            {
                id: 3,
                text: 'Church Program',
                day: '19th July 2023',
                reminder: true,
                
                }
        ])

    const ClickHandler = (e) =>{
    var data = e;
    console.log(data);
    };
    
    return (
        <div className="card">
            <h3>This is contact page</h3>
           
        <input type="text" placeholder="Enter text" ></input>
        <button onClick={ClickHandler}>Send</button>
        
        {tasks.map((task) =>(
                <Task key = {task.id} task = {task} />
            ))}
        </div>
    );
}
export default Contact;