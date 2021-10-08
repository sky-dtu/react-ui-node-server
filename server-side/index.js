const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3


const products = [
  {
    id: 1,
    url: "https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-seo-web-development-company-inipagistudio-mixed-inipagistudio.png",
    productTitle: "SEO",
    productDesc: "This is a dummy description for each Product. This is a dummy description for each Product. This is a dummy description for each Product"
  },
  {
    id: 2,
    url: "https://img.icons8.com/ios/150/000000/branding.png",
    productTitle: "BRANDING",
    productDesc: "This is a dummy description for each Product. This is a dummy description for each Product. This is a dummy description for each Product."
  },
  {
    id: 3,
    url: "https://img.icons8.com/fluency/48/000000/logo.png",
    productTitle: "LOGO",
    productDesc: "This is a dummy description for each Product. This is a dummy description for each Product. This is a dummy description for each Product."
  },
];





app.get('/api', (req, res) => {
  // res.send({ 
  //   express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' 
  // });

  res.send(products);
});

app.listen(port, () => console.log(`Listening on port ${port}`));