import React, { useState } from "react";

const HooksState = () => {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(new Date());

  const handleClick = () => {
    setCounter(counter + 1);
    setTime(new Date());
  };
  return (
    <div className="text-center text-dark">
      <h4>Counter Life</h4>
      <button onClick={handleClick} className="btn btn-info m-3 p-2">
        {counter}
      </button>
      <p>
        at {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
      </p>
    </div>
  );
};

export default HooksState;
