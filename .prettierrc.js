const CoderPrettierConfig = require("coder-prettier-config");

module.exports = {
  ...CoderPrettierConfig,

  // 自定义配置
  // semi: true,

  plugins: ["prettier-plugin-tailwindcss"],
};
