import styled from 'styled-components';

export const ProjectItemContainer = styled.div`
  padding: 20px;
  border: 1px solid #00000057;
  min-height: 326px;
  display: flex;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    img {
      width: 120px;
    }
  }
`;

export const ProjectStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 816px) {
    flex-direction: column;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 0px;
  }

  p {
    margin-bottom: 0px;
  }
`;

export const ProjectStatus = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  p {
    margin-bottom: 0px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 0px;
  }

  span {
    font-weight: bold;
  }

  @media screen and (max-width: 816px) {
    text-align: left;
  }
`;
