
import classes from './MovieCard.module.css';



const MovieCard = ({ movie } ) =>{

return(
<div className={classes.MovieCard}> 
    <div>
        <img src={movie.url} alt={movie.thumnailUrl}/>
        <p className={classes.text}>Title: {movie.title}</p>
    </div>
  
</div>


    );
}


export default MovieCard;