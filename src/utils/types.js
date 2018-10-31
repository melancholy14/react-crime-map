type SearchPageProps = {
  availability: Array<{ date: string }>,
  category: Array<{ url: string, name: string }>,
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
    dates: Array<{ value: string }>,
  },
  minmax: string[],
  showError: boolean,
  crimeCheckboxes: Array<{ url: string, name: string, checked: boolean }>,
  selectedCategory: string,
}

type SearchReducerState = {
  +availability: Array<{
    date: string,
  }>,
  +category: Array<{
    url: string,
    name: string,
  }>,
  +crimes: Array<Object>,
  +message: string,
  +loading: boolean,
}

type GraphProps = {
  date: Array<Object>,
  category: Array<Object>,
  outcome: Array<Object>,
};

type news = Array<{
  id: string,
  sectionName: string,
  pillarName: string,
  webTitle: string,
  webUrl: string,
  webPublicationDate: string,
}>;

type NewsProps = {
  news: news
};

type AnalysePageProps = {
  dateGraph: Array<Object>,
  categoryGraph: Array<Object>,
  outcomeGraph: Array<Object>,
  news: news,
};

type AnalyseReducerState = {
  +dateGraph: Array<Object>,
  +categoryGraph: Array<Object>,
  +outcomeGraph: Array<Object>,
  +news: news,
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