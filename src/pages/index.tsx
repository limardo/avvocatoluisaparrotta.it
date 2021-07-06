import { graphql } from 'gatsby';
import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Faq from '../components/Faq';
import Home from '../components/Home';
import Layout from '../components/Layout';
import PracticeAreas from '../components/PracticeAreas';
import { AboutData, ContactData, FrontmatterData, FaqData, HomeData, PracticeAreasData } from '../data';

export interface IndexPageProp {
  data: {
    home: FrontmatterData<HomeData>;
    about: FrontmatterData<AboutData>;
    practiceAreas: FrontmatterData<PracticeAreasData>;
    faq: FrontmatterData<FaqData>;
    contact: FrontmatterData<ContactData>;
  };
}

const IndexPage: React.FC<IndexPageProp> = ({ data }) => {
  return (
    <Layout>
      <Home data={data.home.frontmatter} />
      <About data={data.about.frontmatter} />
      <PracticeAreas data={data.practiceAreas.frontmatter} />
      <Faq data={data.faq.frontmatter} />
      <Contact data={data.contact.frontmatter} />
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    home: mdx(frontmatter: { slug: { eq: "home" } }) {
      frontmatter {
        title
        slug
        preheading
        heading
        paragraph
        button
      }
    }
    about: mdx(frontmatter: { slug: { eq: "about" } }) {
      frontmatter {
        title
        slug
        preheading
        heading
        paragraph
        preheading2
        heading2
        paragraph2
        preheading3
        heading3
        paragraph3
        preheading4
        heading4
        paragraph4
        counter1
        counterText1
        counter2
        counterText2
      }
    }
    practiceAreas: mdx(frontmatter: { slug: { eq: "practice-areas" } }) {
      frontmatter {
        title
        slug
        features {
          title
          icon
          items
        }
        sloganText
        sloganButton
      }
    }
    faq: mdx(frontmatter: { slug: { eq: "faq" } }) {
      frontmatter {
        title
        slug
        box1 {
          title
          items {
            question
            answer
          }
        }
        box2 {
          title
          items {
            question
            answer
          }
        }
      }
    }
    contact: mdx(frontmatter: { slug: { eq: "contact" } }) {
      frontmatter {
        title
        slug
        heading
        features {
          title
          paragraph
        }
      }
    }
  }
`;

export default IndexPage;
