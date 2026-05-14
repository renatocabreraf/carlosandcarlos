import { useState } from "react";
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

import bgImage from "assets/images/bg-coworking.jpeg";

function Menus() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTab = (event, newValue) => setActiveTab(newValue);

  const categories = [
    {
      label: "Appetizers",
      items: [
        { name: "Guacamole Clásico", price: "$14", description: "Fresh avocado, lime, cilantro, tomato, and white onion. Served with house-made tortilla chips." },
        { name: "Ceviche Tradicional", price: "$16", description: "Fresh lime-cured fish with tomato, onion, cilantro, and avocado." },
        { name: "Chiles Rellenos", price: "$15", description: "Poblano peppers stuffed with cheese, bathed in tomato sauce." },
        { name: "Elote Loco", price: "$10", description: "Grilled Mexican street corn with mayo, cotija cheese, chili powder, and lime." },
      ],
    },
    {
      label: "Main Courses",
      items: [
        { name: "Pepian Guatemalteco", price: "$24", description: "Traditional Guatemalan chicken stew with sesame and pumpkin seed sauce. Served with rice and hand-made corn tortillas." },
        { name: "Carne Asada", price: "$28", description: "Grilled skirt steak with chimichurri, black beans, rice, and plantains." },
        { name: "Pescado a la Veracruzana", price: "$26", description: "Pan-seared fish fillet with tomato-caper olive sauce, served with vegetables." },
        { name: "Pollo en Jocón", price: "$22", description: "Chicken in a green tomatillo-cilantro sauce, served with rice and fried plantains." },
      ],
    },
    {
      label: "Desserts",
      items: [
        { name: "Flan de Caramelo", price: "$9", description: "Classic caramel flan with a smooth, creamy texture." },
        { name: "Tres Leches Cake", price: "$10", description: "Sponge cake soaked in three milks, topped with whipped cream and fresh berries." },
        { name: "Churros con Chocolate", price: "$8", description: "Crispy cinnamon churros served with warm chocolate dipping sauce." },
      ],
    },
    {
      label: "Cocktails",
      items: [
        { name: "Margarita Clásica", price: "$13", description: "Tequila, lime juice, triple sec, agave nectar." },
        { name: "Paloma", price: "$12", description: "Tequila, grapefruit soda, lime, salt rim." },
        { name: "Mojito Cubano", price: "$12", description: "White rum, mint, lime, sugar, soda water." },
        { name: "Michelada", price: "$11", description: "Mexican beer with lime, clamato, hot sauce, and spices." },
      ],
    },
  ];

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
              Our Menu
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              A celebration of Latin American flavors, crafted with tradition and passion.
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
              <AppBar position="static" color="transparent" sx={{ mb: 4 }}>
                <Tabs value={activeTab} onChange={handleTab} variant="scrollable" scrollButtons="auto">
                  {categories.map((cat) => (
                    <Tab key={cat.label} label={cat.label} />
                  ))}
                </Tabs>
              </AppBar>

              <MKBox>
                {categories[activeTab]?.items.map((item) => (
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
                      <MKTypography variant="body2" color="text">
                        {item.description}
                      </MKTypography>
                    </MKBox>
                    <MKTypography variant="h6" color="info" fontWeight="bold" sx={{ ml: 2, whiteSpace: "nowrap" }}>
                      {item.price}
                    </MKTypography>
                  </MKBox>
                ))}
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

export default Menus;
