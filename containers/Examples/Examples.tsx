'use client'; //event dinlediğimiz için eklenir.
import Image from 'next/image';

import Tag from '@/components/Tag';
import { EXAMPLES } from './constants';
import styles from './styles.module.scss';

const Examples = () => {
  const handleCopy = (title: string) => {
    console.log(title);
  };

  return (
    <div className={styles.examples}>
      {EXAMPLES.map((example) => (
        <div className={styles.example} key={example.id}>
          <h4>{example.prompt}</h4>
          <Tag title='Copy' onClick={handleCopy} />
          <Image src={example.image} alt={example.prompt} fill />
        </div>
      ))}
    </div>
  );
};

export default Examples;
