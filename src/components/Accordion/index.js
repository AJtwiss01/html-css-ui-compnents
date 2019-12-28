import React from "react";
import Button from "../Button";
import Panel from "./Panel";
import "./style.css";

const handleClick = e => {
  console.log("this = " + e.target.classList);

  e.target.classList.toggle("active");
  var panel = e.target.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
};
const Accordion = () => {
  return (
    <>
      <Button
        text={"Panel"}
        classname={"accordion"}
        onclick={e => handleClick(e)}
      />
      <Panel
        text={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, exercitationem architecto! Iusto mollitia ea ut. Eum sit repudiandae optio iste recusandae placeat dolorem eos. Hic consectetur error ipsum maxime iusto."
        }
        classname={"panel"}
      />
      <Button
        text={"Panel"}
        classname={"accordion"}
        onclick={e => handleClick(e)}
      />
      <Panel
        text={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, exercitationem architecto! Iusto mollitia ea ut. Eum sit repudiandae optio iste recusandae placeat dolorem eos. Hic consectetur error ipsum maxime iusto."
        }
        classname={"panel"}
      />
    </>
  );
};

export default Accordion;
