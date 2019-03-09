import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    basic: "#eeedf3",
    primary: "#39374d",
    secondary: "#ef5737",
    accent: "#02e697",
    error: "#ef5737",
    warning: "#e91e63",
    info: "#03a9f4",
    success: "#cddc39"
  }
});
