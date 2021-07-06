import React from 'react';

export function useStickyHeader(): boolean {
  const scrollTrigger = 40;
  const [isSticky, setIsSticky] = React.useState<boolean>(false);

  const checkSticky = React.useCallback(() => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if (distanceY > scrollTrigger) {
      setIsSticky(true);
    } else if (distanceY <= scrollTrigger) {
      setIsSticky(false);
    }
  }, [isSticky]);

  React.useEffect(() => {
    window.addEventListener('scroll', checkSticky);

    return () => window.removeEventListener('scroll', checkSticky);
  }, []);

  return isSticky;
}
