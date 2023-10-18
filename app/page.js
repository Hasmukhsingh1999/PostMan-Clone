import Home from "@/components/Home";
import DataProvider from "@/components/context/DataProvider";
import React from "react";

const page = () => {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
};

export default page;
