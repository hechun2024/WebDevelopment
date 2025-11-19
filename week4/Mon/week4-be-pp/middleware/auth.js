// middleware/auth.js
const auth = (req, res, next) => {
  // 从 query 参数读取 ?admin=true
  const isAdmin = req.query.admin === "true";

  // 如果不是管理员
  if (!isAdmin) {
    return res.status(403).json({ message: "Access denied: admin only" });
  }

  // 如果是管理员，继续执行下一个中间件或路由
  next();
};

module.exports = auth;
