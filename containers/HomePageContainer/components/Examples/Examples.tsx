'use client'; //event dinlediğimiz için eklenir.
import Image from 'next/image';

import Tag from '@/components/Tag';
import { EXAMPLES } from './constants';
import styles from './styles.module.scss';
import { useHomePage } from '@/context/useHomePage';

const Examples = () => {
  const { changePrompt } = useHomePage();

  return (
    <div className={styles.examples}>
      {EXAMPLES.map((example) => (
        <div className={styles.example} key={example.id}>
          <h4>{example.prompt}</h4>
          <Tag title='Copy' onClick={() => changePrompt(example.prompt)} />
          <Image src={example.image} alt={example.prompt} fill />
        </div>
      ))}
    </div>
  );
};

export default Examples;
