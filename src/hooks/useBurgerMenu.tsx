import React from 'react';

export function useBurgerMenu(ref: HTMLElement | null, mobile: boolean): () => void {
  const [burgerMenuOpen, setBurgetMenuOpen] = React.useState<boolean>(false);

  const openHeader = () => {
    if (ref) {
      const h = ref.scrollHeight;

      ref.style.height = `${h}px`;
      setBurgetMenuOpen(true);
    }
  };

  const resetHeader = () => {
    if (ref) {
      ref.style.removeProperty('height');
      setBurgetMenuOpen(false);
    }
  };

  const handleBurgetMenu = () => {
    if (burgerMenuOpen) {
      resetHeader();
    } else {
      openHeader();
    }
  };

  React.useEffect(() => {
    if (!mobile) {
      resetHeader();
    }
  }, [mobile]);

  return handleBurgetMenu;
}
