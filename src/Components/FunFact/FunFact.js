import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function FunFact() {
  return (
    <React.Fragment>
      <Grid container spacing={3} justify="left" alignItems="center">
        <Grid item xs={10}>
          <div className="funP">
            <p>
              <span className="funSpan1">Fun  </span><span className="funSpan2"> Fact...</span><i>It's quite a lot  </i><span className="funSpan3"> ...you ready?</span>
            </p>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={10}>
            <div className="funList a">
              When I was 8, I would fantasize about building a machine, capable of automatically and painlessly; washing, drying, weaving/styling my hair in seconds or at most 3 minutes...I still think about building that machine.
            </div>
            <div className="funList b">
              My fondest childhood memory would be, when my Dad will create some kind of mini camp in our backyard, and we would eat dinner and spend the night out there...hmmmmmmmmmmmm
            </div>
            <div className="funList a">
              I create amazing recipes in my kitchen, ranging from cakes, confectionaries, breads, down to some West African cuisines, and even some of her soft drinks.
            </div>
            <div className="funList b">
              I also sometimes create exquisite garments for women and kids.
            </div>
            <div className="funList a">
              I speak 4 languages; Hausa, Igbo, Yoruba and English.
            </div>
            <div className="funList b">
              I wrote my first novel when I was 15. I never tried publishing.
            </div>
            <div className="funList a">
              I first travelled solo when I was 17 .
            </div>
            <div className="funList b">
              I sometimes make my keyboard (piano) produce beautiful sounds.
            </div>                        
            <div className="funList a">
              I have seen "Sound of Music" over a hundred times.
            </div>
            <div className="funList b">
              I desire perfection in everything I do.
            </div>
            <div className="funList a">
              I admire the simplicity I see (from a distance) in Mark Zuckerbergs' familylife style.
            </div>
            <div className="funList b">
              I am priviledged to be loved by Jesus Christ.
            </div>
            <div className="funList a">
              I have never been to a club, nor do I like parties in general. it switches me off.
            </div>
            <div className="funList b">
              I am particularly addicted to reading!!!
            </div>
            <div className="funList a">
              I would really like to be more sociable and add French to my language list. 
            </div>
            <div className="funList b">
              If I had time at school again, i would be a bit more sociable.
            </div>
            <div className="funList a">
              I single handedly raised funds, organised and trained 20 women (in a rural area in Nigeria) in; garment making, cakes, and bread. For 9 weeks during my National Youth Service Corps in Lagos Nigeria.
            </div>
            <div className="funList b">
              I was honoured and given an award by the Lagos state government, because of the skill aquisition I organised for those women.
            </div>
            <div className="funList a">
              One of the best advise I ever recieved was;
              <blockquote>
                <p>"Time lost can never be regained"</p>
                <footer>Unknown</footer>
              </blockquote>
            </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
