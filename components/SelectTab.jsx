"use client";
import { Tab, Tabs } from "@mui/material";
import React, { useContext, useState } from "react";
import CreateTable from "./CreateTable";
import CreateJsonText from "./CreateJsonText";
import { DataContext } from "./context/DataProvider";

const SelectTab = () => {
  const { headerData, setheaderData, paramsData, setparamsData } =
    useContext(DataContext);

  const [value, setvalue] = useState(0);
  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };
  return (
    <div className={"mt-3"}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: {
            backgroundColor: "#F26B3A",
            height: 4,
            bottom: 2,
          },
        }}
        textColor="none"
      >
        <Tab style={{ textTransform: "none !important" }} label="Params" />
        <Tab style={{ textTransform: "none !important" }} label="Headers" />
        <Tab style={{ textTransform: "none !important" }} label="Body" />
      </Tabs>
      <div
        role="tabpanel"
        cd
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
        className="mt-4"
      >
        <CreateTable
          text={"Query Params"}
          data={paramsData}
          setData={setparamsData}
        />
      </div>
      <div
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <CreateTable
          text={"Headers"}
          data={headerData}
          setData={setheaderData}
        />
      </div>
      <div
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        <CreateJsonText />
      </div>
    </div>
  );
};

export default SelectTab;
