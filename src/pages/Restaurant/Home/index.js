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
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import routes from "routes";
import footerRoutes from "footer.routes";

import bgImage from "assets/images/bg-presentation.jpg";

function Home() {
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
        sticky
      />
      <MKBox
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: ({
            palette: { gradients },
            functions: { linearGradient, rgba },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
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
            <MKBadge
              variant="contained"
              color="info"
              badgeContent="Now Open in 3 Countries"
              container
              sx={{ mb: 2 }}
            />
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: { fontSize: size["3xl"] },
              })}
            >
              Carlos & Carlos
            </MKTypography>
            <MKTypography variant="h4" color="white" fontWeight="light" opacity={0.9} mb={3}>
              Latin American Kitchen & Bar
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mb={4} px={4}>
              Authentic Latin American flavors crafted with passion. From the heart of Guatemala to
              the tables of the United States.
            </MKTypography>
            <Stack direction="row" spacing={2}>
              <MKButton
                component="a"
                href="/pages/restaurant/menus"
                variant="gradient"
                color="info"
                size="large"
              >
                View Our Menus
              </MKButton>
              <MKButton
                component="a"
                href="https://www.opentable.com/"
                variant="outlined"
                color="white"
                size="large"
              >
                Make a Reservation
              </MKButton>
            </Stack>
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
        <MKBox component="section" py={3}>
          <Container>
            <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
              <Grid item xs={12} md={4}>
                <DefaultCounterCard
                  count={15}
                  suffix="+"
                  title="Years of Tradition"
                  description="Bringing authentic Latin American flavors since 2010"
                />
              </Grid>
              <Grid item xs={12} md={4} display="flex">
                <Divider
                  orientation="vertical"
                  sx={{ display: { xs: "none", md: "block" }, mx: 0 }}
                />
                <DefaultCounterCard
                  count={3}
                  title="Locations"
                  description="Guatemala City, Los Angeles & Miami"
                />
                <Divider
                  orientation="vertical"
                  sx={{ display: { xs: "none", md: "block" }, ml: 0 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DefaultCounterCard
                  count={50}
                  suffix="+"
                  title="Signature Dishes"
                  description="A curated menu celebrating the best of Latin American cuisine"
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <MKBox component="section" py={6}>
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} lg={6}>
                <MKTypography variant="h3" mb={1}>
                  A Taste of Latin America
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  At Carlos & Carlos, every dish tells a story. From our grandmother&apos;s secret
                  recados to the vibrant street food of Guatemala City, we bring the authentic
                  flavors of Latin America to your plate. Our chefs source the freshest ingredients
                  to create a dining experience that is both traditional and innovative.
                </MKTypography>
                <MKButton
                  component="a"
                  href="/pages/restaurant/about-us"
                  variant="outlined"
                  color="info"
                >
                  Our Story
                </MKButton>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="restaurant"
                        title="Authentic Recipes"
                        description="Traditional recipes passed down through generations"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={3}>
                      <DefaultInfoCard
                        icon="local_shipping"
                        title="Fresh Ingredients"
                        description="Sourcing the finest local and imported ingredients"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 3, md: 0 }}>
                      <DefaultInfoCard
                        icon="wine_bar"
                        title="Curated Bar"
                        description="Premium Latin American spirits and signature cocktails"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultInfoCard
                      icon="groups"
                      title="Family Atmosphere"
                      description="Warm, welcoming environment with genuine hospitality"
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
                Our Locations
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={3}>
                Three unique locations, one unforgettable experience.
              </MKTypography>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="location_on"
                  title="Guatemala City"
                  description="6a Avenida 12-42, Zona 10, Guatemala City, Guatemala"
                  action={{
                    type: "internal",
                    route: "/pages/restaurant/locations/guatemala",
                    label: "View Details",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilledInfoCard
                  variant="contained"
                  color="info"
                  icon="location_on"
                  title="Los Angeles"
                  description="742 S Broadway, Los Angeles, CA 90014, United States"
                  action={{
                    type: "internal",
                    route: "/pages/restaurant/locations/los-angeles",
                    label: "View Details",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="location_on"
                  title="Miami"
                  description="1000 Collins Ave, Miami Beach, FL 33139, United States"
                  action={{
                    type: "internal",
                    route: "/pages/restaurant/locations/miami",
                    label: "View Details",
                  }}
                />
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
              justifyContent="center"
              sx={{ mx: "auto", textAlign: "center" }}
            >
              <MKBadge
                variant="contained"
                color="info"
                badgeContent="testimonials"
                container
                sx={{ mb: 2 }}
              />
              <MKTypography variant="h2" fontWeight="bold">
                What Our Guests Say
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>
                We take pride in every dining experience we create.
              </MKTypography>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 4 }}>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  name="Maria González"
                  date="3 weeks ago"
                  review="The pepian at Carlos & Carlos is the best I've had outside of Guatemala. The atmosphere and service are incredible. A true taste of home."
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="info"
                  name="James Mitchell"
                  date="1 month ago"
                  review="Incredible Latin American cuisine. The chiles rellenos were perfect and the cocktail list is outstanding. Will definitely be coming back!"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  name="Sofia Ramirez"
                  date="2 weeks ago"
                  review="A hidden gem! From the moment you walk in, the warmth of the hospitality matches the excellence of the food. Highly recommend the ceviche."
                  rating={5}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <Divider sx={{ my: 0 }} />

        <MKBox component="section" pt={6} pb={8}>
          <Container>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6} sx={{ mb: { xs: 6, md: 0 } }}>
                <MKTypography variant="h4">Stay in the Loop</MKTypography>
                <MKTypography variant="body2" color="text" mb={3}>
                  Subscribe to our newsletter for exclusive events, new menu items, and special
                  offers at all our locations.
                </MKTypography>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <MKBox
                      component="form"
                      onSubmit={(e) => e.preventDefault()}
                      sx={{ display: "flex" }}
                    >
                      <MKBox
                        component="input"
                        placeholder="Your email address"
                        sx={{
                          width: "100%",
                          py: 1.5,
                          px: 2,
                          border: ({ borders: { borderWidth, borderColor } }) =>
                            `${borderWidth[1]} solid ${borderColor}`,
                          borderRadius: ({ borders: { borderRadius } }) => borderRadius.md,
                          fontSize: ({ typography: { size } }) => size.md,
                          outline: "none",
                          "&:focus": {
                            borderColor: ({ palette: { info } }) => info.main,
                          },
                        }}
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={4}>
                    <MKButton variant="gradient" color="info" sx={{ height: "100%", width: "100%" }}>
                      Subscribe
                    </MKButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5} sx={{ ml: "auto", textAlign: "center" }}>
                <Icon sx={{ fontSize: 80, color: ({ palette: { info } }) => info.main }}>
                  restaurant_menu
                </Icon>
                <MKTypography variant="h5" fontWeight="bold" mt={2}>
                  Join Our Family
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Be the first to know about special events and new menu launches.
                </MKTypography>
              </Grid>
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
