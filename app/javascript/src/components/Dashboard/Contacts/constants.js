export const DATA = [
  {
    name: "Ronald Richards",
    role: "Owner",
    imageUrl: "https://i.pravatar.cc/300?img=52",
    email: "ronaldrichards@borer.com",
    created_at: "Feb 5, 2021",
  },
  {
    name: "Jacob Jones",
    role: "User",
    imageUrl: "https://i.pravatar.cc/300?img=47",
    email: "jacobjones@borer.com",
    created_at: "Feb 5, 2021",
  },
];

// TODO: Implement better id generator
export const CONTACT_DETAILS = Array(10)
  .fill(DATA)
  .flat()
  .map(detail => ({
    id: Math.random() * 100,
    ...detail,
  }));

export const MENUBAR_BLOCKS = {
  main: [
    {
      label: "All",
      count: 0,
      active: true,
    },
    {
      label: "Archived",
      count: 0,
      active: false,
    },
    {
      label: "Completed",
      count: 0,
      active: false,
    },
    {
      label: "Phase 2",
      count: 0,
      active: false,
    },
  ],
};
