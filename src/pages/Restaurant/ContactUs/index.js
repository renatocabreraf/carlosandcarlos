import { useState } from "react";
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

import { useLanguage } from "i18n/context";

function ContactUs() {
  const { t } = useLanguage();
  const [restaurant, setRestaurant] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!restaurant || !name || !message) return;

    if (restaurant === "antigua") {
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      window.location.href = `mailto:restaurante@carlosandcarlosantigua.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else if (restaurant === "wilmette") {
      const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0A%0A${message}`;
      window.open(`https://wa.me/18479205058?text=${text}`, "_blank");
    } else if (restaurant === "chicago") {
      const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0A%0A${message}`;
      window.open(`https://wa.me/18472592600?text=${text}`, "_blank");
    }
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
              {t('contact.hero.title')}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              {t('contact.hero.subtitle')}
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
                {t('contact.title')}
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={4}>
                {t('contact.description')}
              </MKTypography>

              <MKBox mb={3}>
                <MKTypography variant="button" fontWeight="bold" display="block" mb={0.5}>
                  {t('contact.reservations')}
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

              <MKBox mb={3}>
                <MKTypography variant="button" fontWeight="bold" display="block" mb={0.5}>
                  Antigua Guatemala
                </MKTypography>
                <MKTypography variant="caption" color="text">
                  4ta. Avenida Sur C.1, Antigua Guatemala, Sacatep&eacute;quez
                </MKTypography>
                <MKTypography variant="caption" color="text" component="a" href="mailto:restaurante@carlosandcarlosantigua.com" display="block">
                  restaurante@carlosandcarlosantigua.com
                </MKTypography>
              </MKBox>

              <MKBox mb={3}>
                <MKTypography variant="button" fontWeight="bold" display="block" mb={0.5}>
                  Wilmette, IL
                </MKTypography>
                <MKTypography variant="caption" color="text">
                  615 Green Bay Road, Wilmette, Illinois 60091
                </MKTypography>
              </MKBox>

              <MKBox mb={3}>
                <MKTypography variant="button" fontWeight="bold" display="block" mb={0.5}>
                  Arlington Heights, IL
                </MKTypography>
                <MKTypography variant="caption" color="text">
                  27 West Campbell Ave, Arlington Heights, IL 60005
                </MKTypography>
              </MKBox>
            </Grid>

            <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
              <MKBox component="form" autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MKBox
                      component="select"
                      value={restaurant}
                      onChange={(e) => setRestaurant(e.target.value)}
                      required
                      sx={{
                        width: "100%",
                        py: 1.5,
                        px: 0,
                        border: "none",
                        borderBottom: "1px solid",
                        borderColor: "#4A4A4A",
                        bgcolor: "transparent",
                        fontSize: "0.875rem",
                        fontFamily: "'Inter', sans-serif",
                        color: restaurant ? "#111" : "#4A4A4A",
                        outline: "none",
                        "&:focus": { borderColor: "#C8A96B" },
                        cursor: "pointer",
                        "& option": { color: "#111" },
                      }}
                    >
                      <option value="" disabled>{t('contact.form.select')}</option>
                      <option value="antigua">{t('contact.form.antigua')}</option>
                      <option value="wilmette">{t('contact.form.wilmette')}</option>
                      <option value="chicago">{t('contact.form.arlington')}</option>
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label={t('contact.form.name')}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label={t('contact.form.email')}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label={t('contact.form.subject')}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label={t('contact.form.message')}
                      InputLabelProps={{ shrink: true }}
                      multiline
                      rows={5}
                      fullWidth
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="flex-end" xs={12} mt={4}>
                  <MKButton type="submit" variant="gradient" color="info">
                    {t('contact.form.send')}
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
