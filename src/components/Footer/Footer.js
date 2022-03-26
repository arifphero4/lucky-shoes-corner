import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <h4>1.props vs state?</h4>
      <p>
        Answer: The state is mutable on the other hand Props are immutable. The
        state can define states in the component itself on the other hand Props
        can pass properties from parent components. State changes can be
        asynchronous on the other hand Props is read-only.
      </p>
      <h4>2. how useState works?</h4>
      <p>
        Answer: What we write in JSX as HTML is not actual HTML. JSX converts it
        into JavaScript using Babel, and finally, React converts that to pure
        HTML for rendering in Browser. Babel is a JavaScript compiler that
        includes the ability to compile JSX into regular JavaScript. You can
        view babel as an intermediate step between your code and "executable"
        code. React also uses ES6, which is not supported by most of the
        browsers. Babel converts the ES6 code to a code which is compatible with
        the browsers.
      </p>
    </div>
  );
};

export default Footer;
