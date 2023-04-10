const express = require("express");
require("./models/db");
const userRouter = require("./routes/userRoutes");
const app = express();

app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("server started on port no. 5000");
});
