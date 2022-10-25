import { Helmet } from 'react-helmet';
import './main.css';
import { LadingPage } from './pages/LandingPage';

function App () {
  return (
    <>
      <Helmet>
        <title>Black Week - Suzano</title>
      </Helmet>
      <LadingPage />
    </>
  );
}

export default App;
