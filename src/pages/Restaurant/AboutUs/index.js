import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKBadge from "components/MKBadge";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import routes from "routes";
import footerRoutes from "footer.routes";
import brandLogo from "assets/images/logos/brand.png";
import antiguaLogo from "assets/images/logos/antigua.png";
import chicagoLogo from "assets/images/logos/chicago.png";
import wilmetteLogo from "assets/images/logos/wilmette.png";

import bgImage from "assets/images/restaurant/antigua/carlos-07-988x658.jpg";

import { useLanguage } from "i18n/context";

function AboutUs() {
  const { t } = useLanguage();
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
              {t('about.hero.title')}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              {t('about.hero.subtitle')}
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
                  {t('about.title')}
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  {t('about.p1')}
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  {t('about.p2')}
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  {t('about.p3')}
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={5} sx={{ ml: "auto" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="emoji_flags"
                        title={t('about.cards.established')}
                        description={t('about.cards.establishedDesc')}
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="restaurant_menu"
                        title={t('about.cards.cuisine')}
                        description={t('about.cards.cuisineDesc')}
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 3, md: 0 }}>
                      <DefaultInfoCard
                        icon="star"
                        title={t('about.cards.recognition')}
                        description={t('about.cards.recognitionDesc')}
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <DefaultInfoCard
                        icon="public"
                        title={t('about.cards.locations')}
                        description={t('about.cards.locationsDesc')}
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
                  {t('about.milestones.title')}
                </MKTypography>
              </Grid>
            </Grid>

            <Grid container spacing={4} alignItems="stretch">
              <Grid item xs={12} md={4} display="flex">
                <MKBox
                  bgColor="rgba(255,255,255,0.05)"
                  borderRadius="xl"
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  width="100%"
                  sx={{ backdropFilter: "blur(10px)" }}
                >
                  <MKBox
                    component="img"
                    src={chicagoLogo}
                    alt="Arlington Heights"
                    width="100%"
                    sx={{ maxWidth: 100, height: 70, objectFit: "contain", mb: 2 }}
                  />
                  <MKTypography variant="h5" color="white" mb={1}>
                    {t('about.milestones.chicago')}
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    {t('about.milestones.chicagoDesc')}
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4} display="flex">
                <MKBox
                  bgColor="rgba(255,255,255,0.05)"
                  borderRadius="xl"
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  width="100%"
                  sx={{ backdropFilter: "blur(10px)" }}
                >
                  <MKBox
                    component="img"
                    src={wilmetteLogo}
                    alt="Wilmette"
                    width="100%"
                    sx={{ maxWidth: 100, height: 70, objectFit: "contain", mb: 2 }}
                  />
                  <MKTypography variant="h5" color="white" mb={1}>
                    {t('about.milestones.guatemala')}
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    {t('about.milestones.guatemalaDesc')}
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4} display="flex">
                <MKBox
                  bgColor="rgba(255,255,255,0.05)"
                  borderRadius="xl"
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  width="100%"
                  sx={{ backdropFilter: "blur(10px)" }}
                >
                  <MKBox
                    component="img"
                    src={antiguaLogo}
                    alt="Antigua Guatemala"
                    width="100%"
                    sx={{ maxWidth: 100, height: 70, objectFit: "contain", mb: 2 }}
                  />
                  <MKTypography variant="h5" color="white" mb={1}>
                    {t('about.milestones.antigua')}
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    {t('about.milestones.antiguaDesc')}
                  </MKTypography>
                </MKBox>
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
