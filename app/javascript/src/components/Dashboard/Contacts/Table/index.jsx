import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS_TABLE_COLUMN } from "./TableColumn";

import { CONTACT_DETAILS } from "../constants";

const Table = () => (
  <div className="w-full">
    <NeetoUITable
      allowRowClick={false}
      className="neeto-ui-text-gray-400"
      columnData={CONTACTS_TABLE_COLUMN}
      currentPageNumber={1}
      defaultPageSize={10}
      handlePageChange={() => {}}
      rowData={CONTACT_DETAILS}
      totalCount={30}
    />
  </div>
);

export default Table;
