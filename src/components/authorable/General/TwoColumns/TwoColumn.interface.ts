export interface Params {}

export interface RootObject {
  fields: {
    data: {
      datasource: {
        name: string;
        fields: Field[];
      };
    };
  };
  params: {
    revertColumns: string | number;
  };
}

interface Field {
  name: string;
  jsonValue: JsonValue;
}

interface JsonValue {
  value?: Value;
}

interface Value {
  text?: string;
  anchor?: string;
  linktype?: string;
  class?: string;
  title?: string;
  target?: string;
  querystring?: string;
  id?: string;
  href?: string;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
}
