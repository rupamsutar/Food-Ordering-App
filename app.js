import React from "react";
import { createRoot } from "react-dom/client";


const Heading = <h1>Heading of react</h1>

const NewComponent = () => {
    return(
    <div>
        {Heading}
        <h1>This is a new component</h1>
    </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<NewComponent />);