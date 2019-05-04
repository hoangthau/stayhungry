import React from "react";
import { images as englishItems } from "./data/englishImages";
import { images as frontendItems } from "./data/frontendImages";

import s from "./styles.module.css";

const Collage = () => (
  <div>
    <h2>Upload your dream collage</h2>
    <h3 className={s.collageItem}>English</h3>
    <div className={s.imageWrapper}>
      {englishItems.map((item, i) => (
        <div key={i} className={s.col}>
          <div
            className={s.imageItem}
            style={{ backgroundImage: `url(${item})` }}
          />
        </div>
      ))}
    </div>
    <h3 className={s.collageItem}>Frontend</h3>
    <div className={s.imageWrapper}>
      {frontendItems.map((item, i) => (
        <div key={i} className={s.col}>
          <div
            className={s.imageItem}
            style={{ backgroundImage: `url(${item})` }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Collage;
