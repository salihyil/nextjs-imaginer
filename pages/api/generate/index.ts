import { NextApiRequest, NextApiResponse } from 'next';

const startGeneration = async (prompt: string) => {
  const response = await fetch(`${process.env.REPLICATE_API_URL}/predictions`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      version: process.env.REPLICATE_MODEL_VERSION,
      input: { prompt },
    }),
  });

  return response.json();
};

const getGeneration = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).json('No prompt provided');
  }

  const predictions = await startGeneration(prompt);

  let generatedImage;
  while (!generatedImage) {
    const result = await getGeneration(predictions.urls.get);

    if (result.status === 'succeeded') {
      [generatedImage] = result.output;
    } else if (result.status === 'failed') {
      break;
    } else {
      //ai resmi oluşturmaya devam ediyorsa 1sn bekle while tekrar gir
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  res.status(200).json(generatedImage ? generatedImage : 'Failed to create the image');
}
