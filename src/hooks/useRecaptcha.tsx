import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export function useRecaptcha(actived: boolean): (action?: string) => Promise<string | boolean> {
  const { executeRecaptcha } = useGoogleReCaptcha();

  if (!actived || !executeRecaptcha) {
    return () => Promise.resolve(false);
  }

  return executeRecaptcha;
}
