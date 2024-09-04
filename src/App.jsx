// !!!!! REVISION CODE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //* Import the React library and the useState hook
// import React, { useState } from "react";

// //* Import the CustomBtn component from the components directory
// import CustomBtn from "./components/CustomBTn";

// //* Define the App function component
// function App() {
//   //* Initialize a state variable to track whether the button should be shown
//   const [showBtn, setShowBtn] = useState(true);

//   //* Initialize a state variable to store the button's value
//   const [btnValue, setBtnValue] = useState("hello");

//   //* Define a function to update the button's value
//   const updateValue = () => {
//     //* Prompt the user to enter an updated value
//     const value = prompt("Enter updated value");

//     //* Update the button's value state
//     setBtnValue(value);
//   };

//   //* Return the JSX for the App component
//   return (
//     <>
//       {/* Render a heading */}
//       <h1>Example of Mount and Unmount</h1>

//       {/* Render a button to toggle the CustomBtn component */}
//       <button onClick={() => setShowBtn(!showBtn)}>Toggle Button</button>

//       {/* Render a button to update the CustomBtn component's value */}
//       <button onClick={updateValue}>Update Button</button>

//       {/* Conditionally render the CustomBtn component based on the showBtn state */}
//       {showBtn ? <CustomBtn title={btnValue} color="blue" /> : null}
//     </>
//   );
// }

// // Export the App component as the default export
// export default App;

// !!!!! REVISION CODE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //* Import necessary dependencies from React
// import React, { useEffect, useState } from "react";

// //* Define the App function component
// function App() {
//   //* Initialize state variables for addition and subtraction counters
//   const [add, setAdd] = useState(0); //* Initial value of add counter is 0
//   const [subtract, setSubtract] = useState(100); //* Initial value of subtract counter is 100

//   //* Use the useEffect hook to run a function when the component mounts
//   useEffect(() => {
//     //* Log a message to the console when the component mounts
//     console.log("component mount");
//   }, []); //* Empty dependency array means this effect runs only once on mount

//   //* Define a function to increment the add counter
//   function addCounter() {
//     //* Update the add state by incrementing its current value
//     setAdd(add + 1);
//   }

//   //* Define a function to decrement the subtract counter
//   function lessCounter() {
//     //* Update the subtract state by decrementing its current value
//     setSubtract(subtract - 1);
//   }

//   //* Return the JSX for the component
//   return (
//     <>
//       <h1>Examples of useEffect, useState using Counter</h1>
//       {/* Button to increment the add counter */}
//       <button onClick={addCounter}>Increase {add}</button> <br />
//       {/* Button to decrement the subtract counter */}
//       <button onClick={lessCounter}>Decrease {subtract}</button>
//     </>
//   );
// }

// //* Export the App component as the default export
// export default App;

// !!!!! USE-EFFECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!! EXAMPLE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* falsy values in javascript
//* 0
//* ""
//* null
//* undefined
//* false
//* NaN

import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setData(res.data);
    }
    getData();
  }, []);

  // fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  // setData(json)
  //     })

  return (
    <>
      <h1>Hello world!</h1>
      {data ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;
