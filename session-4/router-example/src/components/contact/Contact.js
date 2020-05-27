import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = (props) => {
  // The useParams a function from react-router-dom
  // helps us to get route params from the path.
  // The word "params" describes dynamic segments of the URL
  // (the part in the route we defined with ':userName').
  //
  // Alternatively you can get them through the match prop
  // passed to your component, e.g.:
  // const userName = props.match.params.userName
  const {userName} = useParams()

  return (
    <div className="container">
      <h1>Contact</h1>
      {userName && <h2>Hey {userName} don't hesitate to get in touch with us.</h2>}
      <p>
        <strong>Yar Pirate Ipsum</strong><br />
        <a href="https://pirateipsum.me/">https://pirateipsum.me/</a>
      </p>
    </div>
  )
}
export default Contact
