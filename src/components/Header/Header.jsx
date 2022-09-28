import { Image, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledHeader, StyledMenu } from "./elements";

export const Header = () => {
  const router = useRouter();
  const authRoute = ["/sign-in"];
  return (
    <>
      {authRoute.includes(router.route) && (
        <StyledHeader>
          <img src="/images/research-gateway.svg" alt="headerlogo" />
          <Menu theme="dark" mode="horizontal" role={null} />
        </StyledHeader>
      )}

      {!authRoute.includes(router.route) && (
        <StyledHeader>
          <StyledMenu
            defaultSelectedKeys={["1"]}
            theme="dark"
            mode="horizontal"
          >
            <Menu.Item key="0">
              <img src="/images/research-gateway.svg" alt="logo" />
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
          </StyledMenu>
        </StyledHeader>
      )}
    </>
  );
};
