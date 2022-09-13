import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const MENUBAR_BLOCKS = {
  main: [
    {
      label: "All",
      count: 200,
      active: true,
    },
    {
      label: "Users",
      count: 80,
      active: false,
    },
    {
      label: "Leads",
      count: 60,
      active: false,
    },
    {
      label: "Visitors",
      count: 60,
      active: false,
    },
  ],
  segments: [
    {
      label: "Europe",
      count: 80,
    },
    {
      label: "Middle-East",
      count: 60,
    },
    {
      label: "Asia",
      count: 60,
    },
  ],
  tags: [
    {
      label: "Sales",
      count: 80,
    },
    {
      label: "Finance",
      count: 60,
    },
    {
      label: "User Experience",
      count: 60,
    },
  ],
};

export const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },
];

export const TAGS = [
  {
    label: "Getting Started",
    value: 1,
  },
  {
    label: "Onboarding",
    value: 2,
  },
  {
    label: "User Flow",
    value: 3,
  },
  {
    label: "UX",
    value: 4,
  },
  {
    label: "Bugs",
    value: 5,
  },
  {
    label: "V2",
    value: 6,
  },
];
