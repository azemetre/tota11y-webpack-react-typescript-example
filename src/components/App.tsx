import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <h2>Poor Accessibility</h2>
      <section
        style={{
          backgroundColor: "#ffff04",
          color: "#00ff03"
        }}
      >
        <h4>A Non Consecutive Header</h4>
        <p style={{ color: "#000" }}>
          sufficient contrast ratio for paragraph text compared to header.{` `}
          link not useful for screen readers {` `}
          <a style={{ color: "#ff69b4" }} href="javascript:void 0">
            here
          </a>
        </p>
      </section>
    </React.Fragment>
  );
};

export default App;
