'use client';
import { createContext, useContext, useMemo, useState } from 'react';

interface IHomePageContext {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generateImage: () => void;
  changePrompt: (newPrompt: string) => void;
  isSubmitting: boolean;
  error: string | null;
  image: string;
  resultPrompt: string;
}

const defaultValue = {
  prompt: '',
  setPrompt: () => {},
  generateImage: () => {},
  changePrompt: () => {},
  isSubmitting: false,
  error: null,
  image: '',
  resultPrompt: '',
};

export const HomePageContext = createContext<IHomePageContext>(defaultValue);

type Props = {
  children: React.ReactNode;
};
export const HomePageProvider = ({ children }: Props) => {
  const [prompt, setPrompt] = useState<string>('');
  const [image, setImage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [resultPrompt, setResultPrompt] = useState('');

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
        setSubmitting(true);
        setImage('');
        setResultPrompt('');

        try {
          const response = await fetch('api/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
          });

          if (!response.ok) throw new Error(response.statusText ?? response.status);

          const generatedImage = await response.json();

          setError(null);
          setResultPrompt(prompt);
          setImage(generatedImage);
        } catch (error) {
          setError(error as string);
        }
        setSubmitting(false);
      },
      changePrompt,
      image,
      error,
      isSubmitting,
      resultPrompt,
    }),
    [error, image, isSubmitting, prompt, resultPrompt]
  );
  return <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>;
};

export const useHomePage = () => {
  const context = useContext(HomePageContext);
  return context;
};
