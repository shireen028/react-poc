import { Image, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledHeader, StyledMenu } from "./elements";
import {
  EuroOutlined,
  HeartOutlined,
  BarsOutlined,
  MenuOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";

export const Header = () => {
  const userMenu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: "0",
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );
  const router = useRouter();
  const authRoute = ["/sign-in"];
  return (
    <>
      {authRoute.includes(router.route) && (
        <StyledHeader>
          <img src="/images/research-gateway.svg" alt="research-gateway-logo" />
        </StyledHeader>
      )}

      {!authRoute.includes(router.route) && (
        <StyledHeader>
          <StyledMenu
            defaultSelectedKeys={["1"]}
            theme="dark"
            mode="horizontal"
            //overflowedIndicator={<MenuOutlined />}
          >
            <Menu.Item key="0">
              <img
                src="/images/research-gateway.svg"
                alt="research-gateway-logo"
              />
            </Menu.Item>
            <Menu.Item key="1">
              <Link href="/my-projects">My Projects</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/study">Study</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/key-pairs">Key Pairs</Link>
            </Menu.Item>
            {/*  <Menu.Item key='4'>
              <Dropdown overlay={userMenu} trigger={['click']}>
                <a
                  style={{
                    position: 'absolute',
                    right: '45px',
                    color: 'white',
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    <img
                      src='/icons/profile-user.svg'
                      alt='user-profile-icon'
                    />
                    UMed / Researcher
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Menu.Item> */}
          </StyledMenu>
        </StyledHeader>
      )}
    </>
  );
};
