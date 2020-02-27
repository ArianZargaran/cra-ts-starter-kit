export const isDarkMode = (): boolean => {
  return window && window.matchMedia("(prefers-color-scheme: dark)").matches;
};
