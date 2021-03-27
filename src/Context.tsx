import React from 'react';

export interface ContextValues {
  username: string;
}

export default React.createContext<ContextValues>({
  username: ''
});
