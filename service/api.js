import { getHeaderAndParams } from "@/utils/common-utils";

const { default: axios } = require("axios");


export const getData = async (formData, headerData, paramsData, jsonText) => {
    const apiType = formData.type.toLowerCase();
    const apitURL = formData.url;
    const apiHeaders = getHeaderAndParams(headerData)
    const apiParams = getHeaderAndParams(paramsData)
  try {
    return await axios({
      baseURL: "",
      method:apiType,
      url:apitURL,
      body:jsonText,
headers:apiHeaders,
params:apiParams

    });
  } catch (error) {
    console.log("Error while calling getData Api", error);
    return "error";
  }
};
