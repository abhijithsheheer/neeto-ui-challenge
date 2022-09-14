import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Dropdown, Tag, Avatar, Tooltip } from "neetoui";

import { calculateCreatedAgo, formatDatetoWeekdayTime } from "./utils";

const Note = ({ note, setSelectedNoteIds, setShowDeleteAlert }) => (
  <div
    className="neeto-ui-shadow-s neeto-ui-rounded neeto-ui-border-gray-400 m-3 w-full
  space-y-2 border p-5"
  >
    <div className="flex justify-between">
      <Typography style="h3">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li className="m-2">Edit</li>
        <li
          className="m-2"
          onClick={() => {
            setSelectedNoteIds(note.id);
            setShowDeleteAlert(true);
          }}
        >
          Delete
        </li>
      </Dropdown>
    </div>
    <Typography className="neeto-ui-text-gray-500" style="body1">
      {note.description}
    </Typography>
    <hr />
    <div className="flex items-center">
      <Tag
        className="neeto-ui-bg-gray-100 neeto-ui-text-gray-500"
        label="Getting Started"
        type="outline"
      />
      <div className="ml-auto flex items-center space-x-1">
        <Clock size="15" />
        <Tooltip
          content={formatDatetoWeekdayTime(note.updated_at)}
          positon="bottom"
        >
          <Typography className="neeto-ui-text-gray-500" style="body2">
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
