import { useState } from "react";
import { useLanguage } from "i18n/context";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";
import brandLogo from "assets/images/logos/brand.png";

import bgImage from "assets/images/restaurant/antigua/c-c-desayunos-109.jpg";

import MenuFlipbook from "../Menus/MenuFlipbook";

import specialEs from "assets/images/restaurant/antigua-menu/espanol/Menú económico_WEB-1_page-0001.jpg";
import specialEn from "assets/images/restaurant/antigua-menu/ingles/Menú económico_WEB-2_page-0001.jpg";

function SpecialMenus() {
  const { t } = useLanguage();
  const [lang, setLang] = useState("es");

  const pages = lang === "es" ? [specialEs] : [specialEn];

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
              {t('specialMenus.hero.title')}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              {t('specialMenus.hero.subtitle')}
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
        <Container sx={{ mt: 4, mb: 6 }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={8}>
              <MKBox display="flex" justifyContent="center" mb={3} sx={{ gap: 1 }}>
                <MKBox
                  component="span"
                  onClick={() => setLang("es")}
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: lang === "es" ? 700 : 500,
                    color: lang === "es" ? "#C8A96B" : "#555",
                    cursor: "pointer",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    transition: "all 0.2s ease",
                    letterSpacing: 1,
                    "&:hover": { color: "#C8A96B" },
                    userSelect: "none",
                  }}
                >
                  ESPAÑOL
                </MKBox>
                <MKTypography variant="caption" sx={{ color: "#999", lineHeight: "28px" }}>
                  |
                </MKTypography>
                <MKBox
                  component="span"
                  onClick={() => setLang("en")}
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: lang === "en" ? 700 : 500,
                    color: lang === "en" ? "#C8A96B" : "#555",
                    cursor: "pointer",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    transition: "all 0.2s ease",
                    letterSpacing: 1,
                    "&:hover": { color: "#C8A96B" },
                    userSelect: "none",
                  }}
                >
                  ENGLISH
                </MKBox>
              </MKBox>
              <MenuFlipbook foodPages={pages} />
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

export default SpecialMenus;
