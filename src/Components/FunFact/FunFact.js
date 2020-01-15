import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, CardContent, Card } from '@material-ui/core';



export default function FunFact() {

  return (
    <React.Fragment>
      <Grid container spacing={3} justify='left' alignItems='center'>
        <Grid item xs={10}>
            <p>
              <span className='funSpan1'>Fun  </span><span className='funSpan2'> Fact...</span><i>It's quite a lot  </i><span className='funSpan3'> ...you ready?</span>
            </p>
        </Grid>
      </Grid>

      <Grid container spacing={3} justify='center' alignItems='center'>
        <Grid item xs={10}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                When I was 8, I would fantasize about building a machine, capable of automatically and painlessly; washing, drying, weaving/styling my hair in seconds or at most 3 minutes...I still think about building that machine.
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={11}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                My fondest childhood memory would be, when my Dad will create some kind of mini camp in our backyard, and we would eat dinner and spend the night out there...hmmmmmmmmmmmm
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
              I also sometimes create exquisite garments for women and kids.
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I speak 4 languages; Hausa, Igbo, Yoruba and English.
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={9}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I create amazing recipes in my kitchen, ranging from cakes, confectionaries, breads, down to some West African cuisines, and even some of her soft drinks.
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I was honoured and given an award by the Lagos state government, because of the skill aquisition I organised for those women.
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I admire the simplicity I see (from a distance) in Mark Zuckerbergs' family lifestyle.
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I single handedly raised funds, organised and trained 20 women (in a rural area in Nigeria) in; garment making, cakes, and bread. For 9 weeks during my National Youth Service Corps in Lagos Nigeria.
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={7}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I have never been to a club, nor do I like parties in general. it switches me off.
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I desire perfection in everything I do.                
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I first travelled solo when I was 17.                
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I would really like to be more sociable and add French to my language list.                
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I wrote my first novel when I was 15. I never tried publishing.                
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I sometimes make my keyboard (piano) produce beautiful sounds.                
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                If I had time at school again, i would be a bit more sociable.                
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I am particularly addicted to reading!!!                
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I am priviledged to be loved by Jesus Christ.                
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={7}>
          <Card className='funList'>
              <Typography variant='body2' component='p' className='funList-T'>
                I have seen 'Sound of Music' over a hundred times.                
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className='funList' style={{textAlign: 'center'}}>
              <Typography variant='body2' component='p' className='funList-T'>
                One of the best advise I ever recieved was;
                <blockquote>
                  <p>'Time lost can never be regained'</p>
                  <footer>Unknown</footer>
                </blockquote>
              </Typography>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
