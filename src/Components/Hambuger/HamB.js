import React from 'react';
import {Link} from 'react-router-dom'

const HamB = props => {
  let hamClasses = 'side-drawer';
  if (props.show) {
    hamClasses = 'side-drawer open';
  }
  return(
    <nav className={hamClasses}>      
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/work'>Work</Link>
        </li>
        <li>
          <a href='#' target='-blank'>Resume</a>
        </li>
        <li>
          <Link to='/funfact'  className='hLink'>
            Fun Fact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HamB;

