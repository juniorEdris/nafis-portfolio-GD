export interface IRoutes {
  id: number;
  title: string;
  href: string;
}

export interface ILandingPageHeadings {
  heading: string;
  subheading?: string;
  iconClassName?: string;
  headingClassName?: string;
  subheadingClassName?: string;
  parentClassName?: string;
}

export interface ISingleProject {
  image: string;
  title: string;
  description: string;
  href: string;
  fiverrhref?: string;
  order?: string;
}
