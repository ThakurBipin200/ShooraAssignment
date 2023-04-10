const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/login-signup", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
