// @flow
export type availability = {
  date: string,
};

export type category = {
  url: string,
  name: string,
};

export type address = {
  postcode: string,
  street: string,
  detail: string,
};

export type SearchPageProps = {
  search: {
    availability: Array<availability>,
    date: {
      min: string,
      max: string,
      dates: Array<availability>,
    },
    category: Array<category>,
    address: address,
  },
  meta: {
    message: string,
    loading: boolean,
  },
  categories: Array<Object>,
  onUpdateChecked: Function,
  onFilterCrimeCategory: Function,
  onSearch: Function,
}

export type SearchPageState = {
  checkboxes: Array<{ url: string, name: string, checked: boolean }>,
}

export type SearchReducerState = {
  +availability: Array<availability>,
  +category: Array<category>,
  +crimes: Array<Object>,
  +message: string,
  +loading: boolean,
}

export type SearchFormProps = {
  dates: Array<Object>,
  categories: Array<{ url: string, name: string, checked: boolean }>,
  address: address,
  onCheckCategory: Function,
  onSearch: Function,
};

export type SearchFormState = {
  minDate: string,
  maxDate: string,
  postcode: string,
  selCategories: Array<Object>,
};

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
  street: Object,
  neighbourhood: Object,
  show: boolean,
  onToggleShow: Function,
};

export type AnalysePageState = {
  select: number,
};

export type AnalyseReducerState = {
  +graph: {
    +date: Array<dateGraph>,
    +category: Array<categoryGraph>,
    +outcome: Array<outcomeGraph>,
  },
  +news: Array<news>,
  +neighbourhood: Object,
  +show: boolean,
  +message: string,
};

export type Location = {
  lat: number,
  lng: number,
};

export type MapPageProps = {
  latlng: Location,
  circles: Array<Object>,
  onSaveLocation: Function,
  onLoadGraphRequest: Function,
  onLoadNewsRequest: Function,
  onLoadNeigbourhoodRequest: Function,
  onToggleAnalyseModal: Function,
}

export type MapReducerState = {
  +latlng: Location,
  +circles: Array<Object>,
  +crimes: Array<Object>,
  +message: string,
};

export type Action = {
  type: string,
  data?: any,
  message?: string,
};

export type HeaderProps = {
  isMobile: boolean,
};

export type HeaderState = {
  toggle: boolean,
};
