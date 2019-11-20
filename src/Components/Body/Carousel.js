import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { LinkedIn, FormatQuote } from '@material-ui/icons';


class MyCarousel extends Component {    
  render() {
    return (
      <div className='container-style'>
        <ReactCardCarousel autoplay={true} autoplay_speed={4000}>
          <div className='card-style'>
            <p>
              {<FormatQuote fontSize='large' className='leftQuote'/>} I have been consistently impressed with Henrietha's attitude and productivity during the time we worked together and to this moment. She is both bright and quite motivated. A take charge person, capable to present new ideas and communicate the benefits effectively. Henrietha is a quick learner and has shown the ability to digest large volumes of Information in relatively short periods.{<FormatQuote fontSize='large' className='rightQuote'/>}
            </p>
            <p className="quote-author"><i><b>Tope M.A.</b></i><a href="https:/www.linkedin.com/in/hp4life" target="-blank" className="testimonialLink ">{<LinkedIn fontSize="large" />}</a></p>
          </div>
          <div className='card-style'>
            <p>
            {<FormatQuote fontSize='large' className='leftQuote'/>}I consider Henrietha a courageous person, one who is not afraid to take steps, and venture into unfamiliar territories. She is is tenacious amidst challenges,and dedicated to accomplishing her goals.{<FormatQuote fontSize='large' className='rightQuote'/>}
            </p>
            <p className="quote-author"><i><b>Gabriel C.M.</b></i><a href="https://www.linkedin.com/in/gabriel-mobuogwu-91007917b" target="-blank" className="testimonialLink ">{<LinkedIn fontSize="large" />}</a></p>
          </div>
          <div className='card-style'>
            <p>              
            {<FormatQuote fontSize='large' className='leftQuote'/>}Henrietha is definetely invaluable to any team she is part of, dedicated and devoted to whatever she decides to do. I have watched her sharpen her skills. Her commitments, attention to details and resilience is of great virtues, highly admired by everyone. She always desire to get better by the day.{<FormatQuote fontSize='large' className='rightQuote'/>}
            </p>
            <p className="quote-author"><i><b>Timothy O.F.</b></i><a href="https://www.linkedin.com/in/timothy-fabelurin-6bbb9166" target="-blank" className="testimonialLink ">{<LinkedIn fontSize="large" />}</a></p>
          </div>
          <div className='card-style'>
            <p>
            {<FormatQuote fontSize='large' className='leftQuote'/>}H, as I fondly call her, is a creative and innovative team player, she is definitely an asset to any organisation. Dedicated and fully committed to any task she embarks on.{<FormatQuote fontSize='large' className='rightQuote'/>}
            </p>
            <p className="quote-author"><i><b>Anthony O.R.</b></i><a href="#" target="-blank" className="testimonialLink ">{<LinkedIn fontSize="large" />}</a>
            </p>
          </div>
          <div className='card-style'>
            <p>
            {<FormatQuote fontSize='large' className='leftQuote'/>}Henrietha is a passionate learner who owns her learning. Targets and due dates are things she holds' up high, she has a good culture of working in a team.{<FormatQuote fontSize='large' className='rightQuote'/>} 
            </p>
            <p className="quote-author"><i><b>Ayo Kunle A.</b></i><a href="https://www.linkedin.com/in/afe-exclusive-3b607b88" target="-blank" className="testimonialLink ">{<LinkedIn fontSize="large" />}</a></p>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel;



  

