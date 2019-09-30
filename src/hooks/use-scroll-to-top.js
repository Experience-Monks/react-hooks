import { useEffect } from 'react';
import { isBrowser } from '../util';

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
function useScrollToTop() {
  useEffect(() => {
    if (isBrowser) window.scrollTo(0, 0)
  }, [])
}

export default useScrollToTop
