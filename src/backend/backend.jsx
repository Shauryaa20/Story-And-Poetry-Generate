import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_API_KEY;

export const generatePoem = async (setPoem, genre, prompt, wordLimit) => {
    try {
      
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const input = `Generate a ${genre} poem with the following prompt: ${prompt}. The poem should be no longer than ${wordLimit} words.`;
      const result = await model.generateContent(input);
      setPoem(result.response.text());
    } catch (error) {
      console.error('Error generating poem:', error);
    }
  };

export const generateStory = async (setStory, genre, numCharacters, storyPlot) => {
    try {
      console.log(apiKey)
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const input = `Generate a ${genre} story with ${numCharacters} characters ${storyPlot ? ` with the following plot: ${storyPlot}` : ''}. Make it engaging and well-structured.`;
      const result = await model.generateContent(input);
      setStory(result.response.text());
    } catch (error) {
      console.error('Error generating story:', error);
    }
  };