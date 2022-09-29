import { StyledButton } from '../elements';
import {
  ProjectContainer,
  ProjectInfo,
  ProjectItemContainer,
  ProjectStatus,
  ProjectStatusContainer,
} from './elements';

export const ProjectItem = ({
  imageSrc,
  projectTitle,
  role,
  status,
  budget,
  desc,
}) => {
  return (
    <ProjectItemContainer>
      <ProjectStatusContainer>
        <ProjectContainer>
          <img src={imageSrc} alt={projectTitle} />
          <ProjectInfo>
            <h2>{projectTitle}</h2>
            <p>{role}</p>
            <h3>Hewlett Hawking</h3>
          </ProjectInfo>
        </ProjectContainer>
        <ProjectStatus>
          <p>
            Project Status: <span>{status}</span>
          </p>
          <p>Project Budget</p>
          <h3>{budget}</h3>
        </ProjectStatus>
      </ProjectStatusContainer>
      <p style={{ marginTop: '20px' }}>{desc}</p>
      <StyledButton style={{ width: '150px' }}>View Details</StyledButton>
    </ProjectItemContainer>
  );
};
