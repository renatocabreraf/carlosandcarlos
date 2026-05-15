import { useState, useEffect, useCallback } from "react";
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

import bgImage from "assets/images/restaurant/antigua/carlos-07-988x658.jpg";

function importAll(r) {
  return r.keys().map(r);
}

const locations = [
  {
    label: "Antigua Guatemala",
    key: "antigua",
    images: importAll(require.context("../../../assets/images/restaurant/antigua", false, /\.(jpg|jpeg|png)$/)),
  },
  {
    label: "Wilmette, IL",
    key: "wilmette",
    images: importAll(require.context("../../../assets/images/restaurant/wilmette", false, /\.(jpg|jpeg|png)$/)),
  },
  {
    label: "Arlington Heights, IL",
    key: "chicago",
    images: importAll(require.context("../../../assets/images/restaurant/chicago", false, /\.(jpg|jpeg|png)$/)),
  },
];

function Gallery() {
  const { t } = useLanguage();
  const [locTab, setLocTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const current = locations[locTab];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % current.images.length);
  }, [current.images.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + current.images.length) % current.images.length);
  }, [current.images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, goNext, goPrev]);

  useEffect(() => {
    setLightboxOpen(false);
  }, [locTab]);

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
              {t('gallery.hero.title')}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              {t('gallery.hero.subtitle')}
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
        <Container sx={{ my: 4 }}>
          <AppBar position="static" color="transparent" sx={{ mb: 4, bgcolor: "transparent", boxShadow: "none" }}>
            <Tabs
              value={locTab}
              onChange={(e, v) => setLocTab(v)}
              variant="fullWidth"
              TabIndicatorProps={{ sx: { bgcolor: "#C8A96B", height: 3 } }}
            >
              {locations.map((l, i) => (
                <Tab
                  key={l.key}
                  label={l.label}
                  sx={{
                    transition: "all 0.3s ease",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    opacity: "1 !important",
                    color: locTab === i ? "#111" : "#fff !important",
                    bgcolor: locTab === i ? "#fff" : "rgba(255,255,255,0.1)",
                    "&:hover": {
                      bgcolor: locTab === i ? "#f0f0f0" : "rgba(255,255,255,0.2)",
                    },
                  }}
                />
              ))}
            </Tabs>
          </AppBar>

          <MKBox
            sx={{
              columnCount: { xs: 1, sm: 2, md: 3 },
              columnGap: "12px",
            }}
          >
            {current.images.map((img, i) => (
              <MKBox
                key={i}
                component="img"
                src={img}
                alt={`${current.label} ${i + 1}`}
                onClick={() => openLightbox(i)}
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  mb: 1.5,
                  display: "block",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  breakInside: "avoid",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: ({ boxShadows: { lg } }) => lg,
                  },
                }}
                loading="lazy"
              />
            ))}
          </MKBox>
        </Container>
      </Card>
      <MKBox pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>

      {lightboxOpen && (
        <MKBox
          onClick={closeLightbox}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MKBox
            component="span"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            sx={{
              position: "absolute",
              left: { xs: 12, md: 32 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              cursor: "pointer",
              zIndex: 1,
              opacity: 0.7,
              "&:hover": { opacity: 1 },
              userSelect: "none",
            }}
          >
            ‹
          </MKBox>

          <MKBox
            component="img"
            src={current.images[lightboxIndex]}
            alt={`${current.label} ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "4px",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          />

          <MKBox
            component="span"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            sx={{
              position: "absolute",
              right: { xs: 12, md: 32 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              cursor: "pointer",
              zIndex: 1,
              opacity: 0.7,
              "&:hover": { opacity: 1 },
              userSelect: "none",
            }}
          >
            ›
          </MKBox>

          <MKBox
            component="span"
            onClick={closeLightbox}
            sx={{
              position: "absolute",
              top: { xs: 12, md: 24 },
              right: { xs: 12, md: 32 },
              color: "white",
              fontSize: { xs: "2rem", md: "2.5rem" },
              cursor: "pointer",
              lineHeight: 1,
              opacity: 0.7,
              "&:hover": { opacity: 1 },
              userSelect: "none",
            }}
          >
            ×
          </MKBox>

          <MKTypography
            variant="caption"
            color="white"
            sx={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.6,
            }}
          >
            {lightboxIndex + 1} / {current.images.length}
          </MKTypography>
        </MKBox>
      )}
    </>
  );
}

export default Gallery;
