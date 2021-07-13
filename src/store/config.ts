import { createStore, Store } from 'redux';

import { rootReducer } from './rootReducer';

export const store: Store = createStore(rootReducer());
