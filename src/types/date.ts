export enum DateActionTypes {
  FETCH_DATE = 'FETCH_DATE',
  FETCH_DATE_SUCCESS = 'FETCH_DATE_SUCCESS',
  FETCH_DATE_ERROR = 'FETCH_DATE_ERROR',
}

export interface DateState {
  loading: boolean;
  error: string | null;
  date: Object;
}

interface FetchDateAction {
  type: DateActionTypes.FETCH_DATE;
}

interface FetchDateSuccessAction {
  type: DateActionTypes.FETCH_DATE_SUCCESS;
  payload: Object;
}

interface FetchDateErrorAction {
  type: DateActionTypes.FETCH_DATE_ERROR;
  payload: string;
}

export type DateAction =
  | FetchDateAction
  | FetchDateSuccessAction
  | FetchDateErrorAction;
