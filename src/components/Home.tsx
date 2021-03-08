import { RouteComponentProps } from '@reach/router';
import Login from './Login';

const Home = (props: RouteComponentProps) => {
  return (
    <main>
      <Login />
    </main>
  );
};

export default Home;
