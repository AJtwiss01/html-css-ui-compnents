import React from "react";

const Panel = ({ text, classname }) => {
  return (
    <>
      <div className={classname}>
        <p>{text}</p>
      </div>
    </>
  );
};
export default Panel;
