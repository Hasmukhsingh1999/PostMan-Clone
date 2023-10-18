import React from "react";

const Response = ({ data }) => {
  const textareaStyle = {
    width: "100%",
    padding: 10,
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    paddingLeft: 35,
    paddingTop: 8,
    borderColor: "#ccc",
    height: "150px",
  };

  // Convert the array of objects into a JSON string with indentation
  const jsonString = JSON.stringify(data, null, 2);

  return (
    <div>
      <p className="mt-2 mb-2">Response</p>
      <textarea
        style={textareaStyle}
        disabled
        value={jsonString}
      ></textarea>
    </div>
  );
};

export default Response;
