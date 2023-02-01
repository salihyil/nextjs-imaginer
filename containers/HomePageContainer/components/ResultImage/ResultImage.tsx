'use client';
import Loading from '@/components/Loading';
import Tag from '@/components/Tag';
import { useHomePage } from '@/context/useHomePage';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const ResultImage = () => {
  const { isSubmitting, error, image, prompt } = useHomePage();

  if (error) return <p className={styles.error}>{error}</p>;
  if (!isSubmitting && !image) return null;

  return (
    <div className={styles.resultImage}>
      <div className={styles.animation}>
        {isSubmitting ? (
          <Loading />
        ) : (
          <>
            <div className={styles.content}>
              <p>{prompt}</p>
              <Tag
                title={
                  <Link href={image} target='_blank' download>
                    Download
                  </Link>
                }
              />
            </div>
            <Image src={image} alt={prompt} fill />
          </>
        )}
      </div>
    </div>
  );
};

export default ResultImage;
