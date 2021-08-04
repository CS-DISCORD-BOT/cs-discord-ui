import * as React from 'react'

import { MenubarCategory, MenubarCategoryItem, MenubarContent, MenubarHeader, MenuStyle } from '../utils/styles'

export const Menubar = ({ channels }) => {
  return (
    <MenuStyle>
      <MenubarHeader>
        <span>Department of Computer Science</span>
      </MenubarHeader>
      <MenubarContent>
        {channels.filter((channel) => channel.type === "category")
        .map((channel) => (
          <MenubarCategory key={channel.id}>
            <span>{channel.name}</span>
          </MenubarCategory>
        ))}
      </MenubarContent>
    </MenuStyle>
  );
};