import React from 'react';

export interface ContextValues {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export default React.createContext<ContextValues>({
  username: '',
  setUsername: () => null
});
