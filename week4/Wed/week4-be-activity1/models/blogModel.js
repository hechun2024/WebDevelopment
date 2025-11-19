// 1️⃣ 引入 mongoose 模块 —— 这是与 MongoDB 数据库交互的核心库
const mongoose = require("mongoose");

// 2️⃣ 从 mongoose 对象中取出 Schema 构造函数
// Schema 是用来定义“文档结构”的（也就是表结构）
const Schema = mongoose.Schema;

// 3️⃣ 创建一个新的 Schema —— 相当于定义数据库中每个 blog 文档的结构
const blogSchema = new Schema(
  {
    // 标题字段：必须是字符串类型，并且是必填（required）
    title: {
      type: String, // 指定类型为字符串
      required: true, // 不能为空
    },

    // 正文字段：存放博客内容
    body: {
      type: String, // 字符串类型
      required: true, // 必填
    },

    // 作者字段：记录是谁写的
    author: {
      type: String, // 字符串
      required: true, // 必填
    },

    // 第二个参数是 Schema 的配置选项
  },
  {
    // timestamps: true 表示自动生成两个时间字段：
    //  - createdAt：文档创建时间
    //  - updatedAt：文档最后更新时间
    timestamps: true,
  }
);

// 4️⃣ 导出模型（Model）
// mongoose.model() 会基于这个 schema 创建一个模型类 “Blog”
// - 第一个参数 'Blog' 是模型名（Mongoose 会自动变成复数形式 → 'blogs'）
// - 第二个参数是我们刚定义的 schema
// 之后就可以用这个模型去：增、删、改、查数据库
module.exports = mongoose.model("Blog", blogSchema);
