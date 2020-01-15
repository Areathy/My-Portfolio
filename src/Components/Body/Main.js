import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MyCarousel from './Carousel';
import Image from '../images/myImage.jpg'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={4}>
          <h1 className='nameJob'><b>Henrietha C.N.</b></h1>
          <p className='nameJob'><i>Software Developer</i></p>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={10} className='about'>
          <h1 className="about-h1">Henrietha in a nutshell</h1>
          <p>
            <img className='myImg' src={Image} alt='My Image' />
            Coding swept me off my feet, and I fell in love.<br /><br />

            I thought being a chef and a baker was it for me, creating new recipes, sumptuous meals, bread confectionaries and what have you all day would pose the challenge and satisfaction I needed. It seemed right,given that I love creating things plus my BSc. In Nutritional Biochemistry. It was only natural for me to go in that direction, and I even co-founded a limited liability company in that. But deep down I knew I needed something more, I hungered for something I didn’t really know.<br /><br />

            Then it happened, I was casually introduced to coding, and it felt like I finally got to drink after like forever, it was as if I had been hungry all my life and all of a sudden I was seated on a table ready to eat mouth-watering delicacies. Ever since, I haven’t been filled yet, can’t seem to get enough. My inborn creative trait finally found an exciting, challenging and satisfying outlet to continually pour itself out.<br /><br />

            I find it extremely fulfilling to be able to create, things I normally would just imagine and wish in my mind. I lack words to truly explain the beautiful feeling I get bringing these things into existence.<br /><br />

            I would say my specialties include, but not limited to;<br /><br />
            <ul>
              <li>
                Proactive and possess logical approach to problem solving.
              </li>
              <li>
                Fast learning and ability to digest large volumes of Information in relatively short periods.
              </li>
              <li>
                Critical thinker.
              </li>
            </ul><br />

            I'm still enthusiastically feeding on other programming languages, frameworks, libraries, or principles I can incorporate into this coding mesh in my heart.<br /><br />

            Currently I am either working on freelance projects, building my own products or creating wonderful recipes in my kitchen.
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="center" className='testimonial'>
        <Grid item xs={5} >
          <p><b><i>TESTIMONIALS</i></b></p>
        </Grid>
      </Grid>
      <Grid container spacing={0} justify="center" alignItems="center">
        <Grid item xs={11}>
          <div>
            <MyCarousel />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={4}>
          <h1 className="skillHead">SKILLS</h1>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <div className="mySkills">
            <nav>
              <ul className="skillSubH"><li>FRONT END</li></ul>
              <ul>
                <li className=" skillsTag">
                  HTML
                </li>
                <li className=" skillsTag">
                  CSS
                </li>
                <li className=" skillsTag">
                  Bootsrap
                </li>
                <li className=" skillsTag">
                  Material UI
                </li>
                <li className=" skillsTag">
                  JavaScript
                </li>
                <li className=" skillsTag">
                  jQuery
                </li>
                <li className=" skillsTag">
                  React
                </li>
              </ul>
            </nav>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="mySkills">
            <nav>
              <ul className="skillSubH"><li>BACK END</li></ul>
              <ul>
                <li className=" skillsTag">
                  Node JS
                </li>
                <li className=" skillsTag">
                  Express
                </li>
                <li className=" skillsTag">
                  AW Lamda
                </li>
                <li className=" skillsTag">
                  MongoDB
                </li>
                <li className=" skillsTag">
                  My SQL
                </li>
                <li className=" skillsTag">
                  Python
                </li>
              </ul>
            </nav>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="mySkills">
            <nav>
              <ul className="skillSubH"><li>OTHERS</li></ul>
              <ul>
                <li className=" skillsTag">
                  Git
                </li>
                <li className=" skillsTag">
                  API
                </li>
                <li className=" skillsTag">
                  Figma (designs)
                </li>
              </ul>
            </nav>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}