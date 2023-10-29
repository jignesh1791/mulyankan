interface NewsItem {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Title: { value: string };
    newsImage: {
      value: {
        src: string;
        alt: string;
        width: string;
        height: string;
      };
    };
    newsTitle: { value: string };
    newsSubject: { value: string };
    PublishingDate: { value: string };
  };
}

interface Datasource {
  title: { value: string };
  addNewsItems: { jsonValue: NewsItem[] };
}

interface Data {
  datasource: Datasource;
}

export interface RootObjectProps {
  fields: {
    data: Data;
  };
}
