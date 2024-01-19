export type NameUrlPair = {
  name: string;
  url: string;
};

export type SiteMapLink = {
  [key: string]: NameUrlPair;
};
