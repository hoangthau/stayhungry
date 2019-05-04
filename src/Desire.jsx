import React from "react";

import { desires } from "./data/desires";
import DesireItem from "./DesireItem";

import s from "./styles.module.css";

const Desire = () => (
  <div className={s.desire}>
    <h2>Describe your biggest dreams in this year</h2>
    <DesireItem title={desires[0].title}>
      <p>
        I have to listen and understand english everyday. Try some funny videos
        and whatever I like to learn. Some stunning chanels are Ellen Show, TED
        talks, Food Review Show, ...
      </p>
      <p>
        One of the most import thing is just listen small speech, and feel
        comfortable with this materials. I need to do it consistently. Try the
        easy talks and keep going with it.
      </p>
      <p>
        The goal is to comprehend main insights and memorise new vocabulary in
        the video or podcast.
      </p>
      <p>
        I'm supposed to listen more natural speaches and try more videos which
        have speed is pretty fast.
      </p>
      <p>Here is some small tasks that I need to attain everyday:</p>
      <ul>
        <li>Stream Ellen Show</li>
        <li>Pratice with Tung Dang from the IELTS workshop</li>
        <li>Watch 8 IELTS Show</li>
        <li>Attend Mr. Mark's English class</li>
        <li>Mimic some speeches in TED talks</li>
      </ul>
    </DesireItem>
    <DesireItem title={desires[1].title}>
      <p>I need to work and ask why when I face some issues.</p>
    </DesireItem>
  </div>
);

export default Desire;
