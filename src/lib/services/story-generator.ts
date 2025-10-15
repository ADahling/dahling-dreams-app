import ElevenLabs from 'elevenlabs';

const eleven = new ElevenLabs({ apiKey: process.env.ELEVENLABS_API_KEY! });

const supportedLanguages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'hi', 'ja', 'zh'];

export async function generateStory(theme: string, lang: string) {
  if (!supportedLanguages.includes(lang)) {
    throw new Error(`Language ${lang} is not supported. Supported languages: ${supportedLanguages.join(', ')}`);
  }

  return {
    text: 'TODO: OpenAI integration for story generation',
    audio: 'TODO: ElevenLabs integration for audio narration'
  };
}

export { supportedLanguages, eleven };
