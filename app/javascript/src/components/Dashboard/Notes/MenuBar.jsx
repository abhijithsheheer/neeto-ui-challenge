import React from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoMenuBar } from "neetoui/layouts";

import { MENUBAR_BLOCKS } from "./constants";

const MenuBar = () => (
  <div className="flex">
    <NeetoMenuBar showMenu title="Notes">
      {MENUBAR_BLOCKS.main.map(menuBarBlock => (
        <NeetoMenuBar.Block
          active={menuBarBlock.active}
          count={menuBarBlock.count}
          key={menuBarBlock.label}
          label={menuBarBlock.label}
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
      {MENUBAR_BLOCKS.segments.map(menuBarBlock => (
        <NeetoMenuBar.Block
          count={menuBarBlock.count}
          key={menuBarBlock.label}
          label={menuBarBlock.label}
        />
      ))}
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
      {MENUBAR_BLOCKS.tags.map(menuBarBlock => (
        <NeetoMenuBar.Block
          count={menuBarBlock.count}
          key={menuBarBlock.label}
          label={menuBarBlock.label}
        />
      ))}
    </NeetoMenuBar>
  </div>
);

export default MenuBar;
