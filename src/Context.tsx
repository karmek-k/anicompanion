import { Storage } from '@ionic/storage';
import React from 'react';

export interface ContextValues {
  store: Storage;
}

export default React.createContext<ContextValues>({ store: new Storage() });
