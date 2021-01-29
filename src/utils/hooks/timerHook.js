import { useEffect } from 'react';

export function useInterval(callback, delay = 10000) {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, []);
}
