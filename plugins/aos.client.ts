import AOS from "aos";

import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  AOS.init({
    once: true,
    offset: 100,
    duration: 800,
    easing: "ease-out-cubic",
    delay: 100,
  });
});
