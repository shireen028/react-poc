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
        // showSearch
        id="sort"
        name="sort"
        defaultValue="Sort By"
        aria-required="false"
        role="combobox"
        aria-label="Sort by"
        onChange={handleChange}
      >
        <Option value="paused" aria-label={"paused"} role="option">
          Paused
        </Option>
        <Option value="active" aria-label={"active"} role="option">
          Active
        </Option>
        <Option value="lowToHigh" aria-label={"lowToHigh"} role="option">
          Budget: Low to High
        </Option>
        <Option value="HighToLow" aria-label={"HighToLow"} role="option">
          Budget: High to Low
        </Option>
      </StyledSelect>
      <StyledButton icon={<PlusOutlined />}>Add More</StyledButton>
    </StyledFiltersContainer>
  );
};
