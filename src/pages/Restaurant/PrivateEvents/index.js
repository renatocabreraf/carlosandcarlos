import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";
import brandLogo from "assets/images/logos/brand.png";
import chicagoLogo from "assets/images/logos/chicago.png";
import wilmetteLogo from "assets/images/logos/wilmette.png";
import antiguaLogo from "assets/images/logos/antigua.png";

import bgImage from "assets/images/restaurant/wilmette/home05.jpg";

import { useLanguage } from "i18n/context";

function PrivateEvents() {
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
              {t('privateEvents.hero.title')}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} sx={{ mt: 1 }}>
              {t('privateEvents.hero.subtitle')}
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
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container sx={{ my: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={7}>
              <MKTypography variant="h3" color="white" fontWeight="bold" mb={2}>
                {t('privateEvents.title')}
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>
                {t('privateEvents.description')}
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>
                {t('privateEvents.details')}
              </MKTypography>
              <MKTypography variant="body1" color="text" sx={{ mb: 4 }}>
                {t('privateEvents.call')}
              </MKTypography>
              <MKBox
                component={Link}
                to="/pages/restaurant/contact-us"
              >
                <MKButton variant="gradient" color="info" size="large">
                  {t('privateEvents.moreInfo')}
                </MKButton>
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <MKBox
                sx={{
                  bgcolor: "#1C1C1C",
                  borderRadius: 2,
                  p: 4,
                }}
              >
                <MKTypography variant="h5" color="white" fontWeight="bold" mb={3}>
                  {t('privateEvents.phones')}
                </MKTypography>
                <MKBox
                  component={Link}
                  to="/pages/restaurant/locations/chicago"
                  display="flex"
                  alignItems="center"
                  sx={{ textDecoration: "none", mb: 3, cursor: "pointer", "&:hover": { opacity: 0.8 } }}
                >
                  <MKBox
                    component="img"
                    src={chicagoLogo}
                    alt="Arlington Heights"
                    sx={{ width: 48, height: 32, objectFit: "contain", mr: 2, flexShrink: 0 }}
                  />
                  <MKBox>
                    <MKTypography variant="button" fontWeight="bold" color="white" display="block">
                      Arlington Heights, IL
                    </MKTypography>
                    <MKTypography
                      variant="body2"
                      color="white"
                      component="a"
                      href="tel:8472592600"
                      display="block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      847-259-2600
                    </MKTypography>
                  </MKBox>
                </MKBox>
                <MKBox
                  component={Link}
                  to="/pages/restaurant/locations/wilmette"
                  display="flex"
                  alignItems="center"
                  sx={{ textDecoration: "none", mb: 3, cursor: "pointer", "&:hover": { opacity: 0.8 } }}
                >
                  <MKBox
                    component="img"
                    src={wilmetteLogo}
                    alt="Wilmette"
                    sx={{ width: 48, height: 32, objectFit: "contain", mr: 2, flexShrink: 0 }}
                  />
                  <MKBox>
                    <MKTypography variant="button" fontWeight="bold" color="white" display="block">
                      Wilmette, IL
                    </MKTypography>
                    <MKTypography
                      variant="body2"
                      color="white"
                      component="a"
                      href="tel:8479205058"
                      display="block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      847-920-5058
                    </MKTypography>
                  </MKBox>
                </MKBox>
                <MKBox
                  component={Link}
                  to="/pages/restaurant/locations/antigua"
                  display="flex"
                  alignItems="center"
                  sx={{ textDecoration: "none", cursor: "pointer", "&:hover": { opacity: 0.8 } }}
                >
                  <MKBox
                    component="img"
                    src={antiguaLogo}
                    alt="Antigua Guatemala"
                    sx={{ width: 48, height: 32, objectFit: "contain", mr: 2, flexShrink: 0 }}
                  />
                  <MKBox>
                    <MKTypography variant="button" fontWeight="bold" color="white" display="block">
                      Antigua Guatemala
                    </MKTypography>
                    <MKTypography
                      variant="body2"
                      color="white"
                      component="a"
                      href="tel:+50278722432"
                      display="block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      +502 7872 2432
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </Card>
      <MKBox pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default PrivateEvents;
