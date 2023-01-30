import { SUGGESTIONS } from './constants';

import Tag from '@/components/Tag';

import styles from './styles.module.scss';

const PromptSuggestions = () => {
  return (
    <div className={styles.promptSuggestions}>
      <h3 className={styles.title}>Nothing in mind? Try one of these prompts: </h3>
      <div className={styles.suggestions}>
        {SUGGESTIONS.map((suggestion) => (
          <Tag key={suggestion.id} title={suggestion.title} />
        ))}
      </div>
    </div>
  );
};

export default PromptSuggestions;
