import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Carlos & Carlos",
    image: "",
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "locations",
      items: [
        { name: "Guatemala City", href: "/pages/restaurant/locations/guatemala" },
        { name: "Los Angeles", href: "/pages/restaurant/locations/los-angeles" },
        { name: "Miami", href: "/pages/restaurant/locations/miami" },
      ],
    },
    {
      name: "company",
      items: [
        { name: "about us", href: "/pages/restaurant/about-us" },
        { name: "menus", href: "/pages/restaurant/menus" },
        { name: "events", href: "/pages/restaurant/events" },
        { name: "contact", href: "/pages/restaurant/contact-us" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Carlos & Carlos.
    </MKTypography>
  ),
};
