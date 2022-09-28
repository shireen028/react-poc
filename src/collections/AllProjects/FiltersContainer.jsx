import { Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;
import { StyledButton, StyledFiltersContainer, StyledSelect } from "./elements";

export const FiltersContainer = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <StyledFiltersContainer>
      <StyledSelect
        id="sort"
        name="sort"
        defaultValue="Sort By"
        aria-required="false"
        role="combobox"
        aria-label="MainSelect"
        onChange={handleChange}
      >
        <Option value="paused" aria-label="SelectOption1" role="textbox">
          <span aria-label="op1" role="textbox">
            {" "}
            Paused
          </span>
        </Option>
        <Option value="active" aria-label="SelectOption2" role="textbox">
          <span aria-label="op2" role="textbox">
            {" "}
            Active
          </span>
        </Option>
        <Option value="lowToHigh" aria-label="SelectOption3" role="textbox ">
          <span aria-label="op3" role="textbox">
            {" "}
            Budget: Low to High
          </span>
        </Option>
        <Option value="HighToLow" aria-label="SelectOption4" role="textbox">
          <span aria-label="op4" role="textbox">
            {" "}
            Budget: High to Low
          </span>
        </Option>
      </StyledSelect>
      <StyledButton icon={<PlusOutlined />}>Add More</StyledButton>
    </StyledFiltersContainer>
  );
};
