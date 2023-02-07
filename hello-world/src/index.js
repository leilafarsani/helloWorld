import ReactDom from "react-dom";
import App from "./app";

const reactEl = <h1>Hello World</h1>;
ReactDom.render(<App />, document.getElementById("root"));
