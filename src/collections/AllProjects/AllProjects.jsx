import { Col, Row } from 'antd';

import { AllProjectsContainer, ProjectInfo, ProjectInfoBar } from './elements';
import { FiltersContainer } from './FiltersContainer';
import { ProjectItem } from './ProjectItem/ProjectItem';

export const AllProjects = ({ allProjects, active, paused }) => {
  return (
    <AllProjectsContainer>
      <ProjectInfoBar>
        <ProjectInfo>
          <h1>All projects ({allProjects})</h1>
          <p>
            You currently have <span>{active} active</span> &{' '}
            <span>{paused} paused</span> projects
          </p>
        </ProjectInfo>
        <FiltersContainer />
      </ProjectInfoBar>

      <Row gutter={[32, 32]}>
        <Col span={12} sm={24} lg={12} xs={24}>
          <ProjectItem
            projectTitle='Chiron'
            role='Principal Investigator'
            imageSrc={'/icons/icon3.svg'}
            status='Paused'
            budget='$3,224'
            desc='Small Molecules and Peptide-Based Candidates as Therapeutics and Vaccines for COVID-19 Pandemic'
          />
        </Col>
        <Col span={12} sm={24} lg={12} xs={24}>
          <ProjectItem
            projectTitle='Evolution'
            role='Principal Investigator'
            imageSrc={'/icons/icon2.svg'}
            status='Active'
            budget='$3,224'
            desc='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
          />
        </Col>

        <Col span={12} sm={24} lg={12} xs={24}>
          <ProjectItem
            projectTitle='Evolution'
            role='Principal Investigator'
            imageSrc={'/icons/icon1.svg'}
            status='Active'
            budget='$3,224'
            desc='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
          />
        </Col>
        <Col span={12} sm={24} lg={12} xs={24}>
          <ProjectItem
            projectTitle='Chiron'
            role='Principal Investigator'
            imageSrc={'/icons/icon4.svg'}
            status='Paused'
            budget='$3,224'
            desc='Small Molecules and Peptide-Based Candidates as Therapeutics and Vaccines for COVID-19 Pandemic'
          />
        </Col>
      </Row>
      <p className='bottom-para'>
        No other projects are found. <a>Add Project.</a>
      </p>
    </AllProjectsContainer>
  );
};
