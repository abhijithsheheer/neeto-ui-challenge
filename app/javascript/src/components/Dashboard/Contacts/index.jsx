import React, { useState } from "react";

import { Button, Alert, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import MenuBar from "./MenuBar";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDeleteAlert = () => {
    setShowDeleteAlert(showDeleteAlert => !showDeleteAlert);
  };

  const handleSubmit = () => {
    setShowDeleteAlert(showDeleteAlert => !showDeleteAlert);
    Toastr.success("Contact deleted successfully.");
  };
  return (
    <>
      <MenuBar />
      <Container>
        <Header
          menuBarToggle={() => {}}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => {
                setShowNewContactPane(true);
              }}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone Number, Etc.",
          }}
        />
        <Table
          showAlert={() => {
            handleDeleteAlert();
          }}
        />
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        <Alert
          closeButton={false}
          isOpen={showDeleteAlert}
          message="Are you sure you want to delete contact? These changes cannot be undone."
          size="md"
          title="Delete Contact"
          onClose={() => setShowDeleteAlert(false)}
          onSubmit={() => handleSubmit()}
        />
      </Container>
    </>
  );
};

export default Contacts;
