import { Link } from "react-router-dom";



const Nav = () => {

    return(
      <nav style={navStyle}>

        <ul style={ulStyle}>
            <li style={lStyle}> <Link to ="/" style={aStyle} className="nav-item"> Home </Link></li>
            <li style={lStyle}> <Link to ="/aboutme" style={aStyle} className="nav-item" > About Me</Link></li>
            <li style={lStyle}> <Link to="/contact" style={caStyle} className="nav-item" >Contact</Link></li>
        </ul>
      </nav>  
      
    );
}

export default Nav;

const ulStyle = {
    color: 'red',
    listStyleType: 'none',
    textAlign: 'right',
    display: 'flex', 
     
    
}

const navStyle = {
    padding: '5px',
    backgroundColor: 'teal',
    margin: '0',
    

}

const lStyle = {
    padding: '10px',
    
}

const aStyle = {
    textDecoration: 'none', 
    color: 'white',
    fontSize: '20px',
    

    
}

const caStyle = {
    textDecoration: 'none', 
    marginLeft: 'auto',
    color: 'white',
    fontSize: '20px',
    
}