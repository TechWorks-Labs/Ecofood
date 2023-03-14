import { useContext } from 'react'
import { useSessionStorage } from './useSessionStorage';
import { AuthContext } from '../context/AuthContext';

export default function useUser() {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useSessionStorage();

  const addUser = (user) => {
    setUser(user);
    setItem('user', JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem('user', '');
  };

  return { user, login, logout };
}