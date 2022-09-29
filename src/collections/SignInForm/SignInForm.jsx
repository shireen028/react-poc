import { Form, Image, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import {
  StyledFormContainer,
  StyledInput,
  StyledInputPassword,
  StyledLink,
  StyledFormItem,
} from "./elements";
import Button from "../../components/Button/Button";
import { useRouter } from "next/router";

const SignInForm = () => {
  const router = useRouter();
  const onFinish = (values) => {
    console.log("Success:", values);
    router.push("/my-projects");
  };
  return (
    <StyledFormContainer>
      <h1 style={{ fontSize: "24px" }}>Sign In</h1>
      <img
        alt="colored-bars"
        src="/images/Colored-bars.svg"
        width={"100px"}
        style={{ marginTop: "-5px", marginBottom: "20px" }}
      />
      <Form name="sign-in" onFinish={onFinish} layout="vertical">
        <StyledFormItem
          id="username"
          name="username"
          label="Enter Username"
          rules={[
            {
              required: true,
              message: "Incorrect username. Please try again!",
            },
          ]}
        >
          <StyledInput
            //type='text'
            // role='input'
            // aria-label='usernames'
            placeholder="Username"
            prefix={
              <Icon
                component={() => <img src="/icons/user.svg" alt="user-icon" />}
              />
            }
          />
        </StyledFormItem>
        <StyledFormItem
          id="password"
          type="password"
          // aria-label='passwords'
          name="password"
          label="Enter Password"
          rules={[
            { required: true, message: "Incorrect password. try again!" },
          ]}
        >
          <StyledInputPassword
            // role='input'
            type="password"
            placeholder="Password"
            prefix={
              <Icon
                component={() => <img src="/icons/lock.svg" alt="lock-icon" />}
              />
            }
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </StyledFormItem>
        <div
          style={{
            textAlign: "right",
            marginTop: "6px",
            marginBottom: "24px",
          }}
        >
          <StyledLink onClick={() => console.log("Forgot Password")}>
            Forgot Password?
          </StyledLink>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </StyledFormContainer>
  );
};

export default SignInForm;
