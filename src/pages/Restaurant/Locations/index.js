import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBadge from "components/MKBadge";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";

import bgImage from "assets/images/bg2.jpg";

const locations = [
  {
    city: "Guatemala City",
    country: "Guatemala",
    address: "6a Avenida 12-42, Zona 10",
    cityDetail: "Guatemala City, Guatemala",
    phone: "+502 1234-5678",
    email: "guatemala@carlosandcarlos.com",
    hours: {
      weekdays: "Mon - Thu: 12:00 PM - 10:00 PM",
      friday: "Fri - Sat: 12:00 PM - 11:00 PM",
      sunday: "Sun: 1:00 PM - 9:00 PM",
    },
    image: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/features.jpg",
  },
  {
    city: "Los Angeles",
    country: "United States",
    address: "742 S Broadway",
    cityDetail: "Los Angeles, CA 90014",
    phone: "+1 (213) 555-0100",
    email: "la@carlosandcarlos.com",
    hours: {
      weekdays: "Mon - Thu: 11:30 AM - 10:00 PM",
      friday: "Fri - Sat: 11:30 AM - 11:00 PM",
      sunday: "Sun: 12:00 PM - 9:00 PM",
    },
    image: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg",
  },
  {
    city: "Miami",
    country: "United States",
    address: "1000 Collins Ave",
    cityDetail: "Miami Beach, FL 33139",
    phone: "+1 (305) 555-0200",
    email: "miami@carlosandcarlos.com",
    hours: {
      weekdays: "Mon - Thu: 12:00 PM - 10:30 PM",
      friday: "Fri - Sat: 12:00 PM - 11:30 PM",
      sunday: "Sun: 12:00 PM - 10:00 PM",
    },
    image: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/footers.jpg",
  },
];

function Locations() {
  return (
    <>
      <DefaultNavbar
        brand="Carlos & Carlos"
        routes={routes}
        action={{
          type: "external",
          route: "https://www.opentable.com/",
          label: "reservations",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="40vh"
        width="100%"
        sx={{
          backgroundImage: ({
            palette: { gradients },
            functions: { linearGradient, rgba },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.7),
              rgba(gradients.dark.state, 0.7)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={8}
            lg={6}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: { fontSize: size["3xl"] },
              })}
            >
              Hours & Locations
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              Find a Carlos & Carlos near you.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container sx={{ my: 6 }}>
          <Grid
            container
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", mx: "auto", mb: 6 }}
          >
            <MKBadge
              variant="contained"
              color="info"
              badgeContent="three locations"
              container
              sx={{ mb: 2 }}
            />
            <MKTypography variant="h2" fontWeight="bold">
              Visit Us
            </MKTypography>
            <MKTypography variant="body1" color="text">
              From Guatemala to the United States, we bring authentic Latin American flavors closer
              to you.
            </MKTypography>
          </Grid>

          {locations.map((loc, i) => (
            <Grid
              key={loc.city}
              container
              spacing={3}
              alignItems="center"
              sx={{ mb: i < locations.length - 1 ? 8 : 0 }}
            >
              <Grid item xs={12} lg={5}>
                <MKBox
                  borderRadius="xl"
                  shadow="lg"
                  sx={{
                    overflow: "hidden",
                    transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
                    transition: "transform 200ms ease-out",
                    "&:hover": {
                      transform: "perspective(999px) rotateX(3deg) translate3d(0px, -4px, 5px)",
                    },
                  }}
                >
                  <MKBox
                    component="img"
                    src={loc.image}
                    alt={loc.city}
                    width="100%"
                    height={{ xs: 200, md: 280 }}
                    sx={{ objectFit: "cover" }}
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: { lg: "auto" } }}>
                <MKBox display="flex" alignItems="center" mb={2}>
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                    mr={2}
                  >
                    <Icon>location_on</Icon>
                  </MKBox>
                  <MKBox>
                    <MKTypography variant="h4" fontWeight="bold">
                      {loc.city}
                    </MKTypography>
                    <MKTypography variant="body2" color="info" fontWeight="medium">
                      {loc.country}
                    </MKTypography>
                  </MKBox>
                </MKBox>

                <MKBox display="flex" alignItems="center" mb={2}>
                  <Icon fontSize="small" color="info" sx={{ mr: 1 }}>
                    place
                  </Icon>
                  <MKTypography variant="body2" color="text">
                    {loc.address}, {loc.cityDetail}
                  </MKTypography>
                </MKBox>

                <MKBox display="flex" alignItems="center" mb={2}>
                  <Icon fontSize="small" color="info" sx={{ mr: 1 }}>
                    phone
                  </Icon>
                  <MKTypography
                    variant="body2"
                    color="text"
                    component="a"
                    href={`tel:${loc.phone}`}
                  >
                    {loc.phone}
                  </MKTypography>
                </MKBox>

                <MKBox display="flex" alignItems="center" mb={2}>
                  <Icon fontSize="small" color="info" sx={{ mr: 1 }}>
                    email
                  </Icon>
                  <MKTypography
                    variant="body2"
                    color="text"
                    component="a"
                    href={`mailto:${loc.email}`}
                  >
                    {loc.email}
                  </MKTypography>
                </MKBox>

                <MKBox
                  bgColor="grey-100"
                  borderRadius="md"
                  p={2}
                  mt={2}
                  mb={3}
                  sx={{ border: ({ borders: { borderWidth, borderColor } }) => `${borderWidth[1]} solid ${borderColor}` }}
                >
                  <MKTypography variant="caption" fontWeight="bold" display="block" mb={0.5}>
                    HOURS
                  </MKTypography>
                  <MKTypography variant="caption" color="text" display="block">
                    {loc.hours.weekdays}
                  </MKTypography>
                  <MKTypography variant="caption" color="text" display="block">
                    {loc.hours.friday}
                  </MKTypography>
                  <MKTypography variant="caption" color="text" display="block">
                    {loc.hours.sunday}
                  </MKTypography>
                </MKBox>

                <MKButton
                  component="a"
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.address + ", " + loc.cityDetail)}`}
                  target="_blank"
                  variant="gradient"
                  color="info"
                  size="small"
                >
                  Get Directions
                </MKButton>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Card>
      <MKBox pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Locations;
