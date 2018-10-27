const presets = [
  "@babel/preset-env",
  "@babel/preset-react"
];

const plugins = [
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties"
];

if (process.env["ENV"] === "development") {
  plugins.push("react-hot-loader/babel");
}

module.exports = { presets, plugins }
