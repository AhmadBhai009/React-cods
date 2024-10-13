import React from "react";
import Cart from "../Component/Cart";

const Homeview = (props) => {
  console.log(props);
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="render">
        {a.map((el) => (
          <section>
            <Cart msg={props.message} />
          </section>
        ))}
      </div>
      {/* <section>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </section> */}
    </>
  );
};

export default Homeview;
