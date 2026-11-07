/* El Sativo demo data, 2026-11-07.
 REAL: products, names, images, copy and prices from https://elsativo.com (Shopify /products.json; the store runs on Flaviar Checkout).
 Network retailers: active, in-stock (0 < stock < 9000) LiquidCommerce retailer variants matched on product name, 2026-11-07.
 Gopuff ZIPs: delivery ZIPs of Gopuff locations carrying the product in the gopuff_feed availability snapshot, 2026-11-07.
 NOT REAL: no order is placed; shipping ($14.99), Gopuff fee ($4.99) and 8% tax are illustrative. */
window.DEMO = {
 "key": "elsativo",
 "brand": "El Sativo",
 "storeName": "El Sativo",
 "orderPrefix": "ELS",
 "catalog": {
  "bundle": {
   "name": "The Tequila Trio",
   "short": "The Tequila Trio",
   "size": "750ML",
   "tag": "organic single-estate tequila",
   "price": 17997,
   "image": "assets/p-bundle.jpg",
   "gallery": [
    "assets/p-bundle.jpg"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "Introducing our Tequila Trio Bundle – an exquisite collection curated for aficionados who appreciate the artistry of exceptional tequila. Elevate your spirits experience with three distinct bottles, each carefully selected to provide a journey through the rich and nuanced world of agave craftsmanship.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "anejo": {
   "name": "El Sativo Organic Añejo",
   "short": "El Sativo Organic Añejo",
   "size": "750ML",
   "tag": "organic single-estate tequila",
   "price": 6999,
   "image": "assets/p-anejo.jpg",
   "gallery": [
    "assets/p-anejo.jpg"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "El Sativo Single Estate Tequila Añejo. Aged 16 months in Ex-Tennessee Whiskey Barrels. It's sensual and lush with mellow smoke and candied sweetness; bold spice and a silky finish. 2021 AÑEJO New York World Spirits Competition Silver 2022 AÑEJO World Tequila Awards Best Añejo Gold 2022 AÑEJO San Francisco World Spirits Competition Silver 2023 AÑEJO San Francisco World Spirits Competition Gold",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "reposado": {
   "name": "El Sativo Organic Reposado",
   "short": "El Sativo Organic Reposado",
   "size": "750ML",
   "tag": "organic single-estate tequila",
   "price": 5999,
   "image": "assets/p-reposado.png",
   "gallery": [
    "assets/p-reposado.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "Aged 9 months in Ex- Bourbon Barrels. El Sativo Reposado is warm and alluring with a subtle sweet spice; smooth and creamy, with a sassy refined finish. 2021 REPOSADO San Francisco World Spirits Competition Double Gold 2021 REPOSADO Wine Enthusiast 92 Points 2021 REPOSADO Tequila Aficionado Gold 2022 REPOSADO Anthony Dias Blue Blue Lifestyle 92 Points Gold",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "blanco": {
   "name": "El Sativo Organic Blanco",
   "short": "El Sativo Organic Blanco",
   "size": "750ML",
   "tag": "organic single-estate tequila",
   "price": 4999,
   "image": "assets/p-blanco.png",
   "gallery": [
    "assets/p-blanco.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "A Single Estate masterpiece and the winner of three double gold awards, including 2020 Tequila of the Year (San Francisco World Spirits Competition). Unaged. A vibrant citrus with sweet agave, bold stone fruits with touches of vanilla, earth, pepper, and a long savory finish. 2020 BLANCO Anthony Dias Blue Blue Lifestyle Double Gold 2020 BLANCO San Francisco World Spirits Competition Best Of Class 2020 BLANCO San Fran",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  }
 },
 "order": [
  "bundle",
  "anejo",
  "reposado",
  "blanco"
 ],
 "defaultHandle": "bundle",
 "retailers": [],
 "realHandles": [],
 "gopuff": null,
 "noShip": [
  "AK",
  "HI"
 ],
 "rates": {
  "shipping": 1499,
  "freeOver": 0,
  "gopuff": 499
 },
 "taxRate": 0.08,
 "expressAddress": [
  "233 S Wacker Dr",
  "Chicago",
  "60606"
 ],
 "fulfilIcon": "assets/logo.png",
 "rbNote": "",
 "text": {
  "fulfilReal": "In stock at licensed retailers in our network today. Enter your ZIP at checkout for delivery or shipping.",
  "fulfilLaunch": "Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.",
  "cardReal": "In stock at network retailers",
  "cardLaunch": "Ships from licensed retailers",
  "soldOut": "Sold out.",
  "noShip": "We are not shipping to {state} yet.",
  "launchNote": "In the demo, no network retailer stocks this bottle yet. Licensed retailers are connected during onboarding, which takes about one week."
 }
};
