import React from 'react';

export interface ContextValues {
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
}

export default React.createContext<ContextValues>({
  userId: 0,
  setUserId: () => null
});
