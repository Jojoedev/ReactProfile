import AddTask from './AddTask';
import Task from './Task';
import { useState } from "react";
import Button from './Button';

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
        const AddHandler= (task) =>{
            const id = Math.floor(Math.random()* 10000)+ 1
            const newTask = {id, ...task} //This is spread operator. It is simply concating id to input data 'task'.
            setTask([...tasks, newTask])//This is also spread operator. It is adding newTask object to an existing task array
                                            //of objects.
        }

    
    
    const DeleteHandler = (id) =>{
        setTask(tasks.filter((task) => task.id !== id))
    };

    const ToggleReminder  = (id) =>{
        setTask(tasks.map((task) => task.id == id ?
        {...task, reminder: !task.reminder} : task
        ))
    };
    
    const [Text, setText] = useState(true);

    const ChangeText = () =>{
        setText(!Text)
    }

    
    return (
        <div>
            <h3>This is contact page</h3>
           <Button color = {Text} onChange ={ChangeText}  text = {Text} />
          
           {!Text && <AddTask onAdd = {AddHandler} /> }  
            
         {tasks.length > 0 ? 
            tasks.map((task) =>(
                <Task key = {task.id} 
                task = {task} 
                onDelete = {DeleteHandler} 
                onToggle = {ToggleReminder} 
                />
            )) :<p> "Not Task found" </p>
         }  
            
        </div>
    );
}
export default Contact;