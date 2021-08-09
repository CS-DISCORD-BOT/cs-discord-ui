import { MenubarCategory, MenubarCategoryItem, MenubarContent, MenubarHeader, MenuStyle } from '../utils/styles'

export const Menubar = ({ channels, channel, setChannel }) => {

  console.log(channels)

  return (
    <MenuStyle>
      <MenubarHeader>
        <span>Department of Computer Science</span>
      </MenubarHeader>
      <MenubarContent>
    {channels
      ?.filter((channel) => channel.name !== "commands")
      ?.map((channel) => (
          channel.type === 4 ?
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