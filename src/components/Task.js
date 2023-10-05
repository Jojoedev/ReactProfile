import {FaTimes} from 'react-icons/fa';
import taskClasses from './MovieCard.module.css';


const Task = ({task, onDelete, onToggle}) =>{
  
    return(

        <div className={taskClasses.header}> 
                    <h4 onDoubleClick={onToggle}>
                    {task.text} < FaTimes className ={taskClasses.deleteIcon} 
                    onClick = {() =>onDelete(task.id)} 
                     /></h4>
                    <p>{task.day}</p>
        </div>
    );

}

export default Task;