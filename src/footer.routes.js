import InstagramIcon from "@mui/icons-material/Instagram";

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
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/carlosycarlos.antigua?igsh=cmYybWZvMmdwMmZk",
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
        { name: "gallery", href: "/pages/restaurant/gallery" },
        { name: "contact", href: "/pages/restaurant/contact-us" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular" color="white">
      &copy; 2026 The Montiel Group.
    </MKTypography>
  ),
};
