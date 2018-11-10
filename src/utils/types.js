type availability = {
  date: string,
};

type category = {
  url: string,
  name: string,
};

type SearchPageProps = {
  availability: Array<availability>,
  category: Array<category>,
  crimes: Array<Object>,
  message: string,
  loading: boolean,
  onSelectCrimeCategory: Function,
  onFilterCrimeCategory: Function,
  onSearch: Function,
}

type SearchPageState = {
  date: {
    min: string,
    max: string,
    dates: Array<availability>,
  },
  minmax: string[],
  crimeCheckboxes: Array<{ url: string, name: string, checked: boolean }>,
  selectedCategory: string,
}

type SearchReducerState = {
  +availability: Array<availability>,
  +category: Array<category>,
  +crimes: Array<Object>,
  +message: string,
  +loading: boolean,
}

type dateGraph = {
  date: string,
  count: number,
};

type categoryGraph = {
  category: string,
  count: number,
};

type outcomeGraph = {
  outcome: string,
  count: number,
};

type GraphProps = {
  graph: {
    date: Array<dateGraph>,
    category: Array<categoryGraph>,
    outcome: Array<outcomeGraph>,
  }
};

type news = {
  id: string,
  sectionName: string,
  pillarName: string,
  webTitle: string,
  webUrl: string,
  webPublicationDate: string,
};

type NewsProps = {
  news: Array<news>
};

type AnalysePageProps = {
  graph: {
    date: Array<dateGraph>,
    category: Array<categoryGraph>,
    outcome: Array<outcomeGraph>,
  },
  news: Array<news>,
};

type AnalyseReducerState = {
  +graph: {
    +date: Array<dateGraph>,
    +category: Array<categoryGraph>,
    +outcome: Array<outcomeGraph>,
  },
  +news: Array<news>,
  +message: string,
}

type Action = {
  type: string,
  data?: any,
  message?: string,
};

export {
  SearchPageProps,
  SearchPageState,
  SearchReducerState,
  AnalysePageProps,
  GraphProps,
  NewsProps,
  AnalyseReducerState,
  Action,
};