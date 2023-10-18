"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import AddRow from "./AddRow";

const CreateTable = ({ text, data, setData }) => {
  const [rows, addRows] = useState([0]);

  return (
    <>
      <p>{text}</p>
      <div>
        <Table
          className="w-full border border-collapse border-gray-200 mt-5"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="border border-collapse border-gray-200"></TableCell>
              <TableCell className="border border-collapse border-gray-200">
                KEY
              </TableCell>
              <TableCell className="border border-collapse border-gray-200">
                VALUE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <AddRow
                addRows={addRows}
                rowId={index}
                key={index}
                data={data}
                setData={setData}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CreateTable;
