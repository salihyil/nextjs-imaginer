'use client';
import { useHomePage } from '@/context/useHomePage';
import Tag from '@/components/Tag';

import styles from './styles.module.scss';
import { SUGGESTIONS } from './constants';

const PromptSuggestions = () => {
  const { changePrompt } = useHomePage();

  return (
    <div className={styles.promptSuggestions}>
      <h3 className={styles.title}>Nothing in mind? Try one of these prompts: </h3>
      <div className={styles.suggestions}>
        {SUGGESTIONS.map((suggestion) => (
          <Tag key={suggestion.id} title={suggestion.title} onClick={changePrompt} />
        ))}
      </div>
    </div>
  );
};

export default PromptSuggestions;
