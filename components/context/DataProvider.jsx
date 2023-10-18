"use client";
import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [formData, setformData] = useState({
    url: "",
    type: "POST",
  });
  const [headerData, setheaderData] = useState([]);
  const [paramsData, setparamsData] = useState([]);
  const [jsonText, setjsonText] = useState("");
  return (
    <DataContext.Provider
      value={{
        formData,
        setformData,
        headerData,
        setheaderData,
        paramsData,
        setparamsData,
        jsonText,
        setjsonText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
