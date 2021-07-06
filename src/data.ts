export interface MenuData {
  top: { order: number };
  main: { order: number };
}

export interface CommonData {
  title: string;
  slug: string;
  menu: MenuData;
}

export interface HomeData extends CommonData {
  preheading: string;
  heading: string;
  paragraph: string;
  button: string;
}

export interface AboutData extends CommonData {
  preheading: string;
  heading: string;
  paragraph: string;
  preheading2: string;
  heading2: string;
  paragraph2: string;
  preheading3: string;
  heading3: string;
  paragraph3: string;
  preheading4: string;
  heading4: string;
  paragraph4: string;
  counter1: number;
  counterText1: string;
  counter2: number;
  counterText2: string;
}

export interface PracticeAreasData extends CommonData {
  features: Array<{ title: string; icon: string; items: string[] }>;
  sloganText: string;
  sloganButton: string;
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface FaqData extends CommonData {
  box1: {
    title: string;
    items: Array<FaqItemData>;
  };
  box2: {
    title: string;
    items: Array<FaqItemData>;
  };
}

export interface ContactData extends CommonData {
  heading: string;
  features: Array<{ title: string; paragraph: string }>;
}

export interface FrontmatterData<T = {}> {
  frontmatter: T;
}
