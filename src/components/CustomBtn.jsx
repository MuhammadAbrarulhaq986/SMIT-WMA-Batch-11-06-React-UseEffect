//* Import React and the useEffect hook from the react library
import React, { useEffect } from "react";

//* Define a functional component named CustomBtn that accepts two props: title and color
function CustomBtn({ title, color }) {
  //* Use the useEffect hook to run a function when the component mounts and unmounts
  useEffect(() => {
    //* Log a message to the console when the component mounts
    console.log("component mounted");

    //* Return a function to be run when the component unmounts
    return () => {
      //* Log a message to the console when the component unmounts
      console.log("component unmount");
    };
  }, []); //* this is called Dependency Array },[]
  //* The empty array means this effect will only run once, when the component mounts

  //* Return the JSX for the custom button
  return (
    //* Create a button element with custom styles
    <button
      style={{
        //* Set the background color of the button to the color prop
        backgroundColor: color,
        //* Set the text color of the button to white
        color: "white",
        //* Add padding to the button
        padding: "10px 15px",
        //* Make the button corners rounded
        borderRadius: "20px",
      }}
    >
      {/* // Display the title prop as the button text */}
      {title}
    </button>
  );
}

// Export the CustomBtn component as the default export
export default CustomBtn;
