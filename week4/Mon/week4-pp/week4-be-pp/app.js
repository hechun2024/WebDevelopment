const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

// Middleware to parse JSON — 必须早于路由挂载
app.use(express.json());

// 挂载 routers
app.use("/users", userRouter);
app.use("/tours", tourRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
