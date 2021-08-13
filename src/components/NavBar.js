import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const x = links.map(y => {
    return <a key={y} href={'#'+y}>{y}</a>
  }

  )
  return <nav> {x} </nav>;
  }

export default NavBar;
