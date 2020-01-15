import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, CardMedia, CardContent, CardActions, CardActionArea, Card } from '@material-ui/core';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});


export default function Work() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} justify='center' alignItems='center'>
        <Grid item sm={10} className='headDiv'>
          <div>
            <h1><b><span className='workHeading1'>MY</span><span className='workHeading2'>  PROJECTS...</span></b></h1>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={6} justify='center' alignItems='center'>
        <Grid item sm={11} md={6} lg={4} justify='center' alignItems='center'>
            <Card 
            className={classes.card} className = 'card-b'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Calculator"
                  height="170"
                  image="/image/path"
                  title="Calculator"
                />
                <CardContent className = 'myWork'>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculator
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h4>description</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!
                  </Typography>
                  <Typography>
                    <h4>Technology Used</h4>
                    HTML, CSS, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className = 'bLinks'>
                <Button size="small">
                <a href='https://github.com/areathy' target='-blank' className='workLink'>Source</a>
                </Button>
                <Button size="small">
                  <a href='projectLink' className='workLink'>Live</a>          
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={11} md={6} lg={4} justify='center' alignItems='center'>
            <Card className={classes.card} className = 'card-b'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Calculator"
                  height="170"
                  image="/image/path"
                  title="Calculator"
                />
                <CardContent className = 'myWork'>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculator
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h4>description</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!
                  </Typography>
                  <Typography>
                    <h4>Technology Used</h4>
                    HTML, CSS, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className = 'bLinks'>
                <Button size="small">
                <a href='https://github.com/areathy' target='-blank' className='workLink'>Source</a>
                </Button>
                <Button size="small">
                  <a href='projectLink' className='workLink'>Live</a>          
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={11} md={6} lg={4} justify='center' alignItems='center'>
            <Card className={classes.card} className = 'card-b'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Calculator"
                  height="170"
                  image="/image/path"
                  title="Calculator"
                />
                <CardContent className = 'myWork'>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculator
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h4>description</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!
                  </Typography>
                  <Typography>
                    <h4>Technology Used</h4>
                    HTML, CSS, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className = 'bLinks'>
                <Button size="small">
                <a href='https://github.com/areathy' target='-blank' className='workLink'>Source</a>
                </Button>
                <Button size="small">
                  <a href='projectLink' className='workLink'>Live</a>          
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={11} md={6} lg={4} justify='center' alignItems='center'>
            <Card className={classes.card} className = 'card-b'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Calculator"
                  height="170"
                  image="/image/path"
                  title="Calculator"
                />
                <CardContent className = 'myWork'>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculator
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h4>description</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!
                  </Typography>
                  <Typography>
                    <h4>Technology Used</h4>
                    HTML, CSS, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className = 'bLinks'>
                <Button size="small">
                <a href='https://github.com/areathy' target='-blank' className='workLink'>Source</a>
                </Button>
                <Button size="small">
                  <a href='projectLink' className='workLink'>Live</a>          
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={11} md={6} lg={4} justify='center' alignItems='center'>
            <Card className={classes.card} className = 'card-b'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Calculator"
                  height="170"
                  image="/image/path"
                  title="Calculator"
                />
                <CardContent className = 'myWork'>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculator
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h4>description</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!
                  </Typography>
                  <Typography>
                    <h4>Technology Used</h4>
                    HTML, CSS, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className = 'bLinks'>
                <Button size="small">
                <a href='https://github.com/areathy' target='-blank' className='workLink'>Source</a>
                </Button>
                <Button size="small">
                  <a href='projectLink' className='workLink'>Live</a>          
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={11} md={6} lg={4} justify='center' alignItems='center'>
            <Card className={classes.card} className = 'card-b'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Calculator"
                  height="170"
                  image="/image/path"
                  title="Calculator"
                />
                <CardContent className = 'myWork'>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculator
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h4>description</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!
                  </Typography>
                  <Typography>
                    <h4>Technology Used</h4>
                    HTML, CSS, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className = 'bLinks'>
                <Button size="small">
                <a href='https://github.com/areathy' target='-blank' className='workLink'>Source</a>
                </Button>
                <Button size="small">
                  <a href='projectLink' className='workLink'>Live</a>          
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={11} md={6} lg={4} justify='center' alignItems='center'>
            <Card className={classes.card} className = 'card-b'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Calculator"
                  height="170"
                  image="/image/path"
                  title="Calculator"
                />
                <CardContent className = 'myWork'>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculator
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h4>description</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!
                  </Typography>
                  <Typography>
                    <h4>Technology Used</h4>
                    HTML, CSS, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className = 'bLinks'>
                <Button size="small">
                <a href='https://github.com/areathy' target='-blank' className='workLink'>Source</a>
                </Button>
                <Button size="small">
                  <a href='projectLink' className='workLink'>Live</a>          
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={11} md={6} lg={4} justify='center' alignItems='center'>
            <Card className={classes.card} className = 'card-b'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Calculator"
                  height="170"
                  image="/image/path"
                  title="Calculator"
                />
                <CardContent className = 'myWork'>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculator
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h4>description</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!
                  </Typography>
                  <Typography>
                    <h4>Technology Used</h4>
                    HTML, CSS, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className = 'bLinks'>
                <Button size="small">
                <a href='https://github.com/areathy' target='-blank' className='workLink'>Source</a>
                </Button>
                <Button size="small">
                  <a href='projectLink' className='workLink'>Live</a>          
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={11} md={6} lg={4} justify='center' alignItems='center'>
            <Card className={classes.card} className = 'card-b'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Calculator"
                  height="170"
                  image="/image/path"
                  title="Calculator"
                />
                <CardContent className = 'myWork'>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculator
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h4>description</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor vitae minus ipsa molestias explicabo magnam. Dicta aliquam hic quia!
                  </Typography>
                  <Typography>
                    <h4>Technology Used</h4>
                    HTML, CSS, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className = 'bLinks'>
                <Button size="small">
                <a href='https://github.com/areathy' target='-blank' className='workLink'>Source</a>
                </Button>
                <Button size="small">
                  <a href='projectLink' className='workLink'>Live</a>          
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

      
    </React.Fragment>
  );
}