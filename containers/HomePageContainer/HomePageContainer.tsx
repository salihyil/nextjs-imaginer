import PromptForm from '@/containers/HomePageContainer/components/PromptForm';
import PromptSuggestions from '@/containers/HomePageContainer/components/PromptSuggestions';
import Examples from '@/containers/HomePageContainer/components/Examples';
import ResultImage from '@/containers/HomePageContainer/components/ResultImage';

import styles from './styles.module.scss';

const HomePageContainer = () => {
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.title}>
        You just imagine,
        <br /> we handle the rest
      </h1>
      <p className={styles.description}>Tell us a prompt and we&apos;ll generate a story for you.</p>
      <PromptForm />
      <ResultImage />
      <PromptSuggestions />
      <Examples />
    </div>
  );
};

export default HomePageContainer;
