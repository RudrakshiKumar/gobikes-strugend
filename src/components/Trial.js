import React, { useState } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

const Day = ({ active, count, onClick }) => {
  return (
    <div onClick={onClick} className={active ? "day activeProcess" : "day"}>
      <div>{count.id}</div>
      <div>{count.name}</div>
    </div>
  );
};

const Trial = () => {
  const [chosen, setChosen] = useState();
  const test = {
    data: [
      { id: 1, name: "yo" },
      { id: 1, name: "yo" },
      { id: 1, name: "yo" },
      { id: 1, name: "yo" },
    ],
  };

  return (
    <div className="App">
      {test.map((t) => (
        <Day
          key={t}
          count={t}
          active={t === chosen}
          onClick={() => setChosen(t)}
        />
      ))}
    </div>
  );
};

export default Trial;
