import { Select, Button } from 'antd';
import styled from 'styled-components';

export const AllProjectsContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;

  a{
    color: #3E6BFF;

    &:hover{
      text-decoration: underline;
    }
  }

  .bottom-para{
    text-align: center;
    margin-top: 30px;
  }
`;

export const ProjectInfoBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font-size: 24px;
    margin-bottom: 2px;
  }

  span{
    font-weight: bold;
  }
`;

export const StyledFiltersContainer = styled.div`
  display: flex;
  gap: 10%;
`;

export const StyledSelect = styled(Select)`
  width: 200px !important;
  height: 50px !important;

  &&.ant-select-selector{
    height: 50px;
  }

  &&.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    border: 1px solid #06153E;
    height: 50px;
  }
  
  &&.ant-select-arrow{
    color: #06153E !important;
  }
  
  &&.ant-select-single .ant-select-selector .ant-select-selection-item, .ant-select-single .ant-select-selector .ant-select-selection-placeholder{
    line-height: 45px;
  }

`;

export const StyledButton = styled(Button)`
  height: 50px;
  border: 1px solid #06153E;
`;