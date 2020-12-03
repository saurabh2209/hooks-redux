// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";
import Demo from "../presentation/Demo";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const nameSelector = createSelector(
  (state) => state.calendar.name,
  (nameList) => nameList
);

function App() {
  const events = useSelector(nameSelector);
  console.log("events", events);

  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "ADD_ELEMENT", value: "pamela" });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;

// document.querySelector("input").value = "John Doe";
// document.querySelector("button").click();
// setTimeout(() => console.log(document.getElementById("root").innerHTML));
