export interface IHeroSection {
  title: string;
  content: string;
  id: number;
}

export interface IHomePage {
  heroSection: IHeroSection;
}

export interface IMeta {
  page: number;
  take: number;
  totalCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
