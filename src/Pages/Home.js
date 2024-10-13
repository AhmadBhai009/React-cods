import React from "react";
import Homeview from "../View/Homeview";
const Home = () => {
  const b = "welcom to react";
  return (
    <main>
      <Homeview message={b} />
    </main>
  );
};

export default Home;
