import loadable from '@loadable/component';
import React from 'react';
import Layout from '../components/Layout';

const Home = loadable(() => import('../components/Home'));
const About = loadable(() => import('../components/About'));
const PracticeAreas = loadable(() => import('../components/PracticeAreas'));
// const Faq = loadable(() => import('../components/Faq'));
const Contact = loadable(() => import('../components/Contact'));

const IndexPage: React.FC<void> = () => {
  return (
    <Layout>
      <Home />
      <About />
      <PracticeAreas />
      {/*
      <Faq />
      */}
      <Contact />
    </Layout>
  );
};

export default IndexPage;
