import React from 'react';
import Image from '../images/myImage.jpg'
import { Grid } from '@material-ui/core';

export default function Landing() {
   return (
      <React.Fragment>
         <Grid container spacing={4}>
            <Grid item xs={5}><img className='home-img' src={Image} alt='My Image' /></Grid>
            <Grid item xs={7}>
               <div className='home-info'>
                  <h1> Hi, I'm <strong> HENRIETHA. </strong></h1>
                  <h3><i> A software Developer,</i></h3>
                  <h1> I write, debug and execute source code(s) of software application(s). </h1>
               </div>
            </Grid>
         </Grid>
      </React.Fragment >
   );
}
