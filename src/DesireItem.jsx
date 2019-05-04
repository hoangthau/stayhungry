import React from "react";
import T from "prop-types";

import s from "./styles.module.css";

const Item = ({ title, children }) => (
  <div className={s.desireItem}>
    <h3>{title}</h3>
    <div className={s.desc}>{children}</div>
  </div>
);

Item.propTypes = {
  title: T.string.isRequired,
  children: T.node.isRequired
};

export default Item;
