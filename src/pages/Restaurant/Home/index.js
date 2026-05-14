import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBadge from "components/MKBadge";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import routes from "routes";
import footerRoutes from "footer.routes";
import brandLogo from "assets/images/logos/brand.png";

import bgImage from "assets/images/restaurant/antigua/slider5.jpg";

function Home() {
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
        sticky
      />
      <MKBox
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: ({
            palette: { gradients },
            functions: { linearGradient, rgba },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
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
            <MKBadge
              variant="contained"
              color="info"
              badgeContent="Since 1985 · Chicago"
              container
              sx={{ mb: 2 }}
            />
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: { fontSize: size["3xl"] },
              })}
            >
              Carlos & Carlos
            </MKTypography>
            <MKTypography variant="h4" color="white" fontWeight="light" opacity={0.9} mb={3}>
              Authentic Northern Italian & French Cuisine
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mb={4} px={4}>
              Desde Chicago hasta Guatemala, tres generaciones de excelencia culinaria. Pasta fresca
              artesanal, los mejores vinos y una experiencia gastron&oacute;mica &uacute;nica.
            </MKTypography>
            <Stack direction="row" spacing={2}>
              <MKButton
                component="a"
                href="/pages/restaurant/menus"
                variant="gradient"
                color="info"
                size="large"
              >
                View Our Menus
              </MKButton>
              <MKButton
                component="a"
                href="tel:+50278722432"
                variant="outlined"
                color="white"
                size="large"
              >
                Reserve Now
              </MKButton>
            </Stack>
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
        <MKBox component="section" py={3}>
          <Container>
            <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
              <Grid item xs={12} md={4}>
                <DefaultCounterCard
                  count={40}
                  suffix="+"
                  title="Years of Tradition"
                  description="Serving excellence since 1985 in Chicago"
                />
              </Grid>
              <Grid item xs={12} md={4} display="flex">
                <Divider
                  orientation="vertical"
                  sx={{ display: { xs: "none", md: "block" }, mx: 0 }}
                />
                <DefaultCounterCard
                  count={3}
                  title="Locations"
                  description="Antigua · Wilmette · Arlington Heights"
                />
                <Divider
                  orientation="vertical"
                  sx={{ display: { xs: "none", md: "block" }, ml: 0 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DefaultCounterCard
                  count={100}
                  suffix="+"
                  title="Signature Dishes"
                  description="A curated menu of Northern Italian & French classics"
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <MKBox component="section" py={6}>
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} lg={6}>
                <MKBadge
                  variant="contained"
                  color="info"
                  badgeContent="our legacy"
                  container
                  sx={{ mb: 2 }}
                />
                <MKTypography variant="h3" mb={1}>
                  A Chicago Legacy, Now Global
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  Desde 1985, Carlos & Carlos ha sido un referente de la alta cocina franco-italiana
                  en Chicago. Fundado por los hermanos Montiel, nuestro restaurante de manteles
                  blancos en Arlington Heights r&aacute;pidamente se gan&oacute; un lugar entre la
                  &eacute;lite culinaria, atrayendo a celebridades como Tom Cruise, Robert De Niro y
                  Paul Newman.
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  Hoy, con tres locaciones en dos pa&iacute;ses, seguimos honrando nuestra
                  tradici&oacute;n de pasta fresca artesanal, los mejores cortes de carne y una
                  carta de vinos incomparable.
                </MKTypography>
                <MKButton
                  component="a"
                  href="/pages/restaurant/about-us"
                  variant="outlined"
                  color="info"
                >
                  Our Story
                </MKButton>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="restaurant"
                        title="Pasta Artesanal"
                        description="Pasta fresca hecha en casa diariamente, siguiendo recetas tradicionales italianas"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="local_shipping"
                        title="Ingredientes Premium"
                        description="Los mejores ingredientes importados de Italia y productos locales frescos"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 3, md: 0 }}>
                      <DefaultInfoCard
                        icon="wine_bar"
                        title="Carta de Vinos"
                        description="Extensa selección de vinos italianos y del mundo, cuidadosamente seleccionados"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultInfoCard
                      icon="groups"
                      title="Ambiente Elegante"
                      description="Servicio impecable en un ambiente sofisticado de manteles blancos"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <Divider sx={{ my: 0 }} />

        <MKBox component="section" py={6}>
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="center"
              sx={{ textAlign: "center", my: 4, mx: "auto" }}
            >
              <MKBadge
                variant="contained"
                color="info"
                badgeContent="find us"
                container
                sx={{ mb: 2 }}
              />
              <MKTypography variant="h2" fontWeight="bold">
                Our Locations
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={3}>
                Tres locaciones, dos pa&iacute;ses, una tradici&oacute;n.
              </MKTypography>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="location_on"
                  title="Antigua Guatemala"
                  description="4ta. Avenida Sur C.1 Antigua Guatemala, Sacatepéquez"
                  action={{
                    type: "internal",
                    route: "/pages/restaurant/locations/antigua",
                    label: "View Details",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilledInfoCard
                  variant="contained"
                  color="info"
                  icon="location_on"
                  title="Wilmette, IL"
                  description="615 Green Bay Road, Wilmette, Illinois 60091"
                  action={{
                    type: "internal",
                    route: "/pages/restaurant/locations/wilmette",
                    label: "View Details",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="location_on"
                  title="Arlington Heights, IL"
                  description="27 West Campbell Ave, Arlington Heights, IL 60005"
                  action={{
                    type: "internal",
                    route: "/pages/restaurant/locations/chicago",
                    label: "View Details",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <Divider sx={{ my: 0 }} />

        <MKBox component="section" py={6}>
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={6}
              justifyContent="center"
              sx={{ mx: "auto", textAlign: "center" }}
            >
              <MKBadge
                variant="contained"
                color="info"
                badgeContent="testimonials"
                container
                sx={{ mb: 2 }}
              />
              <MKTypography variant="h2" fontWeight="bold">
                What Our Guests Say
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>
                We take pride in every dining experience we create.
              </MKTypography>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 4 }}>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  name="María G."
                  date="3 weeks ago"
                  review="El pepian en Carlos & Carlos Antigua es el mejor que he probado fuera de Chicago. La pasta artesanal y el servicio son increíbles."
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="info"
                  name="James M."
                  date="1 month ago"
                  review="Incredible Northern Italian cuisine. The Black Pasta with lobster sauce is outstanding. A true Chicago institution."
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  name="Sofia R."
                  date="2 weeks ago"
                  review="Una experiencia gastronómica única. El Veal Carlos y la carta de vinos son simplemente espectaculares. Recomendado 100%."
                  rating={5}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <Divider sx={{ my: 0 }} />

        <MKBox component="section" pt={6} pb={8}>
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={7}
              justifyContent="center"
              sx={{ mx: "auto", textAlign: "center" }}
            >
              <MKBadge
                variant="contained"
                color="info"
                badgeContent="reservations"
                container
                sx={{ mb: 2 }}
              />
              <MKTypography variant="h3" mb={2}>
                Reserve Your Table
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                Nos sentiremos honrados de brindarle una experiencia gastron&oacute;mica &uacute;nica,
                excelente atenci&oacute;n, en adici&oacute;n al ambiente, confort y locaci&oacute;n.
              </MKTypography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <MKButton
                  component="a"
                  href="tel:+50278722432"
                  variant="gradient"
                  color="info"
                  size="large"
                >
                  Call +502 7872 2432
                </MKButton>
                <MKButton
                  component="a"
                  href="https://www.opentable.com/"
                  variant="outlined"
                  color="info"
                  size="large"
                >
                  Reserve Online
                </MKButton>
              </Stack>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
