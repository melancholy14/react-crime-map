export type availability = {
  date: string,
};

export type category = {
  url: string,
  name: string,
};

export type SearchPageProps = {
  availability: Array<availability>,
  category: Array<category>,
  crimes: Array<Object>,
  message: string,
  loading: boolean,
  onSelectCrimeCategory: Function,
  onFilterCrimeCategory: Function,
  onSearch: Function,
}

export type SearchPageState = {
  date: {
    min: string,
    max: string,
    dates: Array<availability>,
  },
  checkboxes: Array<{ url: string, name: string, checked: boolean }>,
}

export type SearchReducerState = {
  +availability: Array<availability>,
  +category: Array<category>,
  +crimes: Array<Object>,
  +message: string,
  +loading: boolean,
}

export type dateGraph = {
  date: string,
  count: number,
};

export type categoryGraph = {
  category: string,
  count: number,
};

export type outcomeGraph = {
  outcome: string,
  count: number,
};

export type GraphProps = {
  graph: {
    date: Array<dateGraph>,
    category: Array<categoryGraph>,
    outcome: Array<outcomeGraph>,
  }
};

export type news = {
  id: string,
  sectionName: string,
  pillarName: string,
  webTitle: string,
  webUrl: string,
  webPublicationDate: string,
};

export type NewsProps = {
  news: Array<news>
};

export type AnalysePageProps = {
  graph: {
    date: Array<dateGraph>,
    category: Array<categoryGraph>,
    outcome: Array<outcomeGraph>,
  },
  news: Array<news>,
};

export type AnalysePageState = {
  show: boolean,
  select: number,
};

export type AnalyseReducerState = {
  +graph: {
    +date: Array<dateGraph>,
    +category: Array<categoryGraph>,
    +outcome: Array<outcomeGraph>,
  },
  +news: Array<news>,
  +message: string,
}

export type Location = {
  lat: number,
  lng: number,
};

export type MapReducerState = {
  +latlng: Location,
  +circles: Array<Object>,
  +message: string,
}

export type Action = {
  type: string,
  data?: any,
  message?: string,
};