const restaurant = [
{
  city: "rome", 
  cuisine: "asian",
  name: "Dumpling Bar",
  priceRange: "$",
  starRating: "4.5",
  address: "Piazza Antonio Meucci 1A Piazza Antonio Meucci 1A, Incrocio Via Oderisi da Gubbio, 00146 Rome Italy",
  openingHours: "12:30pm - 3:00pm; 7:30pm - 11:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\dumpling-bar.jpg"
},
{
  city: "rome", 
  cuisine: "asian",
  name: "JiaMo.Lab",
  priceRange: "$",
  starRating: "5.0",
  address: "Via Bergamo 15, 00198 Rome Italy",
  openingHours: "12:30pm - 5:00pm; 7:00pm - 9:45pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\jiamolab.jpg" 
},
{
  city: "rome", 
  cuisine: "asian",
  name: "Ristorante Lin",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Via Basento 70-76, 00198 Rome Italy",
  openingHours: "12:30pm - 2:30pm; 7:00pm - 10:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\lin.jpg" 
},
{
  city: "rome", 
  cuisine: "asian",
  name: "Ristorante Taste East",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Piazza del Sacro Cuore 12-15, 00151 Rome Italy",
  openingHours: "12:00pm - 3:00pm; 7:00pm - 11:30pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\taste-east.jpg" 
},
{
  city: "rome", 
  cuisine: "asian",
  name: "Yes Food",
  priceRange: "$",
  starRating: "4.5",
  address: "Via Catania 53/55, 00161 Rome Italy",
  openingHours: "12:00pm - 3:30pm; 7:00pm - 11:30pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\yes-food.jpg" 
},
{
  city: "rome", 
  cuisine: "asian",
  name: "Ristorante Cinese Sichuan",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Via di San Martino Ai Monti 33/C, 00184 Rome Italy",
  openingHours: "11:00pm - 3:00pm; 5:30pm - 11:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\sichuan.jpg" 
},
{
  city: "rome", 
  cuisine: "asian",
  name: "The Gustami",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Piazzale Roberto Ardigo' 33, 00142 Rome Italy",
  openingHours: "7:00pm - 12:00am",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\gustami.jpg" 
},
{
  city: "rome", 
  cuisine: "asian",
  name: "Jinja Prati",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Circonvallazione Trionfale 59/59A, 00195 Rome Italy",
  openingHours: "12:15pm - 3:00pm; 6:00pm - 10:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\jinja.jpg" 
},
{
  city: "rome", 
  cuisine: "asian",
  name: "Ristorante Oryza",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Largo Gambassi 10 Via Cavriglia 54, 00139 Rome Italy",
  openingHours: "12:15pm - 3:00pm; 7:00pm - 11:45pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\oryza.jpg"
},
{
  city: "rome", 
  cuisine: "asian",
  name: "AkariSushi",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Via Giacinto Pieralice de Vecchi 40, 00167 Rome Italy",
  openingHours: "12:30pm - 3:00pm; 6:30pm - 12:00am",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\akarisushi.jpg"
},
{
  city: "rome",
  cuisine: "italian",
  name: "Adesso Vineria-bistrot",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Via dell'Orso 71, 00186 Rome Italy",
  openingHours: "6:00pm - 11:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\adesso.jpg"
},
{
  city: "rome",
  cuisine: "italian",
  name: "Bar Palomba",
  priceRange: "$",
  starRating: "4.5",
  address: "Via Vespasiano 52 a/b, 00192 Rome Italy",
  openingHours: "6:30am - 9:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\palomba.jpg"
},
{
  city: "rome",
  cuisine: "italian",
  name: "La Fata Ignorante - Rooftop Restaurant & Bar",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Via Firenze, 8, 00184 Rome Italy",
  openingHours: "5:00pm - 11:30pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\ignorante.jpg"
},
{
  city: "rome",
  cuisine: "italian",
  name: "Ad Hoc Ristorante (Circo Massimo)",
  priceRange: "$$$$",
  starRating: "5.0",
  address: "Via Dei Cerchi 75, 00186 Rome Italy",
  openingHours: "7:00pm - 10:45pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\ad-hoc.jpg"
},
{
  city: "rome",
  cuisine: "italian",
  name: "Pasta e Vino - Torre Argentina",
  priceRange: "$$$$",
  starRating: "5.0",
  address: "Via di Torre Argentina 46, 00186 Rome Italy",
  openingHours: "9:00am - 12:00am",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\pasta-e-vino.jpg"
},
{
  city: "rome",
  cuisine: "italian",
  name: "TreCaffe Gianicolense",
  priceRange: "$",
  starRating: "5.0",
  address: "Circonvallazione Gianicolense 155 Corner Via Jenner - piazza San Giovanni Di Dio, 00152 Rome Italy",
  openingHours: "6:00am - 8:30pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\trecaffe.jpg"
},
{
  city: "rome",
  cuisine: "italian",
  name: "Bono Bottega Nostrana - San Pietro",
  priceRange: "$",
  starRating: "5.0",
  address: "Via di Porta Cavalleggeri 109/111, 00165 Rome Italy",
  openingHours: "9:00am - 12:00am",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\bono-bottega.jpg"
},
{
  city: "rome",
  cuisine: "italian",
  name: "Ombre Rosse",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Via Garibaldi 27/g, 00153 Rome Italy",
  openingHours: "5:00pm - 12:30am",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\ombre-rosse.jpg"
},
{
  city: "rome",
  cuisine: "italian",
  name: "Caffe Conti",
  priceRange: "$",
  starRating: "5.0",
  address: "Via Tuscolana 1677, 00044 Rome Italy",
  openingHours: "5:00am - 8:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\caffe-conti.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "Gustamundo Bistrot Aurelio",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Via Giacinto Pieralice de Vecchi 38, 00167 Rome Italy",
  openingHours: "6:30pm - 11:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\gustamundo.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "Chattanooga Saloon",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Via Appia Nuova 707, 00179 Rome Italy",
  openingHours: "7:00pm - 12:00am",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\chattanooga.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "Casa Sanchez",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Via Catanzaro 6b, 00161 Rome Italy",
  openingHours: "7:00pm - 11:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\casa-sanchez.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "Maybu - Margaritas y Burritos Via Candia",
  priceRange: "$",
  starRating: "4.5",
  address: "Via Candia 113, 00192 Rome Italy",
  openingHours: "11:00am - 11:30pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\maybu.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "La Cucaracha",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Via Mocenigo 10A, 00192 Rome Italy",
  openingHours: "6:30pm - 11:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\cucaracha.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "Pico's Taqueria & American Grill",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Vicolo della Renella 94, 00153 Rome Italy",
  openingHours: "12:00pm - 11:59pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\picos.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "El Pueblo Bistrot Aurelio",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Via Giacinto de Vecchi Pieralice, 34, 00167 Rome Italy",
  openingHours: "6:30pm - 10:30pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\el-pueblo.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "El Jalapeno",
  priceRange: "$",
  starRating: "4.5",
  address: "Via Aurelia 483 Mercato Irnerio, 00165 Rome Italy",
  openingHours: "12:00pm - 10:30pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\jalapeno.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "Pulgarcito",
  priceRange: "$",
  starRating: "5.0",
  address: "Piazza Attilio Pecile, 41 Next to Torrefazione San Salvador, 00154 Rome Italy",
  openingHours: "12:30pm - 2:30pm; 6:00pm - 9:00pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\pulgarcito.jpg"
},
{
  city: "rome",
  cuisine: "mexican",
  name: "Fiesta y Siesta",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Via Nomentana, 155 vicino a Porta Pia, 00198 Rome Italy",
  openingHours: "7:30pm - 12:30am",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\images\fiesta-y-siesta.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Buddha-Bar",
  priceRange: "$$$",
  starRating: "4.5",
  address: "8-12 Rue Boissy d'Anglas, 75008 Paris, France",
  openingHours: "12:00pm – 2:00am",
  imageUrl: "buddha-bar.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Kong",
  priceRange: "$$$",
  starRating: "4.4",
  address: "1 Rue du Pont Neuf, 75001 Paris, France",
  openingHours: "12:30pm - 2:30pm; 7:30pm – 11:00pm",
  imageUrl: "kong.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Yoko",
  priceRange: "$$",
  starRating: "4.2",
  address: "37 Rue Sainte-Anne, 75001 Paris, France",
  openingHours: "12:00pm – 3:00pm; 7:00pm – 11:00pm",
  imageUrl: "yoko.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Blue Elephant",
  priceRange: "$$$",
  starRating: "4.3",
  address: "43 Rue de la Roquette, 75011 Paris, France",
  openingHours: "12:00pm - 2:30pm; 7:00pm – 11:00pm",
  imageUrl: "blue-elephant.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Miss Ko",
  priceRange: "$$$",
  starRating: "4.1",
  address: "49/51 Avenue George V, 75008 Paris, France",
  openingHours: "12:00pm - 2:30pm; 7:00pm – 12:00am",
  imageUrl: "missko.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Matsuri",
  priceRange: "$$",
  starRating: "4.0",
  address: "5 Boulevard des Capucines, 75002 Paris, France",
  openingHours: "11:30am – 3:00pm; 6:00pm – 11:00pm",
  imageUrl: "matsuri.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Le Mary Celeste",
  priceRange: "$$",
  starRating: "4.2",
  address: "1 Rue Commines, 75003 Paris, France",
  openingHours: "12:00pm – 2:00am",
  imageUrl: "le-mary-celeste.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Daroco",
  priceRange: "$$$",
  starRating: "4.4",
  address: "6 Rue Vivienne, 75002 Paris, France",
  openingHours: "12:00pm - 2:30pm; 7:00pm – 11:00pm",
  imageUrl: "daroco.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Cinq Fois Plus",
  priceRange: "$$",
  starRating: "4.0",
  address: "9 Rue Saint-Gilles, 75003 Paris, France",
  openingHours: "12:00pm - 3:00pm; 7:00pm - 11:00pm",
  imageUrl: "cinq-fois-plus.jpg"
},
{
  city: "paris",
  cuisine: "asian",
  name: "Le Bar à Huitres",
  priceRange: "$$",
  starRating: "4.3",
  address: "33 Boulevard Beaumarchais, 75003 Paris, France",
  openingHours: "12:00pm - 12:00am",
  imageUrl: "huitres.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "LouLou",
  priceRange: "$$$",
  starRating: "4.5",
  address: "107 Rue de Rivoli, 75001 Paris, France",
  openingHours: "12:00pm - 2:30pm; 7:00pm - 10:30pm",
  imageUrl: "loulou.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "Ober Mamma",
  priceRange: "$$",
  starRating: "4.4",
  address: "107 Boulevard Richard Lenoir, 75011 Paris, France",
  openingHours: "12:00pm - 3:30pm; 7:00pm - 11:30pm",
  imageUrl: "ober-mamma.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "Big Mamma La Felicità",
  priceRange: "$$",
  starRating: "4.3",
  address: "55 Boulevard Vincent Auriol, 75013 Paris, France",
  openingHours: "12:00pm - 2:30pm; 7:00pm - 10:30pm",
  imageUrl: "big-mamma.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "Grazie",
  priceRange: "$$",
  starRating: "4.2",
  address: "91 Boulevard Beaumarchais, 75003 Paris, France",
  openingHours: "12:00pm - 3:00pm; 7:00pm - 11:00pm",
  imageUrl: "grazie.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "Daroco",
  priceRange: "$$$",
  starRating: "4.4"
  address: "6 Rue Vivienne, 75002 Paris, France",
  openingHours: "12:00pm - 2:30pm; 7:00pm - 11:00pm",
  imageUrl: "daroco.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "Al Taglio",
  priceRange: "$$",
  starRating: "4.0",
  address: "2 Rue Neuve Popincourt, 75011 Paris, France",
  openingHours: "12:00pm - 2:30pm; 7:00pm - 10:30pm",
  imageUrl: "al-taglio.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "Il Forno a Legna",
  priceRange: "$$",
  starRating: "4.2",
  address: "18 Rue Saint-Séverin, 75005 Paris, France",
  openingHours: "12:00pm - 3:00pm; 7:00pm - 11:00pm",
  imageUrl: "il-forno.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "Giovanni Passerini",
  priceRange: "$$$",
  starRating: "4.3",
  address: "65 Rue Traversière, 75012 Paris, France",
  openingHours: "12:30pm - 2:30pm; 7:30pm - 10:30pm",
  imageUrl: "passerini.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "Le Grand Café Capucines",
  priceRange: "$$",
  starRating: "4.1",
  address: "4 Boulevard des Capucines, 75009 Paris, France",
  openingHours: "12:00pm - 12:00am",
  imageUrl: "capucines.jpg"
},
{
  city: "paris",
  cuisine: "italian",
  name: "Il Carpaccio",
  priceRange: "$$$",
  starRating: "4.4",
  address: "19 Avenue Kléber, 75116 Paris, France",
  openingHours: "12:30pm - 2:30pm; 7:30pm - 10:30pm",
  imageUrl: "carpaccio.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "El Nopal",
  priceRange: "$$",
  starRating: "4.3",
  address: "3 Rue Eugène Varlin, 75010 Paris, France",
  openingHours: "12:00pm - 3:00pm; 7:00pm - 11:00pm",
  imageUrl: "el-nopal.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "Candelaria",
  priceRange: "$$",
  starRating: "4.4",
  address: "52 Rue de Saintonge, 75003 Paris, France",
  openingHours: "12:30pm - 2:30pm; 7:30pm - 11:00pm",
  imageUrl: "candelaria.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "Anahuacalli",
  priceRange: "$$$",
  starRating: "4.2",
  address: "30 Rue des Bernardins, 75005 Paris, France",
  openingHours: "12:00pm - 2:30pm; 7:00pm - 10:30pm",
  imageUrl: "anahuacalli.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "Mamacita",
  priceRange: "$$",
  starRating: "4.1",
  address: "8 Rue de la Michodière, 75002 Paris, France",
  openingHours: "12:00pm - 3:00pm; 7:00pm - 11:00pm",
  imageUrl: "mamacita.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "El Guacamole",
  priceRange: "$",
  starRating: "4.0",
  address: "11 Rue Saint-Blaise, 75020 Paris, France",
  openingHours: "12:00pm - 2:30pm; 7:00pm - 10:00pm",
  imageUrl: "el-guacamole.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "Los Mexicanos",
  priceRange: "$$",
  starRating: "4.3",
  address: "12 Rue du Faubourg Saint-Denis, 75010 Paris, France",
  openingHours: "12:00pm - 3pm; 7:00pm - 11:00pm",
  imageUrl: "los-mexicanos.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "El Sol y La Luna",
  priceRange: "$$",
  starRating: "4.2",
  address: "45 Rue de la Folie Méricourt, 75011 Paris, France",
  openingHours: "12:00pm - 3:00pm; 7:00pm - 11:00pm",
  imageUrl: "sol-luna.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "Mexi & Co",
  priceRange: "$$",
  starRating: "4.1",
  address: "6 Rue de la Grange aux Belles, 75010 Paris, France",
  openingHours: "12:00pm - 3:00pm; 6:30pm - 10:30pm",
  imageUrl: "mexi-co.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "Bocamexa",
  priceRange: "$",
  starRating: "4.0",
  address: "127 rue Mouffetard, 75005 Paris France",
  openingHours: "11:00am - 10:00pm",
  imageUrl: "bocamexa.jpg"
},
{
  city: "paris",
  cuisine: "mexican",
  name: "El Camion",
  priceRange: "$$",
  starRating: "4.3",
  address: "6 Passage Sainte-Avoye, 75003 Paris, France",
  openingHours: "12:00pm - 3:00pm; 7:00pm - 11:00pm",
  imageUrl: "el-camion.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "JanPho",
  priceRange: "$",
  starRating: "5.0",
  address: "Nalbandyan 47, Yerevan 0025 Armenia",
  openingHours: "10:30am - 10:00pm",
  imageUrl: "janpho.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "Dragon Garden",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Arami str. 76, Yerevan 0002 Armenia",
  openingHours: "11:00am - 12:00am",
  imageUrl: "dragen-garden.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "Tokyoo",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Nalbandyan str. 37, Yerevan 0010 Armenia",
  openingHours: "12:00pm - 12:00am",
  imageUrl: "tokyo.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "Yang Izakaya",
  priceRange: "$",
  starRating: "4.0",
  address: "Pushkin 40, Yerevan Armenia",
  openingHours: "12:00pm - 12:00am",
  imageUrl: "yang-izakaya.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "Ako Sushi",
  priceRange: "$",
  starRating: "4.5",
  address: "6 Martiros Saryan Street, Yerevan 0002 Armenia",
  openingHours: "11:00am - 11:45pm",
  imageUrl: "ako-sushi.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "Made In China Armenia",
  priceRange: "$",
  starRating: "4.0",
  address: "Tumanyan O. str. 19/37, Yerevan 0001 Armenia",
  openingHours: "10:00am - 2:00am",
  imageUrl: "made-in-china.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "Wasabi",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "5 Mashtots Avenue Prospect Mall, Yerevan Armenia",
  openingHours: "10:00am - 1:30am",
  imageUrl: "wasabi.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "Kyoto Lounge Yerevan",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "38 Tumanyan Street Near the intersection with Mashtots Ave., in front of SAS supermarket, Yerevan 0009 Armenia",
  openingHours: "11:00am - 12:00am",
  imageUrl: "kyoto-lounge.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "Beijing Sayat-Nova",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Sayat-Nova str. 33, Yerevan 0060 Armenia",
  openingHours: "11:00am - 11:30pm",
  imageUrl: "beijing.jpg"
},
{
  city: "yerevan",
  cuisine: "asian",
  name: "Katsin Restaurant",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Amiryan str. 4/6, Yerevan 0010 Armenia",
  openingHours: "11:00am - 12:00am",
  imageUrl: "katsin.jpg"
}, 
{
  city: "yerevan",
  cuisine: "italian", 
  name: "De Angelo",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Pushkin str. 31, Yerevan 0002 Armenia",
  openingHours: "9:00am - 12:00am",
  imageUrl: "de-angelo.jpg"
},
{
  city: "yerevan",
  cuisine: "italian", 
  name: "LETE Cafe & Veranda",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "5/1 Northern Avenue Ibis Yerevan Center Hotel, 3rd Floor, Yerevan 0001 Armenia",
  openingHours: "6:30am - 1:00am",
  imageUrl: "lete.jpg"
},
{
  city: "yerevan",
  cuisine: "italian", 
  name: "Casa Nostra Restaurant",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "91 Pavstos Buzand str., Yerevan 0002 Armenia",
  openingHours: "11:00am - 12:00am",
  imageUrl: "casa-nostra.jpg"
},
{
  city: "yerevan",
  cuisine: "italian", 
  name: "Limone Cascade",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Tamanyan str. 3/81, Yerevan 0009 Armenia",
  openingHours: "8:30am - 12:00am",
  imageUrl: "limone.jpg"
},
{
  city: "yerevan",
  cuisine: "italian", 
  name: "Pomodoro Italian Restaurant",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "32 Tumanyan St., Yerevan 0001 Armenia",
  openingHours: "11:00am - 12:00am",
  imageUrl: "pomodoro.jpg"
},
{
  city: "yerevan",
  cuisine: "italian", 
  name: "Mozzarella",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "2 Aram Street, Yerevan 0002 Armenia",
  openingHours: "10:00am - 12:00am",
  imageUrl: "mozzarella.jpg"
},
{
  city: "yerevan",
  cuisine: "italian", 
  name: "Pinsa",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Hanrapetutyan Street 78, Yerevan Armenia",
  openingHours: "9:00am - 11:00pm",
  imageUrl: "pinsa.jpg"
},
{
  city: "yerevan",
  cuisine: "italian", 
  name: "Italiano Ristorante",
  priceRange: "$$$$",
  starRating: "4.0",
  address: "Abovyan str. 3/4, Yerevan 0001 Armenia",
  openingHours: "8:00am - 11:00am; 3:00pm - 11:00pm",
  imageUrl: "italiano-ristorante.jpg"
},
{
  city: "yerevan",
  cuisine: "mexican",
  name: "Los Pueblos",
  priceRange: "$$-$$$", 
  starRating: "4.5", 
  address: "Tamanyan str. 6 Suite 18-19, Yerevan 0009 Armenia", 
  openingHours: "10:00am - 12:00am",
  imageUrl: "los-pueblos.jpg"
},
{
  city: "yerevan",
  cuisine: "mexican",
  name: "Cactus",
  priceRange: "$$-$$$", 
  starRating: "4.0", 
  address: "Mashtots M. ave 42, Yerevan 0002 Armenia", 
  openingHours: "9:00am - 1:30pm",
  imageUrl: "cactus.jpg"
},
{
  city: "yerevan",
  cuisine: "mexican",
  name: "Dos Amigos Mexican Restaurant",
  priceRange: "$$-$$$", 
  starRating: "4.5", 
  address: "23 Teryan St. Near by Northern Avenue, Yerevan 0010 Armenia", 
  openingHours: "11:00am - 11:45pm",
  imageUrl: "dos-amigos.jpg"
},
{
  city: "yerevan",
  cuisine: "mexican",
  name: "Muchacho Mexican Kitchen",
  priceRange: "$", 
  starRating: "4.0", 
  address: "Tumanyan O. str. 19/36, Yerevan 0001 Armenia", 
  openingHours: "10:00am - 4:00am",
  imageUrl: "muchacho.jpg"
},
{
  city: "madrid" ,
  cuisine: "asian",
  name: "Restaurante de Sichuan",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Calle Caballero de Gracia 8 Calle Caballero de Gracia,8, 28013 Madrid Spain",
  openingHours: "1:00pm - 4:30pm; 7:30pm - 12:00pm",
  imageUrl: "r-de-sichuan.jpg"
},
{
  city: "madrid" ,
  cuisine: "asian",
  name: "CHILA",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Calle Silva 2, 28013 Madrid, Spain ",
  openingHours: "12:00pm- 11:00pm",
  imageUrl: "chila.jpg"
},
{
  city: "madrid" ,
  cuisine: "asian",
  name: "Royal Cantonés",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Calle Olvido 92, 28026 Madrid, Spain",
  openingHours: "12:00pm- 1:00am",
  imageUrl: "cantones.jpg"
},
{
  city: "madrid" ,
  cuisine: "asian",
  name: "Dim Sum Market",
  priceRange: "$",
  starRating: "4.0",
  address: "Calle del Principe 19, 28012 Madrid Spain",
  openingHours: "12:00pm- 1:00am",
  imageUrl: "dim-sum.jpg"
},
{
  city: "madrid" ,
  cuisine: "asian",
  name: "El Buda Feliz",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Calle Tudescos 5 Al lado de Gran Vía, 28004 Madrid Spain",
  openingHours: "12:00pm- 12:00am",
  imageUrl: "el-buda-feliz.jpg"
},
{
  city: "madrid" ,
  cuisine: "asian",
  name: "Biang Biang Bar",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Calle Pelayo 8 Local Derecho, 28004 Madrid Spain",
  openingHours:"1:00pm - 4:15pm, 8:00pm - 12:00am",
  imageUrl: "bbb.jpg"
},
{
  city: "madrid" ,
  cuisine: "asian",
  name: "Kzen",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Calle O'donnell 17, 28009 Madrid Spain",
  openingHours: "1:00pm - 4:30pm, 9:00pm - 12:00am",
  imageUrl: "kzen.jpg"
},
{
  city: "madrid" ,
  cuisine: "asian",
  name: "El Rincon De Pangpang",
  priceRange: "$",
  starRating: "4.5",
  address: "Calle Ventura de La Vega 19 Barrio de las Letras, 28014 Madrid Spain",
  openingHours: "12:00pm - 5:00pm, 7:30pm - 12:00am",
  imageUrl: "erdp.jpg"
},
{
  city: "madrid" ,
  cuisine: "asian",
  name: "Shanghai Mama",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "Infanta Mercedes 62, 28020 Madrid Spain",
  openingHours: "12:30pm - 4:30pm, 8:00pm - 12:00am",
  imageUrl: "shanghai-mama.jpg"
},
{
city: "madrid" ,
cuisine: "asian",
name: "Tse-Yang",
priceRange: "$$$$",
starRating: "4",
address: "Calle del Marques de Villamagna 1, 28001 Madrid Spain ",
openingHours: "1:00pm - 3:45pm, 8:00pm - 11:30pm",
imageUrl: "tse-yang.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "Pastamore Alcala",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Calle de Alcalá 191, 28009 Madrid Spain",
  openingHours: "1:00pm - 11:30pm",
  imageUrl: "pastamore.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "Pizzart Villa Luchana",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Calle de Luchana 17, 28010 Madrid Spain",
  openingHours: "10:30am - 12:00am",
  imageUrl: "pvl.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "Trattoria Pulcinella",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Calle Regueros 7, 28004 Madrid Spain",
  openingHours: "1:00pm - 4:00pm; 8:00pm - 11:00pm",
  imageUrl: "trattoria-pulcinella.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "Oven mozzarella Las Tablas",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Calle San Juan de Ortega No 36, 28050 Madrid Spain",
  openingHours: "1:00pm - 12:00am",
  imageUrl: "omlt.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "Ornella Velazquez",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Calle Velázquez 18, 28001 Madrid Spain",
  openingHours: "1:00pm - 4:00pm; 8:00pm - 11:00pm",
  imageUrl: "ornella-velazquez.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "Maruzzella",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Calle Raimundo Fernandez Villaverde 28, 28003 Madrid Spain",
  openingHours: "1:00pm - 4:00pm; 8:00pm - 11:00pm",
  imageUrl: "maruzzella.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "La Pizzateca",
  priceRange: "$",
  starRating: "4.5",
  address: "Calle Leon 35, 28014 Madrid Spain",
  openingHours: "1:00pm - 5:00pm; 7:30pm - 11:00pm",
  imageUrl: "la-pizzateca.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "Peppe Fusco The Italian",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Calle de Fuencarral, 139, 28010 Madrid Spain",
  openingHours: "1:00pm - 4:00pm; 7:00pm - 11:00pm",
  imageUrl: "pfti.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "Oven Mozzarella",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Calle Preciados 11 Esquina Callejón De Preciados, 28013 Madrid Spain",
  openingHours: "11:00am - 12:00am",
  imageUrl: "om.jpg"
},
{
  city: "madrid",
  cuisine: "italian",
  name: "Lettera Trattoria Moderna",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Calle de la Reina 20, Madrid, 28004 Madrid Spain",
  openingHours: "1:30pm - 4:30pm; 8:30pm - 11:15pm",
  imageUrl: "ltm.jpg"
},
{
  city: "madrid",
  cuisine: "mexican", 
  name: "Cherry Pecas", 
  priceRange: "$",
  starRating: "4.5",
  address: "Paseo de San Francisco de Sales 17, 28003 Madrid Spain",
  openingHours: "12:00pm - 12:30am",
  imageUrl: "cherry-pecas.jpg"
},
{
  city: "madrid",
  cuisine: "mexican", 
  name: "Santita Virgen de los Peligros", 
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Calle de la Virgen de los Peligros 10, 28013 Madrid Spain",
  openingHours: "12:30pm - 12:00am",
  imageUrl: "svdlp.jpg"
},
{
  city: "madrid",
  cuisine: "mexican", 
  name: "Tacocteleria", 
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "Calle de Valverde 7 100m Metro Granvia, 28004 Madrid Spain",
  openingHours: "7:30pm - 11:45pm",
  imageUrl: "tacocteleria.jpg"
},
{
  city: "madrid",
  cuisine: "mexican", 
  name: "Tacos & Tapas", 
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Calle Redondilla 7 Barrio Palacio, 28005 Madrid Spain",
  openingHours: "1:30pm - 4:00pm; 9:00pm - 11:00pm",
  imageUrl: "tnt.jpg"
},
{
  city: "madrid",
  cuisine: "mexican", 
  name: "Bakan Madrid", 
  priceRange: "$$$$",
  starRating: "4.5",
  address: "Plaza Independencia 5, 28001 Madrid Spain",
  openingHours: "1:00pm - 11:45pm",
  imageUrl: "bakan.jpg"
},
{
  city: "madrid",
  cuisine: "mexican", 
  name: "Mawey Taco Bar - Gran Via", 
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "Calle de San Bernardo 5 Local 2, 28013 Madrid Spain",
  openingHours: "1:00pm - 4:00pm; 8:30pm - 12:00am",
  imageUrl: "mtbgv.jpg"
},
{
  city: "madrid",
  cuisine: "mexican", 
  name: "Nacho Bravo", 
  priceRange: "$",
  starRating: "4.5",
  address: "Paseo de las Delicias 139, 28045 Madrid Spain",
  openingHours: "8:00pm - 11:00pm",
  imageUrl: "nacho-bravo.jpg"
},
{
  city: "madrid",
  cuisine: "mexican", 
  name: "La Tia Juana Madrid Atocha", 
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "C. de Atocha, 74,, 28012 Madrid Spain",
  openingHours: "1:00pm - 4:30pm; 8:00pm - 11:30pm",
  imageUrl: "ltjma.jpg"
},{
  city: "madrid",
  cuisine: "mexican", 
  name: "Takos Al Pastor", 
  priceRange: "$",
  starRating: "4.5",
  address: "Calle Abada 2, 28013 Madrid Spain",
  openingHours: "1:30pm - 12:00am",
  imageUrl: "tap.jpg"
},
{
  city: "madrid",
  cuisine: "mexican", 
  name: "Taqueria Tiki Taco", 
  priceRange: "$",
  starRating: "4.5",
  address: "Calle de San Bernardo 12, 28015 Madrid Spain",
  openingHours: "1:00pm - 2:00am",
  imageUrl: "ttt.jpg"
},
{
  city: "los angeles" ,
  cuisine: "asian",
  name: "Din Tai Fung",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "1164 Galleria Way, Glendale, CA 91204",
  openingHours: "10:00am - 9:00pm; 11:00am - 10:00pm",
  imageUrl: "dtf.jpg"
},
{
  city: "los angeles",
  cuisine: "asian",
  name: "Sushi Gen",
  priceRange: "$$",
  starRating: "4.5",
  address: "422 E 2nd St Central Ave., Los Angeles, CA 90012-4209",
  openingHours: "11:15am - 2:00pm; 5:30pm - 9:30pm ",
  imageUrl: "sushi-gen.jpg"
},
{
  city: "los angeles",
  cuisine: "asian",
  name: "Katsuya",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "6300 Hollywood Blvd, Los Angeles, CA 90028-6303",
  openingHours: "5:00pm - 10:30pm; 5:00pm - 11:00pm",
  imageUrl: "katsuya.jpg"
},
{
  city: "los angeles",
  cuisine: "asian",
  name: "N/Naka",
  priceRange: "$$$$",
  starRating: "5.0",
  address: "3455 Overland Ave, Los Angeles, CA 90034-5419",
  openingHours: "5:00pm - 9:30pm",
  imageUrl: "nnaka.jpg"
},
{
  city: "los angeles",
  cuisine: "asian",
  name: "SUGARFISH by sushi nozawa",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "600 W 7th St, Los Angeles, CA 90017-3842",
  openingHours: "11:30am - 10:00pm",
  imageUrl: "sugarfish.jpg"
},
{
  city: "los angeles",
  cuisine: "asian",
  name: "Tatsu Ramen",
  priceRange: "$$",
  starRating: "4.5",
  address: "2123 Sawtelle Blvd, Los Angeles, CA 90025-6200",
  openingHours: "11:00am - 3:00am",
  imageUrl: "tatsu-ramen.jpg"
},
{
  city: "los angeles",
  cuisine: "asian",
  name: "Ayara Thai Cuisine",
  priceRange: "$$ - $$$",
  starRating: "4.5",
  address: "6245 W 87th St, Los Angeles, CA 90045-3901",
  openingHours: "10:30am - 10:00pm",
  imageUrl: "ayara.jpg"
},
{
  city: "los angeles",
  cuisine: "asian",
  name: "Genwa Korean BBQ",
  priceRange: "$$ - $$$",
  starRating: "4.5",
  address: "5115 Wilshire Blvd Ste A, Los Angeles, CA 90036-4366",
  openingHours: "11:30am - 11:00pm",
  imageUrl: "genwa.jpg"
},
{
  city: "los angeles",
  cuisine: "asian",
  name: "Nobu Los Angeles",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "903 North La Cienega Boulevard, West Hollywood, CA 90069",
  openingHours: "6:00pm - 10:00pm",
  imageUrl: "nobu.jpg"
},
{
  city: "los angeles",
  cuisine: "asian",
  name: "Luv2Eat Thai Bistro",
  priceRange: "$$ - $$$",
  starRating: "4.5",
  address: "6660 W Sunset Blvd Unit P, Los Angeles, CA 90028-7178",
  openingHours: "11:00am - 10:00pm",
  imageUrl: "thei-bistro.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "Gale's Italian Restaurant and Bar",
  priceRange: "$-$$",
  starRating: "4.5",
  address: "452 S Fair Oaks Ave, Pasadena, CA 91105-2634",
  openingHours: "11:30am - 8:00pm",
  imageUrl: "gale.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "Bestia",
  priceRange: "$$$",
  starRating: "4.5",
  address: "2121 E 7th Pl, Los Angeles, CA 90021-1755",
  openingHours: "5:00pm - 11:00pm",
  imageUrl: "bestia.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "Bottega Louie",
  priceRange: "$$ - $$$",
  starRating: "4.5",
  address: "700 S Grand Ave, Los Angeles, CA 90017-3813",
  openingHours: "8:00am - 11:00pm",
  imageUrl: "bottega-louie.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "The Luggage Room Pizzeria",
  priceRange: "$$ - $$$",
  starRating: "4.5",
  address: "260 S Raymond Ave, Pasadena, CA 91105-2014",
  openingHours: "11:00am - 9:00pm",
  imageUrl: "tlrp.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "Angelini Alimentari",
  priceRange: "$$ - $$$",
  starRating: "4.5",
  address: "7317 Beverly Blvd, Los Angeles, CA 90036-2534",
  openingHours: "7:00am - 10:00pm",
  imageUrl: "aa.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "Maccheroni Republic",
  priceRange: "$$ - $$$",
  starRating: "4.5",
  address: "332 S. Broadway, Los Angeles, CA 90013-1208",
  openingHours: "11:00am - 9:30pm",
  imageUrl: "mr.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "Raffaello Ristorante",
  priceRange: "$$ - $$$",
  starRating: "4.5",
  address: "400 S Pacific Ave, Los Angeles, CA 90731-2626",
  openingHours: "11:00am - 10:00pm",
  imageUrl: "rr.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "Cecconi's West Hollywood",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "8764 Melrose Ave, Los Angeles, CA 90069-5015",
  openingHours: "11:30am - 10:00pm",
  imageUrl: "cwh.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "Pizzeria Mozza",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "641 N Highland Ave, Los Angeles, CA 90036-2017",
  openingHours: "11:30am - 10:00pm",
  imageUrl: "pm.jpg"
},
{
  city: "los angeles",
  cuisine: "italian",
  name: "The Terrace",
  priceRange: "$$ - $$$",
  starRating: "4.0",
  address: "8358 W Sunset Blvd Sunset Tower Hotel, West Hollywood, CA 90069-1516",
  openingHours: "6:00pm - 11:30pm",
  imageUrl: "tt.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "Don Cuco",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "3911 W Riverside Dr, Burbank, CA 91505-4327",
  openingHours: "11:00am - 10:00pm",
  imageUrl: "don-cuco.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "Gracias Madre",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "8905 Melrose Ave, West Hollywood, CA 90069-5605",
  openingHours: "11:00am - 9:00pm",
  imageUrl: "gm.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "Joselito's Mexican Food",
  priceRange: "$-$$",
  starRating: "4.5",
  address: "7308 Foothill Blvd Tujunga, Los Angeles, CA 91042-2727",
  openingHours: "11:00am - 9:30pm",
  imageUrl: "jmf.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "Guisados",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "1261 W Sunset Blvd, Los Angeles, CA 90026-4422",
  openingHours: "10:30am - 10:00pm",
  imageUrl: "guisados.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "Green Onion",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "145 W 6th St San Pedro, Los Angeles, CA 90014-1903",
  openingHours: "11:00am - 9:30pm",
  imageUrl: "go.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "Calle Tacos",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "6508 Hollywood Blvd, Los Angeles, CA 90028-6210",
  openingHours: "11:00am - 1:00am",
  imageUrl: "ct.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "Guelaguetza Restaurante",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "3014 W Olympic Blvd, Los Angeles, CA 90006-2516",
  openingHours: "11:00am - 9:00pm",
  imageUrl: "gr.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "El Compadre",
  priceRange: "$$-$$$",
  starRating: "5.0",
  address: "1449 W Sunset Blvd, Los Angeles, CA 90026-3457",
  openingHours: "11:00am - 2:00am",
  imageUrl: "compadre.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "El Coyote",
  priceRange: "$$-$$$",
  starRating: "4.0",
  address: "7312 Beverly Blvd, Los Angeles, CA 90036-2535",
  openingHours: "12:00pm - 9:00pm",
  imageUrl: "coyote.jpg"
},
{
  city: "los angeles" ,
  cuisine: "mexican",
  name: "Tocaya - Venice",
  priceRange: "$$-$$$",
  starRating: "4.5",
  address: "1715 Pacific Ave Venice, Los Angeles, CA 90291",
  openingHours: "11:00am - 9:00pm",
  imageUrl: "tv.jpg"
},
{ 
  city: "salzburg" , 
  cuisine: "asian", 
  name: "Yaoyao",
  priceRange: "$$-$$$", 
  starRating: "4.5", 
  address: "Europastrasse 1, Salzburg 5020 Austria", 
  openingHours: "11:30am - 10:00pm",
  imageUrl: "yaoyao.jpg"
},
{ 
  city: "salzburg" , 
  cuisine: "asian", 
  name: "Uncle Van",
  priceRange: "$", 
  starRating: "4.5", 
  address: "Steingasse 9, Salzburg 5020 Austria", 
  openingHours: "12:00pm - 8:00pm; 11:30pm - 9:00pm",
  imageUrl: "uv.jpg"
},
{ 
  city: "salzburg" , 
  cuisine: "asian", 
  name: "Bangkok",
  priceRange: "$$-$$$", 
  starRating: "4.5", 
  address: "Bayerhamerstrasse 33, Salzburg 5020 Austria", 
  openingHours: "11:30am - 2:30pm; 5:30pm - 11:00pm",
  imageUrl: "bangkok.jpg" 
},
{ 
  city: "salzburg" , 
  cuisine: "asian", 
  name: "Nagano",
  priceRange: "$$-$$$", 
  starRating: "5.0", 
  address: "Griesgasse 19A Located in the passageway between Griesgasse 19 and Getreidegasse 24, Salzburg 5020 Austria", 
  openingHours: "11:30am - 3:30pm; 5:30pm - 10:00pm",
  imageUrl: "nagano.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "asian", 
  name: "Asia Kitchen",
  priceRange: "$$-$$$", 
  starRating: "4.0", 
  address: "Ernest-Thun-Strasse 13, Salzburg 5020 Austria", 
  openingHours: "11:30am - 2:30pm; 5:30pm - 10:30pm",
  imageUrl: "ak.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "asian", 
  name: "Tokyo Bay",
  priceRange: "$$-$$$", 
  starRating: "4.5", 
  address: "Ignaz-Harrer-Strasse 38, Salzburg 5020 Austria", 
  openingHours: "11:30am - 10:30pm; 11:30am - 2:30pm; 5:30pm - 10:30pm", 
  imageUrl: "tb.jpg"
},
{
  city: "salzburg" , 
  cuisine: "asian", 
  name: "Wokman Natural Kitchen",
  priceRange: "$", 
  starRating: "4.5", 
  address: "Kapitelgasse 11, Salzburg 5020 Austria", 
  openingHours: "11:30am - 8:00pm; 11:30am - 3:00pm",
  imageUrl: "wnk.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "asian", 
  name: "Mister Le",
  priceRange: "$", 
  starRating: "4.5", 
  address: " Hildmannplatz 2a, Salzburg 5020 Austria", 
  openingHours: "11:00am - 9:00pm; 11:00am - 10:00pm",
  imageUrl: "ml.jpg"  
},
{
  city: "salzburg" , 
  cuisine: "asian", 
  name: "My Indigo Kongresshaus",
  priceRange: "$", 
  starRating: "4.5", 
  address: "Auerspergstrasse 10, Salzburg 5020 Austria", 
  openingHours: "12:00am - 9:00pm; 11:00am - 10:00pm",
  imageUrl: "mik.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "asian", 
  name: "Yuen Restaurant",
  priceRange: "$$ - $$$", 
  starRating: "4.0", 
  address: "Getreidegasse 24, Salzburg 5020 Austria", 
  openingHours: "11:30am - 3:00pm; 5:30pm - 10:00pm",
  imageUrl: "yuen.jpg"  
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Restaurant Wasserfall",
  priceRange: "$$ - $$$", 
  starRating: "4.5", 
  address: "Linzer Gasse 10 Fechado, Salzburg 5020 Austria", 
  openingHours: "5:00pm - 12:00am",
  imageUrl: "wasserfall.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Ristorante Pizzeria da Giacomo",
  priceRange: "$$ - $$$", 
  starRating: "4.5", 
  address: "Nonntaler Hauptstrasse 47 5020 Salzburg, Salzburg 5020 Austria", 
  openingHours: "11:30am - 2:30pm; 5:30pm - 11:59pm",
  imageUrl: "rpdg.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Osteria NOI ",
  priceRange: "$$ - $$$", 
  starRating: "4.5", 
  address: " Muehlbachstrasse 21, Seekirchenam Wallersee 5201 Austria", 
  openingHours: "5:30pm - 10:00pm",
  imageUrl: "osteria.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Ristorante Di Renzi ",
  priceRange: "$$ - $$$", 
  starRating: "4.0", 
  address: " Linzer Gasse 4 A 5020, Salzburg 5020 Austria", 
  openingHours: "5:30pm - 12:00am",
  imageUrl: "rdr.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Pasta e Vino ",
  priceRange: "$$ - $$$", 
  starRating: "4.0", 
  address: " Wolf-Dietrich-Strasse 31, Salzburg 5020 Austria", 
  openingHours: "11:30am - 8:30pm",
  imageUrl: "pev.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Osteria Cavalli",
  priceRange: "$$ - $$$", 
  starRating: "4.0", 
  address: " Leopoldskronstrasse 1, Salzburg 5020 Austria", 
  openingHours: "11:30am - 2:00pm; 5:30pm - 10:45pm",
  imageUrl: "oc.jpg"  
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Ristorante Pizzeria Toscana",
  priceRange: "$$ - $$$", 
  starRating: "4.0", 
  address: " Saint-Julien-Strasse 7, Salzburg 5020 Austria", 
  openingHours: " 11:00am - 11:00pm; 09:00am - 11:00pm",
  imageUrl: "rpt.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Ristorante Beccofino",
  priceRange: "$$ - $$$", 
  starRating: "4.0", 
  address: " Rupertgasse 7, Salzburg 5020 Austria", 
  openingHours: " 11:00am - 2:00pm; 5:00pm - 10:00pm",
  imageUrl: "beccofino.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Trattoria Domani",
  priceRange: "$$ - $$$", 
  starRating: "4.0", 
  address: "Kaigasse 33, Salzburg 5020 Austria", 
  openingHours: " 11:30am - 10:30pm",
  imageUrl: "td.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "italian", 
  name: "Da Ciro",
  priceRange: "$$ - $$$", 
  starRating: "4.5", 
  address: "Robinigstrasse 15, Salzburg 5020 Austria", 
  openingHours: " 11:30am - 2:00pm; 5:30pm - 10:30pm",
  imageUrl: "dc.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "mexican", 
  name: "Die Cabreras – Mexiko in Salzburg",
  priceRange: "$$ - $$$", 
  starRating: "4.5", 
  address: " Priesterhausgasse 20, Salzburg 5020 Austria", 
  openingHours: " 10:00am - 10:00pm; 4:00pm - 10:00pm",
  imageUrl: "dcm.jpg"  
},
{
  city: "salzburg" , 
  cuisine: "mexican", 
  name: "Burrito Factory",
  priceRange: "$", 
  starRating: "4.0", 
  address: "Priesterhausgasse 20, Salzburg 5020 Austria", 
  openingHours: " 11:30am – 9:30pm",
  imageUrl: "C:\Users\Ani\Desktop\IBDP\IA\CS\Code\bf.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "mexican", 
  name: "Tepito",
  priceRange: "$$ - $$$", 
  starRating: "4.0", 
  address: "Salzachtalstrasse 3 5400 Hallein, Hallein 5400 Austria", 
  openingHours: " 11:00am - 01:00am; 5:00pm – 01:00am",
  imageUrl: "tepito.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "mexican", 
  name: "Santa Fe",
  priceRange: "$$ - $$$", 
  starRating: "3.5", 
  address: "Wiener Bundesstrasse 7, Hallwang 5300 Austria", 
  openingHours: " 5:00pm – 02:00am",
  imageUrl: "santa-fe.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "mexican", 
  name: "D’ouro Soulfood Bitsto",
  priceRange: "$", 
  starRating: "5.0", 
  address: "Auerspergstraße 10, Salzburg 5020 Austria", 
  openingHours: "11:00am - 7:00pm",
  imageUrl: "dsb.jpg" 
},
{
  city: "salzburg" , 
  cuisine: "mexican", 
  name: "Potatoes & Co",
  priceRange: "$", 
  starRating: "3.5", 
  address: "Kasernenstrasse 1, Wals 5071 Austria", 
  openingHours: "09:30am - 9:00pm",
  imageUrl: "pc.jpg" 
}
];

localStorage.setItem("restaurant", JSON.stringify(restaurant));
