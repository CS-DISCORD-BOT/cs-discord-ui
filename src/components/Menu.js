import { MenubarCategory, MenubarCategoryItem, MenubarContent, MenubarHeader, MenuStyle } from '../utils/styles'

export const Menubar = ({ channels, channel, setChannel }) => {

  return (
    <MenuStyle>
      <MenubarHeader>
        <span>Department of Computer Science</span>
      </MenubarHeader>
      <MenubarContent>
        {channels.map((channel) => (
          channel?.type === "category" ?
            <MenubarCategory key={channel.id} onClick={() => setChannel(channel)}>
              <span>{channel.name}</span>
            </MenubarCategory> : 
            <MenubarCategoryItem key={channel.id} onClick={() => setChannel(channel)}>
              <span># {channel.name}</span>
            </MenubarCategoryItem>
        ))}
      </MenubarContent>
    </MenuStyle>
  );
};