import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import MenuBar from "./MenuBar";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <MenuBar />
      <Container>
        <Header
          menuBarToggle={() => {}}
          title="All Contacts"
          actionBlock={
            <Button icon="ri-add-line" label="Add Contact" onClick={() => {}} />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone Number, Etc.",
          }}
        />
        <Table />
      </Container>
    </>
  );
};

export default Contacts;
