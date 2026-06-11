import Icon from "@mui/material/Icon";

import Home from "layouts/pages/restaurant/home";
import Menus from "layouts/pages/restaurant/menus";
import SpecialMenus from "layouts/pages/restaurant/special-menus";
import Gallery from "layouts/pages/restaurant/gallery";
import Locations from "layouts/pages/restaurant/locations";
import AboutUs from "layouts/pages/restaurant/about-us";
import PrivateEvents from "layouts/pages/restaurant/private-events";

import ContactUs from "layouts/pages/restaurant/contact-us";

const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    route: "/pages/restaurant/home",
    component: <Home />,
  },
  {
    name: "our story",
    icon: <Icon>info</Icon>,
    route: "/pages/restaurant/about-us",
    component: <AboutUs />,
  },
  {
    name: "private events",
    icon: <Icon>celebration</Icon>,
    route: "/pages/restaurant/private-events",
    component: <PrivateEvents />,
  },
  {
    name: "menus",
    icon: <Icon>restaurant_menu</Icon>,
    route: "/pages/restaurant/menus",
    component: <Menus />,
  },
  {
    name: "special menus",
    icon: <Icon>star</Icon>,
    route: "/pages/restaurant/special-menus",
    component: <SpecialMenus />,
  },
  {
    name: "gallery",
    icon: <Icon>photo_camera</Icon>,
    route: "/pages/restaurant/gallery",
    component: <Gallery />,
  },
  {
    name: "locations",
    icon: <Icon>place</Icon>,
    collapse: [
      {
        name: "Arlington Heights, IL",
        route: "/pages/restaurant/locations/chicago",
        component: <Locations />,
      },
      {
        name: "Wilmette, IL",
        route: "/pages/restaurant/locations/wilmette",
        component: <Locations />,
      },
      {
        name: "Antigua Guatemala",
        route: "/pages/restaurant/locations/antigua",
        component: <Locations />,
      },
    ],
  },
  {
    name: "contact",
    icon: <Icon>contact_mail</Icon>,
    route: "/pages/restaurant/contact-us",
    component: <ContactUs />,
  },
];

export default routes;
