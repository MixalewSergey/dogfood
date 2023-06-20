import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from"react-router-dom"
import App from "./App"
import "./index.css";
import { render } from "react-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
 //   React.createElement("h1", null, "Hello React!")
//)
root.render(
    <BrowserRouter>
          <App/>
    </BrowserRouter>
)
    

/*JSX -html с движком js
<h1>123</h1>=>React.createElement("h1",null,"123")
*/
// // root.render(
// // <div title="Doggy">
// //     <h1>Hello</h1>
// //     <hr></hr>
// // </div>
// 