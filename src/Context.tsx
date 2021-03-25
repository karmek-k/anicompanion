import { Storage } from '@ionic/storage';
import React from 'react';

export interface ContextValues {
  store: Storage;
  username: string;
}

export default React.createContext<ContextValues>({
  store: new Storage(),
  username: ''
});
