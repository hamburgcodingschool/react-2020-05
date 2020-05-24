import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
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
