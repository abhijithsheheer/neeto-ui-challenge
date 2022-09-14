import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Pane, Button, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  CONTACTS_FORM_INITIAL_FORM_VALUES,
  CONTACTS_FORM_VALIDATION_SCHEMA,
  ROLES,
} from "../constants";

const Form = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    Toastr.success("Contact was successfully created!");
    onClose();
  };

  return (
    <Formik
      initialValues={CONTACTS_FORM_INITIAL_FORM_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-8">
            <div className="flex w-full flex-row space-x-6">
              <Input
                required
                label="First Name"
                name="first_name"
                placeholder="Enter First Name"
              />
              <Input
                label="Last Name"
                name="last_name"
                placeholder="Enter Last Name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLES}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
            />
            <Button
              className="text-gray-500"
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
