import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBadge from "components/MKBadge";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

import routes from "routes";
import footerRoutes from "footer.routes";

import bgImage from "assets/images/bg-about-us.jpg";
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function AboutUs() {
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
              Our Story
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              A journey of flavor, family, and tradition.
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
                  badgeContent="since 2010"
                  container
                  sx={{ mb: 2 }}
                />
                <MKTypography variant="h3" mb={2}>
                  From Guatemala With Love
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  Carlos & Carlos was born from a simple dream: to share the vibrant, soulful
                  flavors of Latin American cuisine with the world. Founded by brothers Carlos and
                  Carlos Mart&iacute;nez, our restaurant brings together family recipes passed down
                  through generations with innovative culinary techniques.
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  What started as a small eatery in Guatemala City has grown into a beloved
                  restaurant group with locations across the United States. Every dish on our menu
                  tells a story of our heritage, from the highlands of Guatemala to the coastal
                  flavors of Central America.
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  We believe that great food brings people together. Whether you&apos;re dining in
                  Guatemala, Los Angeles, or Miami, we invite you to experience the warmth of our
                  hospitality and the richness of our culinary traditions.
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={5} sx={{ ml: "auto" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="emoji_flags"
                        title="Our Heritage"
                        description="Proudly rooted in Guatemalan and Latin American culinary traditions"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="restaurant_menu"
                        title="Farm to Table"
                        description="Committed to fresh, locally sourced ingredients and sustainable practices"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 3, md: 0 }}>
                      <DefaultInfoCard
                        icon="diversity_3"
                        title="Family Owned"
                        description="A family-run business built on passion, quality, and genuine hospitality"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultInfoCard
                      icon="public"
                      title="Global Reach"
                      description="3 locations serving authentic Latin American flavors across 2 countries"
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
                  badgeContent="our team"
                  container
                  sx={{ mb: 2 }}
                />
                <MKTypography variant="h3" color="white">
                  Meet The Team
                </MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8}>
                  The passionate people behind every unforgettable meal.
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team1}
                    name="Carlos Martínez"
                    position={{ color: "info", label: "Co-Founder & Executive Chef" }}
                    description="A culinary artist who brings the authentic taste of Guatemala to every dish. Trained in Guatemala City and Paris."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team2}
                    name="Carlos Rodríguez"
                    position={{ color: "info", label: "Co-Founder & Operations Director" }}
                    description="The business mind behind Carlos & Carlos, ensuring every location delivers excellence."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team3}
                    name="María García"
                    position={{ color: "info", label: "Head Pastry Chef" }}
                    description="Creator of our beloved desserts, from classic flan to innovative Latin American pastries."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team4}
                    name="David Hernández"
                    position={{ color: "info", label: "Beverage Director" }}
                    description="Crafts our signature cocktail program, featuring premium Latin American spirits."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <MKBox component="section" py={6}>
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={7}
              justifyContent="center"
              sx={{ mx: "auto", textAlign: "center" }}
            >
              <MKBadge
                variant="contained"
                color="info"
                badgeContent="join us"
                container
                sx={{ mb: 2 }}
              />
              <MKTypography variant="h3" mb={2}>
                Ready to Experience Carlos & Carlos?
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                Whether you&apos;re joining us in Guatemala City, Los Angeles, or Miami, we
                can&apos;t wait to welcome you.
              </MKTypography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <MKButton
                    component="a"
                    href="/pages/restaurant/locations"
                    variant="gradient"
                    color="info"
                  >
                    Find a Location
                  </MKButton>
                </Grid>
                <Grid item>
                  <MKButton
                    component="a"
                    href="https://www.opentable.com/"
                    variant="outlined"
                    color="info"
                  >
                    Make a Reservation
                  </MKButton>
                </Grid>
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
