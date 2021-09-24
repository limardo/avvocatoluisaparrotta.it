import React from 'react';
import styled from 'styled-components';
import { PracticeAreasData } from '../data';
import FeatureBox from './FeatureBox';
import Link from './Link';
import { List, ListItem } from './List';

const PracticeAreasMakeAppointmentStyled = styled.div`
  position: relative;
  padding: 40px 0;
  background: var(--primary-color);

  h3 {
    margin: 0;
    color: #fff;
  }
`;

const PracticeAreasStyled = styled.section`
  background: var(--primary-color);

  h3 {
    color: #fff;
  }
`;

const PracticeAreas: React.FC<{ data: PracticeAreasData }> = ({ data }) => {
  const { slug, features, sloganText, sloganButton } = data;

  const featureBoxes = features.map((feat, index) => (
    <div
      key={index}
      className="col-lg-3 col-md-6"
      data-aos="fade-left"
      data-aos-delay={400 + 200 * index}
      data-aos-anchor={`#${slug}`}
    >
      <FeatureBox title={feat.title} icon={feat.icon} set="icofont">
        <List>
          {feat.items.map((i, k) => (
            <ListItem key={k}>{i}</ListItem>
          ))}
        </List>
      </FeatureBox>
    </div>
  ));

  return (
    <PracticeAreasStyled aria-label="section" className="pt-0">
      <div id={slug}>
        <div className="row g-0">
          <div
            className="col-lg-3 col-md-6 text-center align-self-center"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-anchor={`#${slug}`}
          >
            <h3 className="p-5 m-0">Servizi</h3>
          </div>
          {featureBoxes}
        </div>
      </div>

      <PracticeAreasMakeAppointmentStyled id={`${slug}-bottom`}>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-8 mb-4 mb-md-0 text-center text-md-start"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-anchor={`#${slug}-bottom`}
            >
              <h3>{sloganText}</h3>
            </div>
            <div
              className="col-md-4 text-center text-md-start"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-anchor={`#${slug}-bottom`}
            >
              <Link hash="contact" className="btn btn-black">
                {sloganButton}
              </Link>
            </div>
          </div>
        </div>
      </PracticeAreasMakeAppointmentStyled>
    </PracticeAreasStyled>
  );
};

export default PracticeAreas;
