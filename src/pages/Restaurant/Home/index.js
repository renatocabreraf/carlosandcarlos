import { useState, useEffect } from "react";
import { useLanguage } from "i18n/context";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBadge from "components/MKBadge";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import routes from "routes";
import footerRoutes from "footer.routes";
import brandLogo from "assets/images/logos/brand.png";

import hero1 from "assets/images/restaurant/antigua/carlos-04-988x658.jpg";
import hero2 from "assets/images/restaurant/chicago/slider1.jpg";
import hero3 from "assets/images/restaurant/wilmette/wilmette-open-03.jpg";
import hero4 from "assets/images/restaurant/antigua/carlos-13-1.jpg";

const heroSlides = [hero1, hero2, hero3, hero4];

function Home() {
  const { t } = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <DefaultNavbar
        brand="Carlos & Carlos"
        brandLogo={brandLogo}
        routes={routes}
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          position: "relative",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        {heroSlides.map((img, i) => (
          <MKBox
            key={i}
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 1s ease-in-out",
              opacity: i === slideIndex ? 1 : 0,
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.75))",
              },
            }}
          />
        ))}
        <Container sx={{ position: "relative", zIndex: 2 }}>
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
            <MKBox
              component="img"
              src={brandLogo}
              alt="Carlos & Carlos"
              width={{ xs: "80%", md: "400px" }}
              mb={3}
              sx={{ objectFit: "contain" }}
            />
            <MKTypography variant="h4" color="white" fontWeight="light" opacity={0.9} mb={3}>
              {t('home.hero.subtitle')}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mb={4} px={4}>
              {t('home.hero.description')}
            </MKTypography>
            <Stack direction="row" spacing={2}>
              <MKButton
                component="a"
                href="/pages/restaurant/menus"
                variant="gradient"
                color="info"
                size="large"
              >
                {t('home.hero.viewMenus')}
              </MKButton>

            </Stack>
          </Grid>
        </Container>
        <MKBox
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            gap: 1.5,
          }}
        >
          {heroSlides.map((_, i) => (
            <MKBox
              key={i}
              onClick={() => setSlideIndex(i)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: i === slideIndex ? "#C8A96B" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": { bgcolor: "#C8A96B" },
              }}
            />
          ))}
        </MKBox>
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
                  title={t('home.counters.years')}
                  description={t('home.counters.yearsDesc')}
                />
              </Grid>
              <Grid item xs={12} md={4} display="flex">
                <Divider
                  orientation="vertical"
                  sx={{ display: { xs: "none", md: "block" }, mx: 0 }}
                />
                <DefaultCounterCard
                  count={3}
                  title={t('home.counters.locations')}
                  description={t('home.counters.locationsDesc')}
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
                  title={t('home.counters.dishes')}
                  description={t('home.counters.dishesDesc')}
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
                  {t('home.legacy.title')}
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  {t('home.legacy.p1')}
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  {t('home.legacy.p2')}
                </MKTypography>
                <MKButton
                  component="a"
                  href="/pages/restaurant/about-us"
                  variant="outlined"
                  color="info"
                >
                  {t('home.legacy.btn')}
                </MKButton>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="restaurant"
                        title={t('home.infoCards.pasta')}
                        description={t('home.infoCards.pastaDesc')}
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="local_shipping"
                        title={t('home.infoCards.ingredients')}
                        description={t('home.infoCards.ingredientsDesc')}
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 3, md: 0 }}>
                      <DefaultInfoCard
                        icon="wine_bar"
                        title={t('home.infoCards.wine')}
                        description={t('home.infoCards.wineDesc')}
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <DefaultInfoCard
                        icon="groups"
                        title={t('home.infoCards.ambiance')}
                        description={t('home.infoCards.ambianceDesc')}
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
                {t('home.locations.title')}
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={3}>
                {t('home.locations.subtitle')}
              </MKTypography>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="location_on"
                  title={t('home.locations.antigua')}
                  description={t('home.locations.antiguaDesc')}
                  action={{
                    type: "internal",
                    route: "/pages/restaurant/locations/antigua",
                    label: t('home.locations.viewDetails'),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="location_on"
                  title={t('home.locations.wilmette')}
                  description={t('home.locations.wilmetteDesc')}
                  action={{
                    type: "internal",
                    route: "/pages/restaurant/locations/wilmette",
                    label: t('home.locations.viewDetails'),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="location_on"
                  title={t('home.locations.arlington')}
                  description={t('home.locations.arlingtonDesc')}
                  action={{
                    type: "internal",
                    route: "/pages/restaurant/locations/chicago",
                    label: t('home.locations.viewDetails'),
                  }}
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
            <MKTypography variant="h3" mb={2}>
              {t('home.reserve.title')}
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              {t('home.reserve.description')}
            </MKTypography>
            <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
              <MKButton
                component="a"
                href="tel:+50278722432"
                variant="gradient"
                color="info"
                size="large"
              >
                Antigua: +502 7872 2432
              </MKButton>
              <MKButton
                component="a"
                href="tel:8479205058"
                variant="gradient"
                color="info"
                size="large"
              >
                Wilmette: 847-920-5058
              </MKButton>
              <MKButton
                component="a"
                href="tel:8472592600"
                variant="gradient"
                color="info"
                size="large"
              >
                Chicago: 847-259-2600
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
