import { useState } from "react";
import { useLanguage } from "i18n/context";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";
import brandLogo from "assets/images/logos/brand.png";

import bgImage from "assets/images/restaurant/antigua/c-c-desayunos-109.jpg";

import antiguaMenu from "pages/Restaurant/Menus/data/antigua";
import wilmetteMenu from "pages/Restaurant/Menus/data/wilmette";
import chicagoMenu from "pages/Restaurant/Menus/data/chicago";

import MenuFlipbook from "./MenuFlipbook";

import food1 from "assets/images/restaurant/arlington-menu/food/EDITABLE_Menú Chicago_page-0001.jpg";
import food2 from "assets/images/restaurant/arlington-menu/food/EDITABLE_Menú Chicago_page-0002.jpg";
import food3 from "assets/images/restaurant/arlington-menu/food/EDITABLE_Menú Chicago_page-0003.jpg";
import food4 from "assets/images/restaurant/arlington-menu/food/EDITABLE_Menú Chicago_page-0004.jpg";
import wine1 from "assets/images/restaurant/arlington-menu/wine/EDITABLE_Menú Chicago vinos2_page-0001.jpg";
import wine2 from "assets/images/restaurant/arlington-menu/wine/EDITABLE_Menú Chicago vinos2_page-0002.jpg";

const arlingtonFoodPages = [food1, food2, food3, food4];
const arlingtonWinePages = [wine1, wine2];

const locations = [
  { label: "Antigua Guatemala", key: "antigua", data: antiguaMenu, note: "IVA incluido. Se incluirá a la cuenta el 10% de propina." },
  { label: "Wilmette, IL", key: "wilmette", data: wilmetteMenu, note: "Gluten free pasta +$2.50. 20% gratuity for parties of 8+." },
  { label: "Arlington Heights, IL", key: "chicago", flipbook: true, data: chicagoMenu, note: "Gluten free +$3. Splits +$3. 20% gratuity for parties of 6+." },
];

function Menus() {
  const { t } = useLanguage();
  const [locTab, setLocTab] = useState(0);
  const [catTab, setCatTab] = useState(0);

  const current = locations[locTab];

  const handleLocChange = (e, v) => {
    setLocTab(v);
    setCatTab(0);
  };

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
              {t('menus.hero.title')}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              {t('menus.hero.subtitle')}
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
          <AppBar position="static" color="transparent" sx={{ mb: 3, bgcolor: "transparent", boxShadow: "none" }}>
            <Tabs
              value={locTab}
              onChange={handleLocChange}
              variant="fullWidth"
              TabIndicatorProps={{ sx: { bgcolor: "#C8A96B", height: 3 } }}
            >
              {locations.map((l) => (
                <Tab
                  key={l.key}
                  label={l.label}
                  sx={{
                    transition: "all 0.3s ease",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    opacity: "1 !important",
                    color: locTab === locations.indexOf(l) ? "#111" : "#fff !important",
                    bgcolor: locTab === locations.indexOf(l) ? "#fff" : "rgba(0,0,0,0.5)",
                    "&:hover": {
                      bgcolor: locTab === locations.indexOf(l) ? "#f0f0f0" : "rgba(0,0,0,0.7)",
                    },
                  }}
                />
              ))}
            </Tabs>
          </AppBar>

          <Grid container justifyContent="center">
            <Grid item xs={12} lg={current.flipbook ? 8 : 8}>
              {current.flipbook ? (
                <MenuFlipbook foodPages={arlingtonFoodPages} winePages={arlingtonWinePages} />
              ) : (
                <>
                  <AppBar position="static" color="transparent" sx={{ mb: 4, bgcolor: "transparent", boxShadow: "none" }}>
                    <Tabs
                      value={catTab}
                      onChange={(e, v) => setCatTab(v)}
                      variant="scrollable"
                      scrollButtons="auto"
                      TabIndicatorProps={{ sx: { bgcolor: "#C8A96B", height: 3 } }}
                    >
                      {current.data.map((cat) => (
                        <Tab
                          key={cat.label}
                          label={cat.label}
                          sx={{
                            transition: "all 0.3s ease",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            opacity: "1 !important",
                            color: catTab === current.data.indexOf(cat) ? "#111" : "#fff !important",
                            bgcolor: catTab === current.data.indexOf(cat) ? "#fff" : "rgba(0,0,0,0.5)",
                            "&:hover": {
                              bgcolor: catTab === current.data.indexOf(cat) ? "#f0f0f0" : "rgba(0,0,0,0.7)",
                            },
                          }}
                        />
                      ))}
                    </Tabs>
                  </AppBar>

                  <MKBox>
                    {current.data[catTab]?.items.map((item) => (
                      <MKBox
                        key={item.name}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        sx={{
                          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                            `${borderWidth[1]} dotted ${borderColor}`,
                          py: 2,
                        }}
                      >
                        <MKBox>
                          <MKTypography variant="h6" fontWeight="bold">
                            {item.name}
                          </MKTypography>
                          {item.description && (
                            <MKTypography variant="body2" color="text">
                              {item.description}
                            </MKTypography>
                          )}
                        </MKBox>
                        <MKTypography
                          variant="h6"
                          color="info"
                          fontWeight="bold"
                          sx={{ ml: 2, whiteSpace: "nowrap" }}
                        >
                          {item.price}
                        </MKTypography>
                      </MKBox>
                    ))}
                  </MKBox>

                  {current.note && (
                    <MKBox mt={4} p={2} bgColor="grey-100" borderRadius="md">
                      <MKTypography variant="caption" color="white">
                        {current.note}
                      </MKTypography>
                    </MKBox>
                  )}
                </>
              )}
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

export default Menus;
