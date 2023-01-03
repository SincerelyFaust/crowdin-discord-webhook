export type DiscordEvent = Array<Embed>;

export interface Embed {
  title: string;
  description: string;
  url?: string;
  author: Author;
  color: number;
  timestamp: string;
  fields?: Field[];
  footer?: Footer;
}

export interface Author {
  name: string;
  url: string;
  icon_url: string;
}

export interface Field {
  name: string;
  value: string;
  inline?: boolean;
}

export interface Footer {
  text: string;
  icon_url?: string;
}
