import React from 'react';
import { useMobile } from '../hooks/useMobile';

export interface LinkProp extends React.PropsWithChildren {
  hash: string;
  className?: string;
}

const Link: React.FC<LinkProp> = ({ children, hash = '', ...props }) => {
  const mobile = useMobile();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const page = document.querySelector(event.currentTarget.hash);

    if (page) {
      const coords = page.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const absLeft = coords.left + scrollLeft;
      const absTop = coords.top + scrollTop;

      const posLeft = absLeft;
      const posTop = mobile ? absTop : absTop - 90;

      window.scrollTo({ top: posTop, left: posLeft, behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${hash}`} {...props} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
