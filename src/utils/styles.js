import styled from 'styled-components';

export const SidebarStyle = styled.div`
  width: 100px;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main};
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuStyle = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.base.menu};
  color: ${({ theme }) => theme.text.main};
  box-sizing: border-box;
  margin-left: 100px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BasePageStyle = styled.div`
  width: calc(100% - 400px);
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.base.content};
  color: ${({ theme }) => theme.text.main};
  box-sizing: border-box;
  margin-left: 400px;
`;

export const BaseHeader = styled.header`
  height: ${({ theme }) => theme.height.top};
  box-sizing: border-box;
  box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;

export const SidebarHeader = styled(BaseHeader)`
  justify-content: center;
`;

export const MenubarHeader = styled(BaseHeader)`
  width: 100%;
  padding: 25px;
  position: fixed;
  background-color: inherit;
  z-index: 10;
  font-size: 17px;
  font-weight: bold;
`;

export const BasePageHeader = styled(BaseHeader)`
  padding: 25px;
`;

export const IconStyle = styled.div`
  width: 55px;
  height: 55px;
  background-color: grey;
  border-radius: 50px;
`;

export const GuildIcon = styled(IconStyle)`
  width: 60px;
  height: 60px;
  margin: 5px 0px
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.content};
`;

export const MenubarContent = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.padding.content};
  margin-top: 100px;
`;

export const MenubarCategory = styled.div`
  margin-top: 20px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  :nth-child(1) {
    margin: 20px 0px;
  }
  span {
    padding: 0px 25px;
  }
  color: ${({ theme }) => theme.text.text};
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text.main};
  }
`;

export const MenubarCategoryItem = styled.div`
  font-size: 18px;
  font-weight: lighter;
  padding: 5px 0px;
  color: ${({ theme }) => theme.text.text};
  span {
    padding: 0px 25px;
  }
  transition: 100ms background-color;
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text.main};
    background-color: #32343a;
  }
`;

export const BasePageContent = styled.div`
  padding: 25px;
`;