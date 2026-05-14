import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Carlos & Carlos",
    image: "/images/logos/brand.png",
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
  ],
  menus: [
    {
      name: "locations",
      items: [
        { name: "Antigua Guatemala", href: "/pages/restaurant/locations/antigua" },
        { name: "Wilmette, IL", href: "/pages/restaurant/locations/wilmette" },
        { name: "Arlington Heights, IL", href: "/pages/restaurant/locations/chicago" },
      ],
    },
    {
      name: "company",
      items: [
        { name: "our story", href: "/pages/restaurant/about-us" },
        { name: "menus", href: "/pages/restaurant/menus" },
        { name: "events", href: "/pages/restaurant/events" },
        { name: "contact", href: "/pages/restaurant/contact-us" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular" color="white">
      All rights reserved. Copyright &copy; {date} Carlos & Carlos.
    </MKTypography>
  ),
};
