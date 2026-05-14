import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";
import brandLogo from "assets/images/logos/brand.png";

import bgImage from "assets/images/restaurant/antigua/carlos-05-988x658.jpg";

function ContactUs() {
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
              Contact Us
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              We&apos;d love to hear from you.
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
        <Container sx={{ my: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5} sx={{ mb: { xs: 4, lg: 0 } }}>
              <MKTypography variant="h4" mb={1}>
                Get In Touch
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={4}>
                Nos sentiremos honrados que seleccione Carlos & Carlos en su pr&oacute;xima visita.
                Estaremos gustosos de brindarle una experiencia gastron&oacute;mica &uacute;nica.
              </MKTypography>

              <MKBox display="flex" alignItems="center" p={1}>
                <MKBox
                  width="2.5rem"
                  height="2.5rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="lg"
                  mr={2}
                >
                  <MKTypography variant="body1" color="white" lineHeight={0}>
                    <i className="fas fa-phone" />
                  </MKTypography>
                </MKBox>
                <MKBox>
                  <MKTypography variant="button" fontWeight="bold" display="block">
                    Reservations
                  </MKTypography>
                  <MKTypography
                    variant="caption"
                    color="text"
                    component="a"
                    href="tel:+50278722432"
                    display="block"
                  >
                    Antigua: +502 7872 2432
                  </MKTypography>
                  <MKTypography
                    variant="caption"
                    color="text"
                    component="a"
                    href="tel:8479205058"
                    display="block"
                  >
                    Wilmette: 847-920-5058
                  </MKTypography>
                  <MKTypography
                    variant="caption"
                    color="text"
                    component="a"
                    href="tel:8472592600"
                    display="block"
                  >
                    Chicago: 847-259-2600
                  </MKTypography>
                </MKBox>
              </MKBox>

              <MKBox display="flex" alignItems="center" p={1} mt={1}>
                <MKBox
                  width="2.5rem"
                  height="2.5rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="lg"
                  mr={2}
                >
                  <MKTypography variant="body1" color="white" lineHeight={0}>
                    <i className="fab fa-whatsapp" />
                  </MKTypography>
                </MKBox>
                <MKBox>
                  <MKTypography variant="button" fontWeight="bold" display="block">
                    WhatsApp
                  </MKTypography>
                  <MKTypography
                    variant="caption"
                    color="text"
                    component="a"
                    href="https://wa.me/50239899709"
                    target="_blank"
                  >
                    +502 3989 9709 (Antigua)
                  </MKTypography>
                </MKBox>
              </MKBox>

              <MKBox display="flex" alignItems="center" p={1} mt={1}>
                <MKBox
                  width="2.5rem"
                  height="2.5rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="lg"
                  mr={2}
                >
                  <MKTypography variant="body1" color="white" lineHeight={0}>
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                </MKBox>
                <MKBox>
                  <MKTypography variant="button" fontWeight="bold" display="block">
                    Antigua Guatemala
                  </MKTypography>
                  <MKTypography variant="caption" color="text">
                    4ta. Avenida Sur C.1, Antigua Guatemala, Sacatep&eacute;quez
                  </MKTypography>
                  <MKTypography variant="caption" color="text" component="a" href="mailto:antigua@carlosandcarlos.com" display="block">
                    antigua@carlosandcarlos.com
                  </MKTypography>
                </MKBox>
              </MKBox>

              <MKBox display="flex" alignItems="center" p={1} mt={1}>
                <MKBox
                  width="2.5rem"
                  height="2.5rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="lg"
                  mr={2}
                >
                  <MKTypography variant="body1" color="white" lineHeight={0}>
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                </MKBox>
                <MKBox>
                  <MKTypography variant="button" fontWeight="bold" display="block">
                    Wilmette, IL
                  </MKTypography>
                  <MKTypography variant="caption" color="text">
                    615 Green Bay Road, Wilmette, Illinois 60091
                  </MKTypography>
                  <MKTypography variant="caption" color="text" component="a" href="mailto:wilmette@carlosandcarlos.com" display="block">
                    wilmette@carlosandcarlos.com
                  </MKTypography>
                </MKBox>
              </MKBox>

              <MKBox display="flex" alignItems="center" p={1} mt={1}>
                <MKBox
                  width="2.5rem"
                  height="2.5rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="lg"
                  mr={2}
                >
                  <MKTypography variant="body1" color="white" lineHeight={0}>
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                </MKBox>
                <MKBox>
                  <MKTypography variant="button" fontWeight="bold" display="block">
                    Arlington Heights, IL
                  </MKTypography>
                  <MKTypography variant="caption" color="text">
                    27 West Campbell Ave, Arlington Heights, IL 60005
                  </MKTypography>
                  <MKTypography variant="caption" color="text" component="a" href="mailto:chicago@carlosandcarlos.com" display="block">
                    chicago@carlosandcarlos.com
                  </MKTypography>
                </MKBox>
              </MKBox>

              <MKBox mt={4}>
                <MKTypography variant="button" fontWeight="bold" mb={1} display="block">
                  Follow Us
                </MKTypography>
                <MKBox display="flex">
                  <MKButton variant="text" color="info" size="large" iconOnly sx={{ mr: 0.5 }}>
                    <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                  <MKButton variant="text" color="info" size="large" iconOnly sx={{ mr: 0.5 }}>
                    <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                  <MKButton variant="text" color="info" size="large" iconOnly>
                    <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                </MKBox>
              </MKBox>
            </Grid>

            <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
              <MKBox component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      placeholder="Your full name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email Address"
                      placeholder="your@email.com"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Subject"
                      placeholder="How can we help you?"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Your Message"
                      placeholder="Tell us more about your inquiry..."
                      InputLabelProps={{ shrink: true }}
                      multiline
                      rows={5}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="flex-end" xs={12} mt={4}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
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

export default ContactUs;
