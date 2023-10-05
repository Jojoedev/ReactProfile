import btnClasses from './MovieCard.module.css';
const Button =({color, text, onChange}) =>{
    
    return(

        <button className={btnClasses.btn} onClick={onChange} style={{backgroundColor: color? 'green' : 'red'}}> {text? 'Add' : 'Close'} </button>

    );
}

export default Button;