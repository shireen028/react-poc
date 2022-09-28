import styled from 'styled-components';

export const ProjectItemContainer = styled.div`
  padding: 20px;
  border: 1px solid #00000057;
  height: 326px;
  display: flex;
  flex-direction: column;
`;

export const ProjectStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    font-size: 24px;
    margin-bottom: 8px;
  }

  h3{
    font-size: 20px;
    margin-bottom: 0px;
  }

  p{
    margin-bottom: 0px;
  }
`; 

export const ProjectStatus = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  p{
    margin-bottom: 0px;
  }

  h3{
    font-size: 20px;
    margin-bottom: 0px;
  }

  span{
    font-weight: bold;
  }
`;
