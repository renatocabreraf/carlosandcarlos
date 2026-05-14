const chicagoMenu = [
  {
    label: "Antipasti",
    items: [
      { name: "SCAMPI MEDITERRANEO", price: "$16", description: "Prawns sautéed in a garlic butter bordelaises sauce with a touch of red wine." },
      { name: "MUSSELS AND CLAMS A'OLIO", price: "$16", description: "New zeeland mussels and clams sautéed with olive oil garlic fresh tomatoes in a shrimp broth." },
      { name: "BEEF CARPACCIO", price: "$16", description: "Thin sliced fillet mignon topped with mustard remoulad, mixed greens, parmesan cheese, capers & red onion." },
      { name: "RAVIOLI AL SALMONE", price: "$16", description: "Stuffed homemade ravioli with smoked salmon Italian herbs, served with dill cream sauce." },
      { name: "GRILLED CALAMARI", price: "$16", description: "Grilled calamari served w/fresh tomatoes, pepperoncini peppers, shaved garlic, black olives, capers & touch of garlic butter." },
      { name: "CLAMS CASINO", price: "$16", description: "Fresh baked clams, pancetta, garlic, casino butter." },
      { name: "SCALLOPS CAPRICCIOS", price: "$17", description: "Pan Seared Scallops, diced tomatoes, dijon mustard sauce." },
    ],
  },
  {
    label: "Zuppe",
    items: [
      { name: "Homemade Minestrone", price: "$8", description: "Made with fresh vegetables." },
      { name: "Chef's Soup of The Day", price: "$12", description: "" },
    ],
  },
  {
    label: "Insalate",
    items: [
      { name: "LA BELLA", price: "$14", description: "Fresh arugula, pears, dry figs & goat cheese, cranberries, caramelized pecans, passion fruit vinaigrette." },
      { name: "CAPRESE", price: "$15", description: "Sliced tomatoes, avocado, sweet red onions, buffalo mozzarella and fresh basil, red italian vinaigrette." },
      { name: "ROASTED BEET SALAD", price: "$14", description: "Gold & red beets, carrots, mixed greens, caramelized pecans, and gorgonzola cheese served with beet & bleu cheese dressing." },
      { name: "ICEBERG WEDGE", price: "$14", description: "Iceberg wedge served with crispy pancetta sweet red onions, cucumbers and tomatoes, radicchio, crumbled gorgonzola, vinaigrette and gorgonzola dressing." },
      { name: "SPINACH SALAD", price: "$14", description: "Fresh spinach served with a hard boiled egg, mushrooms in a warm balsamic mustard & bacon vinaigrette." },
    ],
  },
  {
    label: "Pasta & Risottos",
    items: [
      { name: "PENNE FARCITA", price: "$24", description: "Penne pasta served with sautéed chunks of chicken, spinach, pancetta, fresh tomatoes in a white wine cream sauce." },
      { name: "BLACK PASTA", price: "$28", description: "Black angel hair served with shrimps, scallops, mushrooms, red bell pepper cream lobster reduction sauce." },
      { name: "BIETE", price: "$23", description: "Homemade fresh made ravioli filled with spinach, fresh ricotta cheese served with a light butter sage sauce." },
      { name: "CHICKEN RAVIOLI", price: "$23", description: "Ravioli stuffed with chicken, spinach and artichokes served in a arrabiata sauce." },
      { name: "LINGUINI PESCATORE", price: "$29", description: "Linguini served with shrimp, scallops, mussels, clams, shaved garlic and basil in a marinara sauce." },
      { name: "SCAMPI DI CHEF", price: "$30", description: "Large prawns served sautéed with mushrooms and bell peppers in a bordelasies sauce touch of cream." },
      { name: "FETTUCCINE & SHORT RIBS", price: "$29", description: "Homemade pasta served with braised short ribs, virgin olive oil, and vegetable meat ragu sauce." },
      { name: "GNOCCHI DI CASA", price: "$28", description: "Homemade gnocchi served with chunks of filet mignon, broccoli, shaved garlic sundried tomatoes, mushrooms in a olive oil sauce." },
      { name: "LANGOSTINO", price: "$25", description: "Homemade ravioli filled with chunks of lobster meat, ricotta cheese, fresh basil sundried tomatoes with lobster cream sauce." },
      { name: "PENNE AMATRICIANA", price: "$23", description: "Penne pasta served with sauteed onions, mushrooms, red bell peppers, pancetta and arrabiata sauce." },
      { name: "RISOTTO AL FUNGI", price: "$23", description: "Arborio served with wild mushrooms & goat cheese." },
      { name: "RISOTTO GAMBERI", price: "$29", description: "Arborio served w/ prawns, shaved garlic, fresh tomatoes, spinach, and touch of tarragon." },
      { name: "BACCIOLO", price: "$29", description: "Angel hair pasta served with sauteed shrimps, scallops, bell peppers, mushrooms, capers in a garlic sauce touch of white wine." },
    ],
  },
  {
    label: "Veal",
    items: [
      { name: "VEAL SALTIMBOCCA", price: "$32", description: "Scallopini served sauteed with prosciutto, mushrooms and sage." },
      { name: "VEAL PORTERHOUSE", price: "$43", description: "Bone in porterhouse broiled and served with apricot brandy sauce." },
      { name: "VEAL FRANCESE", price: "$32", description: "Veal medallions & zucchini dipped in egg wash then sautéed & served with a white wine." },
      { name: "VEAL CHOP MILANESE", price: "$43", description: "Veal chop lightly pounded and lightly dusted in seasoned bread crumbs with a lemon butter white wine sauce." },
      { name: "VEAL SORRENTO", price: "$32", description: "Stuffed medallions with provolone cheese, spinach, served with artichokes, diced tomatoes and bordalaise sauce." },
      { name: "VEAL CARLOS", price: "$32", description: "Veal medallions served with porcini mushrooms and regular mushrooms in a champagne cream reduction sauce." },
    ],
  },
  {
    label: "Pollo",
    items: [
      { name: "POLLO SOSTANZA", price: "$28", description: "Roasted chicken breast served sautéed to a crisp with a with a sage white wine sauce." },
      { name: "POLLO PICCATA", price: "$28", description: "Pounded breast of chicken served sautéed with a lemon butter garlic and caper sauce." },
      { name: "POLLO VESUVIO", price: "$28", description: "Breast, leg and thigh served sautéed with white wine, garlic, oregano, peas and potatoes." },
    ],
  },
  {
    label: "Carni",
    items: [
      { name: "FILET MIGNON", price: "$40", description: "Served broiled with thin sliced mushrooms and black truffle sauce." },
      { name: "RIBEYE PORTABELLA", price: "$42", description: "Served broiled with portabella mushroom sauce and sage bordelaise sauce." },
    ],
  },
  {
    label: "Pesce",
    items: [
      { name: "SALMON CARLOS", price: "$29", description: "Fillet of salmon served broiled with a dijon mustard, glaze, julian vegetables, in a sesame ginger sauce." },
      { name: "GRIGLIATA DI MARE", price: "$29", description: "Grilled tilapia, scallops, shrimp, red & green bell peppers, fresh tomatoes, touch of garlic over pasta." },
      { name: "WHITE FISH PRIMAVERA", price: "$28", description: "Served sauteed with lemon caper butter sauce and julienne vegetables." },
    ],
  },
];

export default chicagoMenu;
