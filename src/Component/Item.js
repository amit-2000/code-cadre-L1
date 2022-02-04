import React from "react";
import "./item.css";
function Item({ item }) {
  return (
    <div className="item__container">
      <h3 className="item__container-title">{item.title}</h3>
      <p>{item.discription}</p>
      <a className="item__container-link" href={item.link}>
        Read more...
      </a>
    </div>
  );
}

export default Item;
