import Head from 'next/head';
import SignInForm from '../../collections/SignInForm/SignInForm';
import { Container } from '../../components/Container';

const SignInPage = () => {
  return (
    <>
    <Head>
      <title>Sign In - Research Gateway</title>
    </Head>
    <Container
      fullVertical={true}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 95px)',
        background: '#030A1E',
      }}
    >
      <SignInForm/>
    </Container>
    </>
  );
};

export default SignInPage;
