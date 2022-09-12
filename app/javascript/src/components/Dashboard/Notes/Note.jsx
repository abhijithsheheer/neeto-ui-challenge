import React from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import * as neetoui from "@bigbinary/neetoui";

import { calculateCreatedAgo, formatDatetoWeekdayTime } from "lib/dayjs";

const Note = ({ note }) => (
  <div className="m-3 w-full space-y-2 rounded-sm border p-5 shadow-md">
    <div className="flex justify-between">
      <neetoui.Typography style="h3">{note.title}</neetoui.Typography>
      <neetoui.Dropdown buttonStyle="text" icon={MenuVertical}>
        <li className="m-2">Edit</li>
        <li className="m-2">Delete</li>
      </neetoui.Dropdown>
    </div>
    <neetoui.Typography className="text-gray-500" style="body1">
      {note.description}
    </neetoui.Typography>
    <hr />
    <div className="flex items-center">
      <neetoui.Tag
        className="bg-gray-100 text-gray-500"
        label="Getting Started"
        type="outline"
      />
      <div className="ml-auto flex items-center space-x-1">
        <Clock size="15" />
        <neetoui.Tooltip
          content={formatDatetoWeekdayTime(note.updated_at)}
          positon="bottom"
        >
          <neetoui.Typography className="text-gray-500" style="body2">
            {calculateCreatedAgo(note.created_at)}
          </neetoui.Typography>
        </neetoui.Tooltip>
        <neetoui.Avatar
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
