import React from "react";

const ErrorScreen = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div>
      <h1 className="mt-5">Response</h1>
      <div style={containerStyle}>
        <div>
          <img
            src="https://i.stack.imgur.com/01tZQ.png"
            alt="error"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
