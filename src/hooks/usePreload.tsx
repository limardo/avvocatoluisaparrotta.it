import React from 'react';

export function usePreload(): boolean {
  const [loaded, setLoaded] = React.useState<boolean>(false);

  const enableScroll = () => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('height');
    document.body.style.removeProperty('width');
    document.body.style.removeProperty('position');
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.position = 'fixed';
  };

  React.useEffect(() => {
    const handleLoader = () => {
      enableScroll();
      setLoaded(true);
    };

    disableScroll();

    document.addEventListener('pageload', handleLoader);

    return () => document.removeEventListener('pageload', handleLoader);
  }, []);

  return loaded;
}
