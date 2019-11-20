import React from 'react';
import { Grid } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Email from '@material-ui/icons/Email';

export default function Head() {
  return (
    <Grid container spacing={0} alignItems='center'>
      <Grid item xs={10} md={3}>
        <div className='getInTouch'>
          <h3><b>Get in touch ;</b></h3>
        </div>
      </Grid>
      <Grid item xs={6} md={5}> 
        <div className='contactsDiv'>
          <ul className='contacts'>
            <li>
              <a href='https://www.linkedin.com/in/henrietha-c-n-b07871152' target='-blank' className='contact'>{<LinkedIn fontSize="large" />}</a>
            </li>
            <li>
              <a href='https://www.twitter.com/Areathy' target='-blank' className='contact'>{<TwitterIcon fontSize="large" />}</a>
            </li>
            <li>
              <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=areathy33@gmail.com&su=Contacting you based on your portfolio.&tf=1' target='-blank' className='contact'>{<Email fontSize="large" />}</a>
            </li>
            <li>
              <a href='https://github.com/areathy' target='-blank' className='contact'>{<GitHub fontSize="large" />}</a>
            </li>
          </ul>
        </div>
      </Grid>
    </Grid>
  );
}
