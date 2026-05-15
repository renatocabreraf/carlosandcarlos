import { useLocation } from "react-router-dom";
import { useLanguage } from "i18n/context";
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

import antiguaHero from "assets/images/restaurant/antigua/carlos-13-1.jpg";
import antiguaImg from "assets/images/restaurant/antigua/carlos-04-988x658.jpg";
import antiguaLogo from "assets/images/logos/antigua.png";
import chicagoHero from "assets/images/restaurant/chicago/slider1.jpg";
import chicagoImg from "assets/images/restaurant/chicago/carlos-02.jpg";
import chicagoLogo from "assets/images/logos/chicago.png";
import wilmetteHero from "assets/images/restaurant/wilmette/wilmette-open-02.jpg";
import wilmetteImg from "assets/images/restaurant/wilmette/wilmette-open-04.jpg";
import wilmetteLogo from "assets/images/logos/wilmette.png";

const allLocations = [
  {
    id: "antigua",
    city: "Antigua Guatemala",
    country: "Guatemala",
    address: "4ta. Avenida Sur C.1",
    cityDetail: "Antigua Guatemala, Sacatepéquez, Guatemala C.A.",
    phone: "+502 7872 2432",
    whatsapp: "+502 3989 9709",
    email: "restaurante@carlosandcarlosantigua.com",
    coordinates: { lat: 14.5545, lng: -90.7332 },
    hours: [
      "Martes, Miércoles y Jueves: 12:00 - 21:30",
      "Viernes y Sábado: 12:00 - 22:00",
      "Domingo: 12:00 - 20:30",
      "Lunes: Cerrado",
    ],
    story:
      "Carlos & Carlos Antigua abrió sus puertas el 12 de enero de 2023, ofreciendo una variedad de platillos de alta calidad, una extensa selección de vinos y ampliando un legado de reconocimiento internacional.",
    hero: antiguaHero,
    image: antiguaImg,
    logo: antiguaLogo,
  },
  {
    id: "wilmette",
    city: "Wilmette",
    country: "United States",
    address: "615 Green Bay Road",
    cityDetail: "Wilmette, Illinois 60091",
    phone: "847-920-5058",
    phoneAlt: "847-920-5307",
    coordinates: { lat: 42.0728, lng: -87.7226 },
    hours: [
      "Please call for hours",
    ],
    story:
      "Carlos & Carlos Wilmette continúa el legado de excelencia culinaria en la zona norte de Chicago, ofreciendo la mejor cocina franco-italiana en un ambiente elegante.",
    hero: wilmetteHero,
    image: wilmetteImg,
    logo: wilmetteLogo,
  },
  {
    id: "chicago",
    city: "Arlington Heights",
    country: "United States",
    address: "27 West Campbell Ave.",
    cityDetail: "Arlington Heights, IL 60005",
    phone: "847-259-2600",
    coordinates: { lat: 42.0826, lng: -87.9815 },
    hours: [
      "Please call for hours",
    ],
    story:
      "El Carlos & Carlos original, fundado en 1985 por los hermanos Montiel. Un elegante bistro franco-italiano con capacidad limitada (70 comensales) que ofrece lo mejor de Italia y Francia, con un Chef's Table para experiencias gourmet especiales.",
    hero: chicagoHero,
    image: chicagoImg,
    logo: chicagoLogo,
  },
];

function Locations() {
  const { t } = useLanguage();
  const locationPath = useLocation().pathname;
  const currentId = locationPath.split("/").pop();
  const loc = allLocations.find((l) => l.id === currentId) || allLocations[0];

  const getDirectionsUrl = (loc) => {
    const q = encodeURIComponent(`${loc.address}, ${loc.cityDetail}`);
    return `https://maps.google.com/?q=${q}`;
  };

  const mapSrc = (loc) =>
    `https://maps.google.com/maps?q=${loc.coordinates.lat},${loc.coordinates.lng}&z=15&output=embed`;

  return (
    <>
      <DefaultNavbar
        brand="Carlos & Carlos"
        brandLogo={brandLogo}
        routes={routes}
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
            )}, url(${loc.hero})`,
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
              {loc.city}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              {loc.country === "Guatemala" ? "Guatemala" : "United States"}
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
          backgroundColor: "#111111",
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
              badgeContent={loc.country === "Guatemala" ? "antigua" : "illinois"}
              container
              sx={{ mb: 2 }}
            />
            <MKTypography variant="h2" fontWeight="bold" color="white">
              {loc.city}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.85}>
              {loc.story}
            </MKTypography>
          </Grid>

          <Grid container spacing={3} alignItems="center">
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
                  component="img"
                  src={loc.logo}
                  alt={loc.city}
                  width="60px"
                  sx={{ mr: 2, objectFit: "contain" }}
                />
                <MKBox>
                  <MKTypography variant="h4" fontWeight="bold" color="white">
                    {loc.city}
                  </MKTypography>
                  <MKTypography variant="body2" color="info" fontWeight="medium">
                    {loc.country}
                  </MKTypography>
                </MKBox>
              </MKBox>

              <MKBox display="flex" alignItems="flex-start" mb={2}>
                <Icon fontSize="small" color="info" sx={{ mr: 1, mt: 0.3 }}>
                  place
                </Icon>
                <MKTypography variant="body2" color="white">
                  {loc.address}
                  <br />
                  {loc.cityDetail}
                </MKTypography>
              </MKBox>

              <MKBox display="flex" alignItems="center" mb={1}>
                <Icon fontSize="small" color="info" sx={{ mr: 1 }}>
                  phone
                </Icon>
                <MKTypography
                  variant="body2"
                  color="white"
                  component="a"
                  href={`tel:${loc.phone}`}
                  sx={{ textDecoration: "none" }}
                >
                  {loc.phone}
                  {loc.phoneAlt ? ` / ${loc.phoneAlt}` : ""}
                </MKTypography>
              </MKBox>

              {loc.whatsapp && (
                <MKBox display="flex" alignItems="center" mb={1}>
                  <Icon fontSize="small" color="info" sx={{ mr: 1 }}>
                    chat
                  </Icon>
                  <MKTypography
                    variant="body2"
                    color="white"
                    component="a"
                    href={`https://wa.me/${loc.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    sx={{ textDecoration: "none" }}
                  >
                    WhatsApp: {loc.whatsapp}
                  </MKTypography>
                </MKBox>
              )}

              {loc.email && (
                <MKBox display="flex" alignItems="center" mb={2}>
                  <Icon fontSize="small" color="info" sx={{ mr: 1 }}>
                    email
                  </Icon>
                  <MKTypography
                    variant="body2"
                    color="white"
                    component="a"
                    href={`mailto:${loc.email}`}
                    sx={{ textDecoration: "none" }}
                  >
                    {loc.email}
                  </MKTypography>
                </MKBox>
              )}

              {loc.id === "antigua" && (
                <MKBox display="flex" alignItems="center" mb={2}>
                  <MKTypography variant="body2" color="info" sx={{ mr: 1, lineHeight: 1 }}>
                    <i className="fab fa-instagram" style={{ fontSize: "1.1rem" }} />
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    color="white"
                    component="a"
                    href="https://www.instagram.com/carlosycarlos.antigua?igsh=cmYybWZvMmdwMmZk"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none", opacity: 0.7, "&:hover": { opacity: 1 } }}
                  >
                    Follow us on Instagram
                  </MKTypography>
                </MKBox>
              )}

              <MKBox
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  p: 2,
                  mt: 2,
                  mb: 2,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <MKTypography variant="caption" fontWeight="bold" display="block" mb={0.5} color="white">
                  {t('locations.hours')}
                </MKTypography>
                {loc.hours.map((h, i) => (
                  <MKTypography key={i} variant="caption" color="white" display="block" opacity={0.8}>
                    {h}
                  </MKTypography>
                ))}
              </MKBox>

              <MKBox
                borderRadius="12px"
                overflow="hidden"
                mb={2}
                sx={{
                  width: "100%",
                  height: 220,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <iframe
                  src={mapSrc(loc)}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title={`Map of ${loc.city}`}
                />
              </MKBox>

              <MKButton
                component="a"
                href={getDirectionsUrl(loc)}
                target="_blank"
                variant="gradient"
                color="info"
                size="small"
                sx={{ mr: 1 }}
              >
                Get Directions
              </MKButton>
              <MKButton
                component="a"
                href={`tel:${loc.phone}`}
                variant="outlined"
                color="info"
                size="small"
              >
                Call
              </MKButton>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 8 }} justifyContent="center">
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              sx={{ textAlign: "center", mb: 4 }}
            >
              <MKBadge
                variant="contained"
                color="info"
                badgeContent="all locations"
                container
                sx={{ mb: 2 }}
              />
              <MKTypography variant="h4" fontWeight="bold" width="100%" color="white">
                {t('locations.visitOther')}
              </MKTypography>
            </Grid>
            {allLocations
              .filter((l) => l.id !== currentId)
              .map((other) => (
                <Grid item xs={12} sm={6} md={4} key={other.id}>
                  <MKBox
                    component="a"
                    href={`/pages/restaurant/locations/${other.id}`}
                    sx={{ textDecoration: "none", display: "block", maxWidth: 280, mx: "auto" }}
                  >
                    <MKBox
                      textAlign="center"
                      p={3}
                      borderRadius="xl"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        transition: "all 200ms ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: ({ boxShadows: { md } }) => md,
                          backgroundColor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      <MKBox
                        component="img"
                        src={other.logo}
                        alt={other.city}
                        sx={{
                          width: "100%",
                          maxWidth: 120,
                          height: 80,
                          objectFit: "contain",
                          mb: 2,
                        }}
                      />
                      <MKTypography variant="h6" fontWeight="bold" color="white">
                        {other.city}
                      </MKTypography>
                      <MKTypography variant="caption" color="white" opacity={0.7}>
                        {other.country}
                      </MKTypography>
                    </MKBox>
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

export default Locations;
