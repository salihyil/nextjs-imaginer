import '@/styles/reset.css';
import '@/styles/variables.css';
import '@/styles/global.css';

import { mainFont } from '@/libs/font';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={mainFont.className}>
      <body className='layout '>
        {children}
        <Footer />
        <div className='overlay' />
      </body>
    </html>
  );
}
