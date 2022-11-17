// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "melTheme",
      themes: {
        melTheme: {
          dark: false,
          colors: {
            primary: "#000000",
            secondary: "#c7a92e",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
