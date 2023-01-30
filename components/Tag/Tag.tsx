'use client';
import styles from './styles.module.scss';

interface ITagProps {
  title: string;
  onClick?: (title: string) => void;
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

export { Tag };
