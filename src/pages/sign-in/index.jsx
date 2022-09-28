import { StyledFormContainer } from '../../collections/SignInForm/elements';
import SignInForm from '../../collections/SignInForm/SignInForm';
import { Container } from '../../components/Container';

const SignInPage = () => {
  return (
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
  );
};

export default SignInPage;
