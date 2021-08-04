import * as React from 'react'
import { SidebarStyle, SidebarHeader, IconStyle, SidebarContent, GuildIcon  } from '../utils/styles'

export const Sidebar = ({ guild }) => {
  return (
    <SidebarStyle>
      <SidebarHeader>
        <IconStyle />
      </SidebarHeader>
      <SidebarContent>
        <GuildIcon key={guild.id} />
      </SidebarContent>
    </SidebarStyle>
  );
};