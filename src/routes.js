import Icon from "@mui/material/Icon";

import Home from "layouts/pages/restaurant/home";
import Menus from "layouts/pages/restaurant/menus";
import Locations from "layouts/pages/restaurant/locations";
import AboutUs from "layouts/pages/restaurant/about-us";
import Events from "layouts/pages/restaurant/events";
import ContactUs from "layouts/pages/restaurant/contact-us";

const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    route: "/pages/restaurant/home",
    component: <Home />,
  },
  {
    name: "menus",
    icon: <Icon>restaurant_menu</Icon>,
    route: "/pages/restaurant/menus",
    component: <Menus />,
  },
  {
    name: "locations",
    icon: <Icon>place</Icon>,
    collapse: [
      {
        name: "guatemala",
        collapse: [
          {
            name: "Guatemala City",
            route: "/pages/restaurant/locations/guatemala",
            component: <Locations />,
          },
        ],
      },
      {
        name: "united states",
        collapse: [
          {
            name: "Los Angeles",
            route: "/pages/restaurant/locations/los-angeles",
            component: <Locations />,
          },
          {
            name: "Miami",
            route: "/pages/restaurant/locations/miami",
            component: <Locations />,
          },
        ],
      },
    ],
  },
  {
    name: "about us",
    icon: <Icon>info</Icon>,
    route: "/pages/restaurant/about-us",
    component: <AboutUs />,
  },
  {
    name: "events",
    icon: <Icon>event</Icon>,
    route: "/pages/restaurant/events",
    component: <Events />,
  },
  {
    name: "contact",
    icon: <Icon>contact_mail</Icon>,
    route: "/pages/restaurant/contact-us",
    component: <ContactUs />,
  },
  {
    name: "reservations",
    icon: <Icon>book_online</Icon>,
    href: "https://www.opentable.com/",
  },
];

export default routes;
