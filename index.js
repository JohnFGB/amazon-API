const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = 5000;

//const apiKey = "accff6f1cbbe27d3cc8f76f78aa7ced4";

const generateApiUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => res.send("welcome to amazon scraper API"));

//get product detail
app.get("/products/:productId/reviews", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(`${generateApiUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);

    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});
//get product detail
app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(`${generateApiUrl(apiKey)}&url=https://www.amazon.com/dp/${productId}`);

    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

//get product offers
app.get("/products/:productId/offers", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(`${generateApiUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);

    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

//get search result
app.get("/search/:searchQuery", async (req, res) => {
  const { searchQuery } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(`${generateApiUrl(ap)}&url=https://www.amazon.com/s?k=${searchQuery}`);

    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));
