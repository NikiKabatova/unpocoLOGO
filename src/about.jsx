import React from 'react';
import image from './img/us.jpg';

//<img src={image} alt="us" />;

const About = () => {
  return (
    <>
      <main className="main__About">
        <h1 className="title__About">ABOUT US</h1>
        <p className="text__About"></p>
        <ul>
          <li>
            Hello, we are Sylva and Niki, girls who have decided to change their
            whole lives.
          </li>
          <li>
            We both have a goal, after graduating from the Digital Academy, to
            make a programming, if you want coding.
          </li>
          <li>
            What you should know about us is that we are both passionate
            athletes.
          </li>
          <li>We love movement in all its forms.</li>
          <li>
            Niki loves the dance with which she expresses her inner self and
            thanks to which she feels her own.
          </li>
          <li>
            And Sylva, on the other hand, loves ice hockey, in which she tries
            to break social conventions and capture opinions that a woman should
            be at the stove.
          </li>
          <li>
            Together they form an extroverted duo and if they meet together in a
            room, it’s worth it.
          </li>
        </ul>
      </main>
      <img src={image} alt="us" />;
    </>
  );
};

export default About;
