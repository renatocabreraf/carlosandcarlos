/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { useLanguage } from "i18n/context";

import footerImg1 from "assets/images/restaurant/antigua/carlos-04-988x658.jpg";
import footerImg2 from "assets/images/restaurant/wilmette/wilmette-open-03.jpg";
import footerImg3 from "assets/images/restaurant/chicago/slider1.jpg";

function DefaultFooter({ content }) {
  const { t } = useLanguage();
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer" bgColor="black">
      <Container>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12} md={4} sx={{ mb: 3 }}>
            <Link to={brand.route} style={{ textDecoration: "none" }}>
              <MKBox
                component="img"
                src={brand.image}
                alt={brand.name}
                width="180px"
                mb={2}
                sx={{ objectFit: "contain" }}
              />
            </Link>
            <MKBox display="flex" alignItems="center" mt={1}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="white"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
                color="white"
              >
                {t(`footer.${title}`)}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        color="white"
                      >
                        {t(`footer.${name.replace(/[\s,-]/g, '')}`)}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        color="white"
                      >
                        {t(`footer.${name.replace(/[\s,-]/g, '')}`)}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={4} sm={3} md={2}>
                <MKBox
                  component="a"
                  href="/pages/restaurant/gallery"
                  sx={{ textDecoration: "none", display: "block" }}
                >
                  <MKBox
                    component="img"
                    src={footerImg1}
                    alt="Antigua Guatemala"
                    width="100%"
                    sx={{ borderRadius: "6px", height: 80, objectFit: "cover", display: "block", transition: "opacity 0.3s", "&:hover": { opacity: 0.7 } }}
                  />
                </MKBox>
              </Grid>
              <Grid item xs={4} sm={3} md={2}>
                <MKBox
                  component="a"
                  href="/pages/restaurant/gallery"
                  sx={{ textDecoration: "none", display: "block" }}
                >
                  <MKBox
                    component="img"
                    src={footerImg2}
                    alt="Wilmette"
                    width="100%"
                    sx={{ borderRadius: "6px", height: 80, objectFit: "cover", display: "block", transition: "opacity 0.3s", "&:hover": { opacity: 0.7 } }}
                  />
                </MKBox>
              </Grid>
              <Grid item xs={4} sm={3} md={2}>
                <MKBox
                  component="a"
                  href="/pages/restaurant/gallery"
                  sx={{ textDecoration: "none", display: "block" }}
                >
                  <MKBox
                    component="img"
                    src={footerImg3}
                    alt="Arlington Heights"
                    width="100%"
                    sx={{ borderRadius: "6px", height: 80, objectFit: "cover", display: "block", transition: "opacity 0.3s", "&:hover": { opacity: 0.7 } }}
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
