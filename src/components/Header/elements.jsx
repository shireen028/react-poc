import styled from 'styled-components';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

export const StyledHeader = styled((props) => {
  return <Header {...props} />;
})`
  background: #232f3e !important;
`;

export const StyledMenu = styled(Menu)`
  &&&.ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
    background: #232f3e !important;
    &::selection{
      background: #151c24;
    }
  }

  &.ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
    background: #151c24;
  }

  &.ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected{
    background: #151c24;
  }

  background: #232f3e !important;
`;
