import React from 'react';
import styled from 'styled-components';

export interface AccordionContextProps {
  accordionKey: string | number;
}

export interface AccordionItemProps {
  title: string;
  itemKey: string | number;
}

export interface AccordionProps {
  title: string;
  accordionKey: string | number;
}

const AccordionContext = React.createContext<AccordionContextProps>({
  accordionKey: 0
});

const AccordionItemStyled = styled.div`
  border: none;

  .accordion-header {
    border: solid 1px #efefef;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;

    .accordion-button {
      color: #111111;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;

      &:after {
        background-image: url('data:image/svg+xml,<svg color="white" width="1" height="1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>');
        background-color: var(--primary-color);
        background-position: center;
        border-radius: 3px;
        width: 25px;
        height: 25px;
      }

      &:not(.collapsed) {
        color: #fff;
        background: var(--primary-color);
        border: none;
      }
    }
  }
`;

const AccordionStyled = styled.div`
  background: var(--primary-color);
  padding: 5px;
  border-radius: 2px;
  box-shadow: 5px 5px 40px 0 rgba(0, 0, 0, 0.1);

  .heading {
    padding: 15px 10px 0;

    h3 {
      color: #fff;
      font-size: 22px;
      margin-bottom: 25px;
    }
  }

  .content {
    color: #111111;
    margin: 5px;
    padding: 20px;
    background: #ffffff;
    border-radius: 2px;
  }
`;

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, itemKey, children }) => {
  const { accordionKey } = React.useContext(AccordionContext);
  const header = `heading-${accordionKey}-${itemKey}`;
  const collapse = `collapse-${accordionKey}-${itemKey}`;

  return (
    <AccordionItemStyled className="accordion-item">
      <h2 className="accordion-header" id={header}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapse}`}
          aria-expanded="false"
          aria-controls={collapse}
        >
          {title}
        </button>
      </h2>
      <div
        id={collapse}
        className="accordion-collapse collapse"
        aria-labelledby={header}
        data-bs-parent={`#${accordionKey}`}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </AccordionItemStyled>
  );
};

export const Accordion: React.FC<AccordionProps> = ({ title, accordionKey, children }) => {
  const accordion = `accordion-${accordionKey}`;
  const contextValue = React.useMemo(() => ({ accordionKey: accordion }), [accordionKey]);

  return (
    <AccordionContext.Provider value={contextValue}>
      <AccordionStyled className="box-highlight">
        <div className="heading text-center text-light">
          <h3>{title}</h3>
        </div>
        <div className="content">
          <div id={accordion} className="accordion">
            {children}
          </div>
        </div>
      </AccordionStyled>
    </AccordionContext.Provider>
  );
};
