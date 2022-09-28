import { Input, Form } from "antd";
import styled from "styled-components";

export const StyledFormContainer = styled.div`
  /* height: 414px; */
  width: 425px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const StyledInput = styled(Input)`
  height: 45px;
  background: #f7f7f7 !important;

  &&.ant-input-affix-wrapper > input.ant-input {
    padding: 2px;
    background: #f7f7f7 !important;
  }
`;

export const StyledInputPassword = styled(Input.Password)`
  height: 45px;
  background: #f7f7f7 !important;

  &&.ant-input-affix-wrapper > input.ant-input {
    padding: 2px;
    background: #f7f7f7 !important;
  }
`;

export const StyledLink = styled.a`
  color: #3e6bff;
  text-align: right;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledFormItem = styled(Form.Item)`
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
    display: inline-block;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
  }

  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    content: "";
  }
`;
