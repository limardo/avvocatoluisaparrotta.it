import { useMediaPredicate } from 'react-media-hook';

export function useMobile(): boolean {
  return useMediaPredicate('screen and (max-width: 993px)');
}
