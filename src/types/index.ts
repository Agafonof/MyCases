export type TFilter = {
  Id: string;
  Name: string;
};

export type TDataUnit = {
  Id: string;
  Image: string;
  Title: string;
  CaseColor: string;
  FeaturesTitle: string;
  FriendlyURL: string;
  Filters: TFilter[];
};

export type TResponse = {
  data: {
    Error: boolean | string | null;
    Data: TDataUnit[];
  };
};
