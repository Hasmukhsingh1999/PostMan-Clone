import React, { useContext } from "react";
import { DataContext } from "./context/DataProvider";

const CreateJsonText = () => {
  const { jsonText, setjsonText } = useContext(DataContext);

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

  const onValueChange = (e) => {
    setjsonText(e.target.value);
  };
  return (
    <div>
      <p className="mt-2 mb-2">JSON</p>
      <textarea
        style={textareaStyle}
        onChange={(e) => onValueChange(e)}
      ></textarea>
    </div>
  );
};

export default CreateJsonText;
