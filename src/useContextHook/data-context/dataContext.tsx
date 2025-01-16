import { createContext } from 'react';

export interface User {
  id: number;
  name: string;
}

export const userContext = createContext<User | undefined>(undefined);
