import React from 'react';
import HamBToggle from '../Hambuger/HamBToggle';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography, makeStyles, Zoom, Fab, CssBaseline, useScrollTrigger } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



// Positioning of the scrollTop icon
const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));


// Behaviour of the scrollTop icon
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
  });

  
  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        {children}
      </div> 
    </Zoom>
  );
}

const Header = props => (
  
  <React.Fragment>    
    <CssBaseline />
    <AppBar position='static' style={{ backgroundColor: 'var(--lightBlackC)' }}>      
      <Toolbar className='headerButtons'>
        <Typography>
          <div className='hideH'>
          <HamBToggle click={props.hamBClick}/> 
          </div>        
          <nav className='navDiv'>                     
            <ul className='navbar-nav tags'>
              <li className='nav-item tag'>
                <Link to='/' className='hLink'>Home</Link>
              </li>
              <li className='nav-item tag'>                
                <Link to='/work'  className='hLink'>
                  Work
                </Link>
              </li>
              <li className='nav-item tag'>
                <a href='#' target='-blank' className='hLink'>
                  Resume
                </a>
              </li>
              <li className='nav-item tag'>
                <Link to='/funfact'  className='hLink'>
                  Fun Fact
                </Link>
              </li>
            </ul>
          </nav>
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar id='back-to-top-anchor' />
        {/* ScrollTop icon */}
        <ScrollTop >
      <Fab color='secondary' size='small' aria-label='scroll back to top'>
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </React.Fragment>
  );


export default Header;