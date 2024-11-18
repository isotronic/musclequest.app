import "./src/styles/global.css";
import "@fontsource-variable/inter";
import { GatsbyBrowser } from "gatsby";

// Fix unwanted page transitions caused by smooth scrolling set in CSS.
export const onPreRouteUpdate: GatsbyBrowser["onPreRouteUpdate"] = ({ prevLocation, location }) => {
  if (prevLocation && prevLocation.pathname !== location.pathname) {
    document.documentElement.style.scrollBehavior = "auto";
  }
};
export const onRouteUpdate: GatsbyBrowser["onRouteUpdate"] = () => {
  document.documentElement.style.scrollBehavior = "";
};
