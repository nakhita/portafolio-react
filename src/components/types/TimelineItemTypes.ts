export interface YearItem {
  type: "year";
  year: string;
}

export interface ProjectItem {
  type: "item";
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export type TimelineElement = YearItem | ProjectItem;
