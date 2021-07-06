/**
 * Font
 */
import '@fontsource/jost/400.css';
import '@fontsource/jost/200.css';
import '@fontsource/jost/300.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/800.css';
/**
 * Styles
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
/**
 * Js
 */
import 'bootstrap/js/dist/collapse';
import AOS from 'aos';

export { wrapPageElement } from './src/wrap-page-element';

export const onClientEntry = () => {
  AOS.init();

  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      setTimeout(() => {
        document.dispatchEvent(new CustomEvent('pageload'));
      }, 1500);
    }
  });
};
