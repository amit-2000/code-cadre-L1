import React from "react";
import { data } from "./data";
import Item from "./Item";
function Header() {
  console.log(data);
  return (
    <div className="header__container">
      {data.map((item) => {
        console.log(item);
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Header;
