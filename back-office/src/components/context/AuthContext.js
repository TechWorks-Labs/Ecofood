import { createContext } from 'react';
import { User } from '../hooks/useUser';

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
});