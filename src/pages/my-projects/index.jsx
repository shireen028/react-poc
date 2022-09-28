import { AllProjects } from '../../collections/AllProjects';
import { Container, PageHeader } from '../../components';

export default function MyProjects() {
  return (
    <>
      <PageHeader title='All Projects' />
      <Container style={{ background: '#030A1E' }}>
        <AllProjects allProjects={4} active={2} paused={2} />
      </Container>
    </>
  );
}
