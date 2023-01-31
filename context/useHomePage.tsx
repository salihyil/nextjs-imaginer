'use client';
import { createContext, useContext, useMemo, useState } from 'react';

interface IHomePageContext {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generateImage: () => void;
  changePrompt: (newPrompt: string) => void;
}

const defaultValue = {
  prompt: '',
  setPrompt: () => {},
  generateImage: () => {},
  changePrompt: () => {},
};

const HomePageContext = createContext<IHomePageContext>(defaultValue);

type Props = {
  children: React.ReactNode;
};
export const HomePageProvider = ({ children }: Props) => {
  const [prompt, setPrompt] = useState<string>('');
  const changePrompt = (newPrompt: string) => {
    setPrompt(newPrompt);
    window.scrollTo(0, 0);
  };

  // useMemo= bu tarz value'ları useMemo sararız ki rerender'ları infinite olarak engellesin diye
  const data = useMemo(
    () => ({
      prompt,
      setPrompt,
      generateImage: async () => {
        try {
          await fetch('api/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
          });
        } catch (error) {
          throw new Error('Failed to generate');
        }
      },
      changePrompt,
    }),
    [prompt]
  );
  return <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>;
};

export const useHomePage = () => {
  const context = useContext(HomePageContext);
  return context;
};
