const antiguaMenu = [
  {
    label: "Entradas",
    items: [
      { name: "BRUSQUETA TRADICIONAL", price: "Q55", description: "Rodajas de pan tostado en casa y servido con tomate, albahaca, queso parmesano y vinagreta." },
      { name: "CALAMARI FIRENCE", price: "Q119", description: "Calamar frito con tomate picado, pepperoncinis, albahaca y queso parmesano." },
      { name: "CALAMAR PALMERINO", price: "Q119", description: "Aros de calamar salteado, con pimientos, tomate, alcaparras y vino blanco." },
      { name: "SALPICÓN DE MARISCOS", price: "Q140", description: "Frescos camarones, pulpo y langosta servidos en una mezcla de pimientos y cebolla morada; con nuestra receta de vinagreta hecha a base de balsámico y mostaza dijon; acompañado con rodajas de pan artesanal tostado con mantequilla de ajo." },
      { name: "CARPACCIO DE LOMITO DE RES", price: "Q99", description: "Finas lascas de lomito, sazonados con aceite de oliva, jugo de limón y alcaparras; acompañado con unas hojas de arúgula y queso parmesano." },
      { name: "SOPA MINESTRONE", price: "Q45", description: "Tradicional sopa de vegetales, base de fondo de pollo." },
      { name: "Sopa Del Dia", price: "Q55", description: "Pregunte a su mesero." },
    ],
  },
  {
    label: "Ensaladas",
    items: [
      { name: "CAPRESSE", price: "Q105", description: "Tradicional ensalada italiana, rodajas de tomate, cebolla morada, albahaca, queso mozzarella, y aguacate, vinagreta de la casa." },
      { name: "DE LA CASA", price: "Q60", description: "Lechuga romana, tomate, cebolla, zanahoria y crutones; con aderezo cremoso italiano." },
      { name: "BELLA", price: "Q90", description: "Arúgula, higos deshidratados, arándanos, pecanas caramelizadas, queso de cabra y lajas de pera; servido con aderezo de maracuyá." },
      { name: "CESAR", price: "Q60", description: "Lechuga romana, queso parmesano, crutones, aderezo césar. Extra pollo: Q25 / Extra camarón: Q45" },
    ],
  },
  {
    label: "Pasta",
    items: [
      { name: "PASTA NEGRA", price: "Q225", description: "Cabello del ángel negro, salteado con camarón, langosta, hongos, y pimientos; servido con salsa de langosta, vino blanco y crema." },
      { name: "PASTA CHECA", price: "Q95", description: "La más ligera pasta en el menú, cabello de ángel salteado con aceite de oliva virgen, tomate picado, lascas de ajo y albahaca." },
      { name: "LASAGNA DE LA CASA", price: "Q130", description: "Lascas de pasta hechas en casa, alternadas con salsa bolognese, bechamel y queso parmesano." },
      { name: "CABELLO DE ÁNGEL A LA AMATRICIANA", price: "Q120", description: "Cabello de ángel con tocino, tomate picado, chiles pimientos, chile seco, vino blanco y salsa marinara." },
      { name: "RAVIOLI DE SALMON", price: "Q145", description: "Hechos en casa, raviolis rellenos de salmón, queso ricotta, hierbas italianas, servidos con salsa vodka." },
      { name: "SPAGHETTI A LA BOLOGNESA", price: "Q120", description: "Spaghetti con la tradicional salsa bolognese." },
      { name: "PASTA BACCIOLO", price: "Q225", description: "Cabello de ángel salteado con camarón, langosta, pimientos rojos y verdes, alcaparras, mantequilla de ajo y vino blanco." },
      { name: "PENNE A LA FARCITA", price: "Q120", description: "Penne pasta con trozos de pollo, tomate fresco, tocino, vino blanco, crema y espinaca." },
      { name: "RAVIOLI DE CAMARÓN", price: "Q145", description: "Hechos en casa, raviolis rellenos de camarón, queso ricotta, servidos con salsa cremosa de vino blanco y crema con tomates deshidratados y albahaca fresca." },
      { name: "Gluten-free", price: "+Q12", description: "" },
    ],
  },
  {
    label: "Risotos",
    items: [
      { name: "RISSOTO DE CAMARÓN", price: "Q195", description: "Arroz arborio salteado con camarones, taragón, espinaca, tomate picado, base de pollo y un toque de ajo." },
      { name: "RISSOTO PRIMAVERA", price: "Q100", description: "Frescos vegetales de temporada, salteados con mantequilla, servidos con arroz italiano y queso parmesano." },
      { name: "RISSOTO DE POLLO", price: "Q130", description: "Filete de pechuga cortado en trozos, salteados con el risotto, espárragos, tomate, queso parmesano." },
    ],
  },
  {
    label: "Carnes y Pescados",
    items: [
      { name: "RIBEYE PORTOBELLO", price: "Q225", description: "Corte de ribeye de 12oz a la parrilla servido con hongos portobello, shallots y salsa morena, vino rojo, acompañado con guarniciones de temporada." },
      { name: "FILET MIGNON A LAS PIMIENTAS", price: "Q210", description: "Medallón de lomito de res de 8oz a la parrilla. Sobre una cama de salsa de pimienta, toque de vino tinto, salsa morena y un toque de crema." },
      { name: "PUYASO AL BALSÁMICO", price: "Q210", description: "Corte de puyazo de 8oz grillado con una salsa bordelaise, vinagre balsámico y un toque de mostaza dijon con vino tinto." },
      { name: "POLLO SOSTANZA", price: "Q135", description: "Filete de pechuga de pollo dorado y horneado servido con una salsa desglasada con mantequilla de salvia y salsa morena hecha en casa." },
      { name: "POLLO PAILLARD", price: "Q135", description: "Pechuga de pollo marinadas con hierbas italianas y aceite de oliva a la parrilla. Servido con la salsa especial divina." },
      { name: "SALMÓN CREVETTE", price: "Q185", description: "Filete fresco de salmón salteado con hongos, camarón y salsa de champagne con crema." },
      { name: "ROBALO CONCASSE", price: "Q160", description: "Filete sellado a la plancha, servido con un picado de tomate, albahaca fresca, con un ligero toque de aceite de oliva decorado con finas lascas de aguacate y reducción balsámica." },
      { name: "TILAPIA PICATA", price: "Q160", description: "Filete de pescado tilapia, con una salsa de alcaparras, vino blanco, mantequilla de ajo, zumo de limón, y toque ligero de perejil." },
    ],
  },
];

export default antiguaMenu;
