export const isBrowser = typeof window !== `undefined`;

export function getScrollTop() {
  return isBrowser ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop : 0;
}
