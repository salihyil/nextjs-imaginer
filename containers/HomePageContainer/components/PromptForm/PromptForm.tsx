'use client';
import { useHomePage } from '@/context/useHomePage';
import React from 'react';
import styles from './styles.module.scss';

const PromptForm = () => {
  const { prompt, setPrompt, generateImage } = useHomePage();

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value);
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    generateImage();
  };

  return (
    <div className={styles.promptForm}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <textarea
          className={styles.promptTextarea}
          placeholder='An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble'
          rows={2}
          required
          value={prompt}
          onChange={handlePromptChange}></textarea>
        <button className={styles.generateButton} type='submit'>
          Generate
        </button>
      </form>
    </div>
  );
};

export default PromptForm;
