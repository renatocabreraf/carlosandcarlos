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
import brandLogo from "assets/images/logos/brand.png";

import bgImage from "assets/images/restaurant/antigua/carlos-13-1.jpg";

const upcomingEvents = [
  {
    title: "Noche de Vinos Italianos",
    date: "June 12, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "Antigua Guatemala",
    description:
      "Una cena exclusiva de varios tiempos maridada con selecciones de las mejores bodegas italianas. Nuestro sommelier guiará un recorrido por las regiones vinícolas de Italia, desde el Piamonte hasta la Toscana.",
    image: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/testimonials.jpg",
  },
  {
    title: "Summer Pasta Making Class",
    date: "June 28, 2026",
    time: "11:00 AM - 2:00 PM",
    location: "Wilmette, IL",
    description:
      "Aprenda los secretos de la pasta artesanal con nuestro chef ejecutivo. Una clase interactiva donde preparará tagliatelle, ravioli y gnocchi desde cero, seguida de un almuerzo con sus creaciones.",
    image: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/blogs.jpg",
  },
  {
    title: "40th Anniversary Gala Dinner",
    date: "September 20, 2026",
    time: "6:00 PM - 11:00 PM",
    location: "Arlington Heights, IL",
    description:
      "Celebramos 40 años de excelencia culinaria con una cena de gala que recorrerá los platos más emblemáticos de nuestra historia: Black Pasta, Veal Carlos, y una selección de los mejores vinos de nuestra carta.",
    image: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/features.jpg",
  },
];

const pastEvents = [
  {
    title: "Valentine's Day Special",
    date: "February 14, 2026",
    location: "All Locations",
    description:
      "Una velada romántica con menú especial de varios tiempos, champagne de bienvenida y un postre sorpresa para cada pareja.",
  },
  {
    title: "Truffle & Wine Pairing",
    date: "January 25, 2026",
    location: "Wilmette, IL",
    description:
      "Una cena exclusiva con trufa negra fresca en cada plato, maridada con vinos seleccionados de la región de Umbria.",
  },
  {
    title: "Nochebuena Dinner",
    date: "December 24, 2025",
    location: "Antigua Guatemala",
    description:
      "Una cena especial de Nochebuena con un menú tradicional italiano y guatemalteco, acompañado de vinos espumosos y música en vivo.",
  },
];

function Events() {
  return (
    <>
      <DefaultNavbar
        brand="Carlos & Carlos"
        brandLogo={brandLogo}
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
              Special Events
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              Join us for unforgettable culinary experiences.
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
              badgeContent="upcoming"
              container
              sx={{ mb: 2 }}
            />
            <MKTypography variant="h2" fontWeight="bold">
              Upcoming Events
            </MKTypography>
            <MKTypography variant="body1" color="text">
              Don&apos;t miss our special dining experiences.
            </MKTypography>
          </Grid>

          {upcomingEvents.map((event) => (
            <Grid
              key={event.title}
              container
              spacing={3}
              alignItems="center"
              sx={{ mb: 6 }}
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
                    src={event.image}
                    alt={event.title}
                    width="100%"
                    height={{ xs: 200, md: 260 }}
                    sx={{ objectFit: "cover" }}
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: { lg: "auto" } }}>
                <MKTypography variant="caption" color="info" fontWeight="bold" textTransform="uppercase">
                  {event.date} &middot; {event.time}
                </MKTypography>
                <MKTypography variant="h4" fontWeight="bold" mt={1} mb={1}>
                  {event.title}
                </MKTypography>
                <MKBox display="flex" alignItems="center" mb={2}>
                  <Icon fontSize="small" color="info" sx={{ mr: 0.5 }}>
                    location_on
                  </Icon>
                  <MKTypography variant="caption" color="text" fontWeight="medium">
                    {event.location}
                  </MKTypography>
                </MKBox>
                <MKTypography variant="body2" color="text" mb={3}>
                  {event.description}
                </MKTypography>
                <MKButton
                  component="a"
                  href="https://www.opentable.com/"
                  target="_blank"
                  variant="gradient"
                  color="info"
                  size="small"
                >
                  Book Now
                </MKButton>
              </Grid>
            </Grid>
          ))}

          <Grid
            container
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", mx: "auto", mt: 10, mb: 6 }}
          >
            <MKBadge
              variant="contained"
              color="info"
              badgeContent="past events"
              container
              sx={{ mb: 2 }}
            />
            <MKTypography variant="h2" fontWeight="bold">
              Past Events
            </MKTypography>
          </Grid>

          <Grid container spacing={3}>
            {pastEvents.map((event) => (
              <Grid item xs={12} md={6} lg={4} key={event.title}>
                <MKBox
                  bgColor="grey-100"
                  borderRadius="xl"
                  p={3}
                  height="100%"
                  sx={{
                    border: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  }}
                >
                  <MKTypography variant="caption" color="info" fontWeight="bold">
                    {event.date}
                  </MKTypography>
                  <MKBox display="flex" alignItems="center" my={1}>
                    <Icon fontSize="small" color="info" sx={{ mr: 0.5 }}>
                      location_on
                    </Icon>
                    <MKTypography variant="caption" color="text">
                      {event.location}
                    </MKTypography>
                  </MKBox>
                  <MKTypography variant="h6" fontWeight="bold" mb={1}>
                    {event.title}
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    {event.description}
                  </MKTypography>
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Card>
      <MKBox pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Events;
