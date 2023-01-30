import Link from 'next/link';

//Import SVGs in Next.js using SVGR google it
import GithubIcon from '@/assets/icons/github.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href='https://github.com/salihyil' target='_blank'>
        <GithubIcon />
      </Link>
      <Link href='https://twitter.com/salihyil1' target='_blank'>
        <TwitterIcon />
      </Link>
      <p>
        Made by <b>Salih Yılmaz</b>
        <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  );
};

export default Footer;
