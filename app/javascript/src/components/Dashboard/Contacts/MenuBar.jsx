import React from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoMenuBar } from "neetoui/layouts";

import { MENUBAR_BLOCKS } from "./constants";

const MenuBar = () => (
  <div className="flex">
    <NeetoMenuBar showMenu title="Contacts">
      {MENUBAR_BLOCKS.main.map(menuBarBlocks => (
        <NeetoMenuBar.Block
          active={menuBarBlocks.active}
          count={menuBarBlocks.count}
          key={menuBarBlocks.label}
          label={menuBarBlocks.label}
        />
      ))}
      <NeetoMenuBar.SubTitle iconProps={[{ icon: Search }]}>
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </NeetoMenuBar.SubTitle>
      <NeetoMenuBar.SubTitle
        iconProps={[{ icon: Search }, { icon: Plus }, { icon: Settings }]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </NeetoMenuBar.SubTitle>
    </NeetoMenuBar>
  </div>
);

export default MenuBar;
