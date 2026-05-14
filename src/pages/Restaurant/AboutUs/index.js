import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBadge from "components/MKBadge";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

import routes from "routes";
import footerRoutes from "footer.routes";
import brandLogo from "assets/images/logos/brand.png";

import bgImage from "assets/images/restaurant/antigua/carlos-07-988x658.jpg";
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function AboutUs() {
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
              Our Story
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              Since 1985 — A legacy of Italian excellence.
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
        <MKBox component="section" py={6}>
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} lg={6}>
                <MKBadge
                  variant="contained"
                  color="info"
                  badgeContent="since 1985"
                  container
                  sx={{ mb: 2 }}
                />
                <MKTypography variant="h3" mb={2}>
                  Chicago 1985
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  A principios de 1985, <strong>CARLOS MONTIEL</strong> y su hermano{" "}
                  <strong>EDDY MONTIEL</strong>, abrieron un peque&ntilde;o restaurante que
                  eventualmente cambiar&iacute;a de alguna manera la forma de comer en Chicago. Se
                  aventuraron en un lugar que nadie se atrever&iacute;a a abrir, dejando solo un
                  restaurante de manteles blancos del norte de Italia.
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  Haciendo pasta fresca frente a los comensales y con servicio de meseros de
                  etiqueta, Carlos & Carlos comenz&oacute; una maravillosa trayectoria gastron&oacute;mica.
                  Platos emblem&aacute;ticos como el Black Pasta con camarones y vieiras en salsa de
                  crema de champagne, el Veal Carlos con hongos porcini y salsa de crema, y el
                  salm&oacute;n fresco escalfado con salsa de langosta, le dieron a Carlos & Carlos
                  un lugar entre los restaurantes de &eacute;lite de Chicago.
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Este peque&ntilde;o y acogedor restaurante se convirti&oacute; en un im&aacute;n
                  para la alta sociedad de Chicago, atrayendo a personalidades como Tom Cruise,
                  Robert De Niro, Paul Newman, Julia Roberts y el dise&ntilde;ador Oscar de la
                  Renta, entre muchos otros.
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={5} sx={{ ml: "auto" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="emoji_flags"
                        title="Est. 1985"
                        description="Fundado en Chicago por los hermanos Montiel con una visión audaz"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="restaurant_menu"
                        title="Cocina Franco-Italiana"
                        description="Fusión única de la cocina del norte de Italia y Francia"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 3, md: 0 }}>
                      <DefaultInfoCard
                        icon="star"
                        title="Reconocimiento Internacional"
                        description="Aclamado por críticos y celebridades de todo el mundo"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultInfoCard
                      icon="public"
                      title="3 Locaciones"
                      description="Antigua Guatemala, Wilmette y Arlington Heights"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <MKBox component="section" variant="gradient" bgColor="dark" py={6} mx={-2} px={2}>
          <Container>
            <Grid container>
              <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                <MKBadge
                  variant="contained"
                  color="info"
                  badgeContent="milestones"
                  container
                  sx={{ mb: 2 }}
                />
                <MKTypography variant="h3" color="white">
                  Nuestra Historia
                </MKTypography>
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <MKBox
                  bgColor="rgba(255,255,255,0.05)"
                  borderRadius="xl"
                  p={3}
                  sx={{ backdropFilter: "blur(10px)" }}
                >
                  <MKBadge
                    variant="contained"
                    color="info"
                    badgeContent="1985"
                    container
                    sx={{ mb: 2 }}
                  />
                  <MKTypography variant="h5" color="white" mb={1}>
                    Chicago
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Los hermanos Montiel abren las puertas del primer Carlos & Carlos en Chicago,
                    en el coraz&oacute;n de Arlington Heights. Con una fusi&oacute;n &uacute;nica de
                    cocina del norte de Italia y francesa, pronto recibir&iacute;a a grandes
                    &iacute;conos como Tom Cruise, Robert De Niro, Paul Newman y Julia Roberts.
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox
                  bgColor="rgba(255,255,255,0.05)"
                  borderRadius="xl"
                  p={3}
                  sx={{ backdropFilter: "blur(10px)" }}
                >
                  <MKBadge
                    variant="contained"
                    color="info"
                    badgeContent="2009"
                    container
                    sx={{ mb: 2 }}
                  />
                  <MKTypography variant="h5" color="white" mb={1}>
                    Guatemala
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Tras haber conseguido el &eacute;xito internacional, Carlos & Carlos se expande
                    y abre sus puertas en el Aeropuerto Internacional La Aurora en la Ciudad de
                    Guatemala, ofreciendo platillos de alta calidad elaborados con pasta artesanal.
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox
                  bgColor="rgba(255,255,255,0.05)"
                  borderRadius="xl"
                  p={3}
                  sx={{ backdropFilter: "blur(10px)" }}
                >
                  <MKBadge
                    variant="contained"
                    color="info"
                    badgeContent="2023"
                    container
                    sx={{ mb: 2 }}
                  />
                  <MKTypography variant="h5" color="white" mb={1}>
                    Antigua Guatemala
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Carlos & Carlos hace su debut en Antigua Guatemala el 12 de enero de 2023,
                    ofreciendo una variedad de platillos de alta calidad, una extensa selecci&oacute;n
                    de vinos y ampliando un legado de reconocimiento internacional.
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <MKBox component="section" py={6}>
          <Container>
            <Grid container>
              <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                <MKBadge
                  variant="contained"
                  color="info"
                  badgeContent="our team"
                  container
                  sx={{ mb: 2 }}
                />
                <MKTypography variant="h3" fontWeight="bold">
                  Meet The Team
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  The passionate people behind every unforgettable meal.
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team1}
                    name="Carlos Montiel"
                    position={{ color: "info", label: "Co-Founder & Executive Chef" }}
                    description="Fundador de Carlos & Carlos en 1985. Su visión y pasión por la cocina franco-italiana crearon un legado culinario que hoy cruza fronteras."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team2}
                    name="Eddy Montiel"
                    position={{ color: "info", label: "Co-Founder" }}
                    description="Cofundador del primer Carlos & Carlos en Chicago. Su dedicación a la excelencia culinaria sentó las bases del éxito del restaurante."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team3}
                    name="Chef Ejecutivo"
                    position={{ color: "info", label: "Head Chef - Antigua" }}
                    description="Lidera la cocina en Antigua Guatemala, manteniendo la tradición de pasta artesanal y sabores auténticos."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team4}
                    name="Sommelier"
                    position={{ color: "info", label: "Wine Director" }}
                    description="Curador de nuestra extensa selección de vinos, maridando perfectamente cada plato con los mejores vinos italianos y del mundo."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <MKBox component="section" py={6}>
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
                badgeContent="join us"
                container
                sx={{ mb: 2 }}
              />
              <MKTypography variant="h3" mb={2}>
                Ready to Experience Carlos & Carlos?
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                Whether you&apos;re joining us in Antigua Guatemala, Wilmette, or Arlington
                Heights, we can&apos;t wait to welcome you.
              </MKTypography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <MKButton
                    component="a"
                    href="/pages/restaurant/locations/antigua"
                    variant="gradient"
                    color="info"
                  >
                    Find a Location
                  </MKButton>
                </Grid>
                <Grid item>
                  <MKButton
                    component="a"
                    href="https://www.opentable.com/"
                    variant="outlined"
                    color="info"
                  >
                    Make a Reservation
                  </MKButton>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
