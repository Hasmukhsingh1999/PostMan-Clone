"use client";
import React, { useContext, useState } from "react";
import { DataContext } from "./context/DataProvider";

const Form = ({onSendClick}) => {
  const { formData, setformData } = useContext(DataContext);
  const handleChange = (e) => {
    setformData({ ...formData, type: e.target.value });
    console.log(formData);
  };

  const onUrlChange = (e) => {
    setformData({ ...formData, url: e.target.value });
    console.log(formData);
  };
  return (
    <div className={` w-full flex items-center gap-5`}>
      <select
        value={formData.type}
        class="block w-32 px-4 py-2 border rounded-lg shadow-sm bg-gray-200 text-gray-700"
        onChange={(e) => handleChange(e)}
      >
        <option class="bg-gray-200 text-gray-700" value="POST">
          POST
        </option>
        <option class="bg-gray-200 text-gray-700" value="GET">
          GET
        </option>
      </select>
      <input
        onChange={(e) => onUrlChange(e)}
        type="text"
        name="text"
        className="w-[50vw] px-4 py-2 border rounded-lg shadow-sm bg-gray-200 text-gray-700 "
        placeholder="Enter URL or paste text"
      />
      <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded" onClick={()=>onSendClick()}>
        Send
      </button>
    </div>
  );
};

export default Form;
