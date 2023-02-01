'use client';

import styles from './styles.module.scss';

interface ITagProps {
  title: string | React.ReactNode;
  onClick?: (title: any) => void;
}

const Tag = ({ title, onClick }: ITagProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(title);
    }
  };

  return (
    <button className={styles.tag} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Tag;
