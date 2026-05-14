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

import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function ContactUs() {
  return (
    <>
      <DefaultNavbar
        brand="Carlos & Carlos"
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
                For reservations, private events, catering, or general inquiries, we&apos;re here to
                help. Fill out the form and our team will get back to you within 24 hours.
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
                    Phone
                  </MKTypography>
                  <MKTypography variant="caption" color="text">
                    +1 (213) 555-0100
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
                    <i className="fas fa-envelope" />
                  </MKTypography>
                </MKBox>
                <MKBox>
                  <MKTypography variant="button" fontWeight="bold" display="block">
                    Email
                  </MKTypography>
                  <MKTypography variant="caption" color="text">
                    info@carlosandcarlos.com
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
                    Headquarters
                  </MKTypography>
                  <MKTypography variant="caption" color="text">
                    742 S Broadway, Los Angeles, CA 90014
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
