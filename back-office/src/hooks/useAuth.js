import { useEffect } from 'react';
import { useUser } from './useUser';
import { useSessionStorage } from './useSessionStorage';

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useSessionStorage();

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};