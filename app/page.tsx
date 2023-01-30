import HomePageContainer from '@/containers/HomePageContainer';
import { HomePageProvider } from '@/context/useHomePage';

const HomePage = () => {
  return (
    <HomePageProvider>
      <HomePageContainer />
    </HomePageProvider>
  );
};

export default HomePage;
