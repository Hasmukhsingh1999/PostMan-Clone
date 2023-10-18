"use client";
import React, { useContext, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import SelectTab from "./SelectTab";
import Response from "./Response";
import ErrorScreen from "./ErrorScreen";

import { DataContext } from "./context/DataProvider";
import { checkParams } from "@/utils/common-utils";

import { getData } from "@/service/api";
import SnackBar from "./SnackBar";

const Home = () => {
  const [error, seterror] = useState(false);
  const [errorResponse, seterrorResponse] = useState(false);
  const [apiResponse, setapiResponse] = useState({});
  const [errorMsg, seterrorMsg] = useState("");
  const { formData, headerData, paramsData, jsonText } =
    useContext(DataContext);
  const onSendClick = async () => {
    if (!checkParams(formData, headerData, paramsData, jsonText, seterrorMsg)) {
      seterror(true);
      return false;
    }
    let response = await getData(formData, headerData, paramsData, jsonText);
    if (response === "error") {
      seterrorResponse(true);
      return;
    }
    seterrorResponse(false);
    setapiResponse(response.data);
  };
  return (
    <div>
      <Header />
      <div className={`w-[60%] `} style={{ margin: "20px auto 0 auto" }}>
        <Form onSendClick={onSendClick} />
        <SelectTab />
        {/* <Response/> */}
        {errorResponse ? <ErrorScreen /> : <Response data={apiResponse}/>}

        {error && (
          <SnackBar errorMsg={errorMsg} error={error} setError={seterror} />
        )}
      </div>
    </div>
  );
};

export default Home;
