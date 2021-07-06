import React from 'react';
import styled from 'styled-components';
import { FaqData, FaqItemData } from '../data';
import { Accordion, AccordionItem } from './Accordion';

const FaqStyled = styled.section`
  position: relative;
  padding-bottom: 30px;
`;

const Faq: React.FC<{ data: FaqData }> = ({ data }) => {
  const { slug, box1, box2 } = data;

  const getAccordionItems = (items: Array<FaqItemData>) =>
    items.map((item, index) => (
      <AccordionItem key={index} itemKey={index} title={item.question}>
        {item.answer}
      </AccordionItem>
    ));

  return (
    <FaqStyled id={slug} aria-label="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Frequently Asked Questions</h2>
            <div className="small-border" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-anchor={`#${slug}`}>
            <Accordion title={box1.title} accordionKey={0}>
              {getAccordionItems(box1.items)}
            </Accordion>
          </div>
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400" data-aos-anchor={`#${slug}`}>
            <Accordion title={box2.title} accordionKey={1}>
              {getAccordionItems(box2.items)}
            </Accordion>
          </div>
        </div>
      </div>
    </FaqStyled>
  );
};

export default Faq;
