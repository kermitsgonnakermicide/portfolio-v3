import { writable } from 'svelte/store';

export const editMode = writable(false);

const PREFIX = 'site_edit_';

export function getSaved(key: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback;
  return localStorage.getItem(PREFIX + key) ?? fallback;
}

export function save(key: string, value: string) {
  localStorage.setItem(PREFIX + key, value);
}

export function getSavedJSON<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  const raw = localStorage.getItem(PREFIX + key);
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
}

export function saveJSON(key: string, value: unknown) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function resetAll() {
  const keys = Object.keys(localStorage).filter(k => k.startsWith(PREFIX));
  keys.forEach(k => localStorage.removeItem(k));
  location.reload();
}
