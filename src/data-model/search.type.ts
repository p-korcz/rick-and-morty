import { SearchKey } from './search-key.enum';

export type SearchAction = { type: SearchKey; payload: string };

export type SearchState = { [x in SearchKey]?: string | number };

export type SearchStateWithPage = SearchState & { page?: number };
