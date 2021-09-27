import loadable from '@loadable/component';
import React from 'react';
import Layout from '../components/Layout';

const Home = loadable(() => import(/* webpackPrefetch: true */ '../components/Home'));
const About = loadable(() => import(/* webpackPrefetch: true */ '../components/About'));
const PracticeAreas = loadable(() => import(/* webpackPrefetch: true */ '../components/PracticeAreas'));
const Faq = loadable(() => import(/* webpackPrefetch: true */ '../components/Faq'));
const Contact = loadable(() => import(/* webpackPrefetch: true */ '../components/Contact'));

const IndexPage: React.FC<void> = () => {
  return (
    <Layout>
      <Home />
      <About />
      <PracticeAreas />
      <Faq />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
