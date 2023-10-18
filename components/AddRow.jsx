import { CheckBox } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";

const AddRow = ({ addRows, rowId, data, setData }) => {
  const inputStyle = {
    border: "1px solid #ccc",
    padding: "0 10px",
    borderRadius: "4px",
    width: "100%",
    height: "30px",
  };

  const [checkCheckbox, setcheckCheckbox] = useState(false);
  const handleChange = (e) => {
    let result = data.filter((entry) => entry.id === Number(e.target.name))[0];
    if (!checkCheckbox) {
      setcheckCheckbox(true);
      addRows((oldArr) => [...oldArr, rowId]);
      result = { ...result, rowId, check: true };
    } else {
      setcheckCheckbox(false);
      result = { ...result, rowId, check: false };
    }
    let index = data.findIndex((value) => value.id === Number(e.target.name));
    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArr = Object.assign([...data], {
        [index]: result,
      });
      setData(newArr);
    }
    console.log(data);
  };

  const onTextChange = (e) => {
    console.log(e.target.name, e.target.value);
    let result = data.filter((entry) => entry.id === rowId)[0];
    result = { ...result, id: rowId, [e.target.name]: e.target.value };
    // console.log(result);

    let index = data.findIndex((value) => value.id === rowId);
    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArr = Object.assign([...data], {
        [index]: result,
      });
      setData(newArr);
    }
  };

  return (
    <TableRow>
      <TableCell className="border border-collapse border-gray-200">
        <input
          checked={checkCheckbox}
          onChange={(e) => handleChange(e)}
          type="checkbox"
          name={rowId}
          id=""
          style={{ padding: "2px 5px !important" }}
        />
      </TableCell>
      <TableCell className="border border-collapse border-gray-200">
        <input
          type="text"
          name="key"
          style={inputStyle}
          onChange={(e) => onTextChange(e)}
        />
      </TableCell>
      <TableCell className="border border-collapse border-gray-200" l>
        <input
          type="text"
          name="value"
          style={inputStyle}
          onChange={(e) => onTextChange(e)}
        />
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
