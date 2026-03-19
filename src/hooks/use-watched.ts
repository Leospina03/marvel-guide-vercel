import { useState, useCallback } from "react";

const KEY = (id: string) => `mcu-watched:${id}`;

export function useWatchedItem(id: string) {
  const [isWatched, setIsWatched] = useState<boolean>(
    () => localStorage.getItem(KEY(id)) === "1"
  );

  const toggle = useCallback(() => {
    setIsWatched(prev => {
      const next = !prev;
      if (next) localStorage.setItem(KEY(id), "1");
      else localStorage.removeItem(KEY(id));
      return next;
    });
  }, [id]);

  return { isWatched, toggle };
}
