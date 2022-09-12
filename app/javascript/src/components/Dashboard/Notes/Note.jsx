import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Dropdown, Tag, Avatar, Tooltip } from "neetoui";

import { calculateCreatedAgo, formatDatetoWeekdayTime } from "./utils";

const Note = ({ note }) => (
  <div className="m-3 w-full space-y-2 rounded-sm border p-5 shadow-md">
    <div className="flex justify-between">
      <Typography style="h3">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li className="m-2">Edit</li>
        <li className="m-2">Delete</li>
      </Dropdown>
    </div>
    <Typography className="text-gray-500" style="body1">
      {note.description}
    </Typography>
    <hr />
    <div className="flex items-center">
      <Tag
        className="bg-gray-100 text-gray-500"
        label="Getting Started"
        type="outline"
      />
      <div className="ml-auto flex items-center space-x-1">
        <Clock size="15" />
        <Tooltip
          content={formatDatetoWeekdayTime(note.updated_at)}
          positon="bottom"
        >
          <Typography className="text-gray-500" style="body2">
            {calculateCreatedAgo(note.created_at)}
          </Typography>
        </Tooltip>
        <Avatar
          size="medium"
          user={{
            imageUrl: "https://i.pravatar.cc/300",
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
