import React, { useEffect, useState, useRef } from "react";

const Countercomp = () => {
  let [val, setVal] = useState(0);
  const valRef = useRef(null);
  let increment = () => {
    setVal((prevVal) => prevVal + 1); //heare in am storing the old value in prevVal varible then update it in setval
    // setCount(count + 1);//by this way we can also incre value
    console.log(val); //checking values in colsole
  };
  let Decrement = () => {
    setVal((prevVal) => prevVal - 1); //heare in am storing the old value in prevVal varible then  dec it in setval
    console.log(val); //checking values in colsole
    // setCount(count - 1);//by this way we can also  dec value
  };

  useEffect(() => {
    //by using this use ref hook we can add in line style in react by pass ing the refrence of varible
    if (valRef.current) {
      if (val > 0) {
        valRef.current.style.color = "green"; // Positive values in green
        valRef.current.style.fontSize = "22px";
      } else if (val < 0) {
        valRef.current.style.color = "red"; // Negative values in red
      } else {
        valRef.current.style.color = "black"; // Reset color to black for zero
      }
    }
    if (val < 0) {
      const timer = setTimeout(() => {
        setVal(0); // Resetting value to 0 after 2 seconds
      }, 200);

      // Cleanup function to clear the timer if the component re-renders
      return () => clearTimeout(timer);
    }
  }, [val]);
  return (
    <section>
      <div className="counter">
        {/* <p> {val}</p> */}
        <p ref={valRef}>{val}</p>
        <div className="buttons">
          <button className="btn" onClick={increment}>
            Increment
          </button>
          <button className="btn" onClick={Decrement}>
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
};

export default Countercomp;
