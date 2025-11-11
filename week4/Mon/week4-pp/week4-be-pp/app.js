const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
const morgan = require("morgan");
// 使用 morgan 记录请求日志
app.use(morgan("tiny"));

// Middleware to parse JSON — 必须早于路由挂载
app.use(express.json());

// 挂载 routers
app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
