const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorMiddleWare = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//middleError
app.use(errorMiddleWare);
//cookie
app.use(cookieParser());
//
const product = require("./productRouter/productRouter");
const user = require("./productRouter/userRoute");
const order = require("./productRouter/orderRoute");
const payment = require("./productRouter/paymentRoute");
const review = require("./productRouter/reviewRouter");
const subscribe = require("./productRouter/subscribeRourter");
//
app.use("https://fashion-mern-ecommerce-i28m.vercel.app", product);
app.use("https://fashion-mern-ecommerce-i28m.vercel.app", user);
app.use("https://fashion-mern-ecommerce-i28m.vercel.app", order);
app.use("https://fashion-mern-ecommerce-i28m.vercel.app", payment);
app.use("https://fashion-mern-ecommerce-i28m.vercel.app", review);
app.use("https://fashion-mern-ecommerce-i28m.vercel.app", subscribe);

app.use(express.static(path.join(__dirname, "../mern-ecommerce/build")));
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../mern-ecommerce/build/index.html"));
});

// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false && npm install --prefix mern-ecommerce && npm run build --prefix mern-ecommerce"

// app.use(express.static(path.join(__dirname, "../mern-ecommerce/build")));
// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "../mern-ecommerce/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });
module.exports = app;
