import React from "react";


const ReactConnection = () => {
  // Render check
  console.log("ReactConnection")

  // JSX
  return (
    <React.Fragment>
      {/* ReactConnection */}

      <div>
        <h1>React Connection</h1>
        <p>React connection created successfully...</p>
        <ul>
          <li>Environment: </li>
          <li>Machine: </li>
          <li>PORT: </li>
          <li>App: </li>
        </ul>
      </div>    

    </React.Fragment>
  )
}

export default ReactConnection;
