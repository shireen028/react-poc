import { redirect } from 'next/dist/server/api-utils';
import { AllProjects } from '../collections/AllProjects';
import { Container, PageHeader } from '../components';

const Home = () => {
  return <></>;
};

export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: '/sign-in',
    },
    props: {},
  };
}

export default Home;
