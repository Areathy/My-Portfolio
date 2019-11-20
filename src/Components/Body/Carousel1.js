import react from 'react-dom';



const Slide = require('./Slide').default;
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

<div style={{ position: 'relative', width: '100%', height: 500 }}>
  <Button onClick={() => setState({ open: true })}>Open carousel</Button>
  <AutoRotatingCarousel
    label='Get started'
    open={state.open}
    onClose={() => setState({ open: false })}
    onStart={() => setState({ open: false })}
    style={{ position: 'absolute' }}
  >
    <Slide
      media={<p><i class="fa fa-quote-left"></i>
      Henrietha is definetely invaluable to any team she is part of, dedicated and devoted to whatever she decides to do. I have watched her sharpen her skills. Her commitments, attention to details and resilience is of great virtues, highly admired by everyone. She always desire to get better by the day.
      <i class="fa fa-quote-right"> </i></p>}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='Timothy O.F.'
      subtitle={<p><a href="https://www.linkedin.com/in/timothy-fabelurin-6bbb9166" target="-blank" class="testimonialLink ">Linkedin</a></p>}
    />

    <Slide
      media={<p><i class="fa fa-quote-left"></i>
      Henrietha is definetely invaluable to any team she is part of, dedicated and devoted to whatever she decides to do. I have watched her sharpen her skills. Her commitments, attention to details and resilience is of great virtues, highly admired by everyone. She always desire to get better by the day.
      <i class="fa fa-quote-right"> </i></p>}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='Timothy O.F.'
      subtitle={<p><a href="https://www.linkedin.com/in/timothy-fabelurin-6bbb9166" target="-blank" class="testimonialLink ">Linkedin</a></p>}
    />

    <Slide
      media={<p><i class="fa fa-quote-left"></i>
      Henrietha is definetely invaluable to any team she is part of, dedicated and devoted to whatever she decides to do. I have watched her sharpen her skills. Her commitments, attention to details and resilience is of great virtues, highly admired by everyone. She always desire to get better by the day.
      <i class="fa fa-quote-right"> </i></p>}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='Timothy O.F.'
      subtitle={<p><a href="https://www.linkedin.com/in/timothy-fabelurin-6bbb9166" target="-blank" class="testimonialLink ">Linkedin</a></p>}
    />
  </AutoRotatingCarousel>
</div>