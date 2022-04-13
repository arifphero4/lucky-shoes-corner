import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="question1">
        <h2>1. props vs state?</h2>
        <p>
          <strong>Answer:</strong> The state is mutable on the other hand Props
          are immutable. The state can define states in the component itself on
          the other hand Props can pass properties from parent components. State
          changes can be asynchronous on the other hand Props is read-only.
        </p>
      </div>

      <div className="question2">
        <h2>2. how useState works?</h2>
        <p>
          <strong>Answer: </strong> What we write in JSX as HTML is not actual
          HTML. JSX converts it into JavaScript using Babel, and finally, React
          converts that to pure HTML for rendering in Browser. Babel is a
          JavaScript compiler that includes the ability to compile JSX into
          regular JavaScript. You can view babel as an intermediate step between
          your code and "executable" code. React also uses ES6, which is not
          supported by most of the browsers. Babel converts the ES6 code to a
          code which is compatible with the browsers.
        </p>
      </div>
    </div>
  );
};

export default Footer;
