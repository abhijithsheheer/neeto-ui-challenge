import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { getContactTableColumnData } from "./TableColumn";

import { CONTACT_DETAILS } from "../constants";

const Table = ({ showAlert }) => (
  <div className="w-full">
    <NeetoUITable
      allowRowClick={false}
      className="neeto-ui-text-gray-400"
      columnData={getContactTableColumnData(showAlert)}
      currentPageNumber={1}
      defaultPageSize={10}
      handlePageChange={() => {}}
      rowData={CONTACT_DETAILS}
      totalCount={30}
    />
  </div>
);

export default Table;
