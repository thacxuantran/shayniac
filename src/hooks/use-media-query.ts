'use client';

import { useSyncExternalStore } from 'react';

function getServerSnapshot(): boolean {
  return false;
}

function subscribe(query: string) {
  return (callback: () => void): (() => void) => {
    const media = window.matchMedia(query);
    media.addEventListener('change', callback);
    return () => media.removeEventListener('change', callback);
  };
}

function getSnapshot(query: string) {
  return (): boolean => window.matchMedia(query).matches;
}

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    subscribe(query),
    getSnapshot(query),
    getServerSnapshot
  );
}
